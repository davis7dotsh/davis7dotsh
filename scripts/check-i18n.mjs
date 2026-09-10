import { readFileSync } from 'node:fs';
const config = JSON.parse(readFileSync('gt.config.json', 'utf8'));
const source = JSON.parse(readFileSync('src/lib/i18n/locales/en.json', 'utf8'));
const tokens = (value) => (value.match(/<\/?s\d+>|\{\w+\}/g) ?? []).sort().join('|');
const errors = [];
for (const locale of config.locales) {
	const catalog = JSON.parse(readFileSync(`src/lib/i18n/locales/${locale}.json`, 'utf8'));
	for (const [key, value] of Object.entries(source)) {
		if (typeof catalog[key] !== 'string' || !catalog[key].trim())
			errors.push(`${locale}: missing ${key}`);
		else if (tokens(value) !== tokens(catalog[key]))
			errors.push(`${locale}: altered placeholders in ${key}`);
	}
}
if (errors.length) {
	console.error(errors.join('\n'));
	process.exitCode = 1;
} else
	console.log(
		`${config.locales.length} catalogs complete; ${Object.keys(source).length} messages each. All interpolation and rich-text placeholders preserved.`
	);
