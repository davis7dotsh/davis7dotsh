#!/usr/bin/env node
// Design-system guardrail for davis7.sh.
//
// Catches the visual invariants from DESIGN.md that are NOT theme-aware tokens,
// so foreign / drifting UI can't sneak back in. It deliberately does NOT police
// copy voice (casing / punctuation) — that is an editorial choice, not a token.
//
// Run with: pnpm lint:design
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const SCAN_DIRS = ['src/routes', 'src/lib'];

// The OG card is a self-contained 1200x630 image render target that must look
// identical regardless of the visitor's theme, so it is exempt from these rules.
const FILE_EXEMPT = new Set(['src/routes/og/+page.svelte']);

const RULES = [
	{
		id: 'no-rounded',
		re: /\brounded-(?!none\b)[a-z0-9[\].\/-]+/g,
		msg: 'rounded-* utility — border-radius is globally 0; sharp edges are identity'
	},
	{
		id: 'no-palette-color',
		re: /\b(?:bg|text|border|from|via|to|ring|fill|stroke|decoration|outline|divide|accent|caret|placeholder)-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950)\b/g,
		msg: 'tailwind palette color utility — use the --color-* tokens (they flip with the theme)'
	},
	{
		id: 'no-heavy-shadow',
		re: /\bshadow-(?:sm|md|lg|xl|2xl)\b/g,
		msg: 'heavy shadow utility — only .content-sheet and .toast carry shadows'
	},
	{
		id: 'no-scale',
		re: /\bscale\(|\b(?:[a-z-]+:)*scale-[a-z0-9[\].\/-]+\b/g,
		msg: 'scale() transform — the only hover lift is translateY(-1px)'
	},
	{
		id: 'no-glass',
		re: /\bbackdrop-blur(?:-[a-z0-9[\]-]+)?\b/g,
		msg: 'backdrop-blur (glass trope) — allowed only on the theme toggle and toasts',
		allow: new Set(['src/lib/components/ThemeToggle.svelte'])
	}
];

function walk(dir) {
	const out = [];
	for (const name of readdirSync(dir)) {
		const full = join(dir, name);
		if (statSync(full).isDirectory()) out.push(...walk(full));
		else if (name.endsWith('.svelte')) out.push(full);
	}
	return out;
}

const files = SCAN_DIRS.flatMap((d) => walk(join(ROOT, d)));
const violations = [];

for (const file of files) {
	const rel = relative(ROOT, file).replaceAll('\\', '/');
	if (FILE_EXEMPT.has(rel)) continue;
	const lines = readFileSync(file, 'utf8').split('\n');
	for (const rule of RULES) {
		if (rule.allow?.has(rel)) continue;
		lines.forEach((line, i) => {
			rule.re.lastIndex = 0;
			let m;
			while ((m = rule.re.exec(line))) {
				violations.push({ rel, line: i + 1, match: m[0], rule });
			}
		});
	}
}

if (violations.length === 0) {
	console.log(`design guardrail: clean (${files.length} files scanned)`);
	process.exit(0);
}

console.error(`design guardrail: ${violations.length} violation(s)\n`);
for (const v of violations) {
	console.error(`  ${v.rel}:${v.line}  [${v.rule.id}] "${v.match}"`);
	console.error(`      ${v.rule.msg}`);
}
console.error(
	'\nSee DESIGN.md. If a use is genuinely justified, add an exemption in scripts/check-design.mjs.'
);
process.exit(1);
