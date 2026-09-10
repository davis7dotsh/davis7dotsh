import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { parse } from 'svelte/compiler';

const catalogPath = 'src/lib/i18n/locales/en.json';
const metadataPath = 'src/lib/i18n/locales/en.metadata.json';
const catalog = JSON.parse(readFileSync(catalogPath, 'utf8'));
const metadata = JSON.parse(readFileSync(metadataPath, 'utf8'));
const context =
	'Ben Davis’s personal website. Casual, concise first-person voice for developers. Preserve brand/product names, commands, keyboard shortcuts, and numbered XML-like formatting placeholders exactly. Translate complete sentences naturally.';
const fields = new Set([
	'description',
	'title',
	'alt',
	'note',
	'logoAlt',
	'category',
	'label',
	'subtitle',
	'summary',
	'tags',
	'pros',
	'cons'
]);
function add(value, file) {
	if (typeof value !== 'string' || !value.trim()) return;
	const text = value.replace(/\s+/g, ' ').trim();
	const key = `m_${createHash('sha256').update(text).digest('hex').slice(0, 12)}`;
	catalog[key] ??= text;
	metadata[key] ??= { context: `${context} Source: ${file}` };
}
function walk(node, file) {
	if (!node || typeof node !== 'object') return;
	if (node.type === 'CallExpression' && node.callee.name === 'tr')
		add(node.arguments[0]?.value, file);
	if (node.type === 'Property' && fields.has(node.key.name)) add(node.value.value, file);
	if (node.type === 'Component' && node.name === 'RichText') {
		const attr = node.attributes.find((attribute) => attribute.name === 'message');
		const value = Array.isArray(attr?.value) ? attr.value[0] : attr?.value;
		add(value?.expression?.value ?? value?.data, file);
	}
	if (node.type === 'Attribute' && ['label', 'backLabel'].includes(node.name))
		add(node.value?.[0]?.data, file);
	for (const [key, value] of Object.entries(node)) {
		if (['loc', 'css'].includes(key)) continue;
		if (Array.isArray(value)) value.forEach((child) => walk(child, file));
		else if (value && typeof value === 'object') walk(value, file);
	}
}
for (const file of readdirSync('src', { recursive: true }).filter((file) =>
	file.endsWith('.svelte')
)) {
	walk(parse(readFileSync(`src/${file}`, 'utf8'), { modern: true }), file);
}
function collectData(value, key, file) {
	if (typeof value === 'string' && fields.has(key)) add(value, file);
	else if (Array.isArray(value)) value.forEach((child) => collectData(child, key, file));
	else if (value && typeof value === 'object')
		Object.entries(value).forEach(([name, child]) => collectData(child, name, file));
}
for (const file of readdirSync('src/lib/ai/data').filter((file) => file.endsWith('.json'))) {
	collectData(JSON.parse(readFileSync(`src/lib/ai/data/${file}`, 'utf8')), '', file);
}
for (const text of ['Hover or focus a key', 'Hover or focus a key to see the keybinding'])
	add(text, 'Keyboard.svelte');
writeFileSync(catalogPath, JSON.stringify(catalog, null, '\t') + '\n');
writeFileSync(metadataPath, JSON.stringify(metadata, null, '\t') + '\n');
console.log(`Extracted ${Object.keys(catalog).length} source messages.`);
