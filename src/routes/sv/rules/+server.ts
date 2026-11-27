import { error } from '@sveltejs/kit';

import globalRule from '#lib/assets/rules/global.mdc?raw';
import neverthrowRule from '#lib/assets/rules/neverthrow.mdc?raw';
import svelteRule from '#lib/assets/rules/svelte.mdc?raw';
import tailwindcssRule from '#lib/assets/rules/tailwindcss.mdc?raw';
import convexRule from '#lib/assets/rules/convex.mdc?raw';

const RULES = {
	global: globalRule,
	neverthrow: neverthrowRule,
	svelte: svelteRule,
	tailwindcss: tailwindcssRule,
	convex: convexRule
} as const;

type RuleName = keyof typeof RULES;
const VALID_RULES = Object.keys(RULES) as RuleName[];

export const GET = ({ url }) => {
	const rule = url.searchParams.get('rule');

	if (!rule) {
		error(400, 'Missing required query parameter: rule');
	}

	if (!VALID_RULES.includes(rule as RuleName)) {
		error(400, `Invalid rule. Must be one of: ${VALID_RULES.join(', ')}`);
	}

	const content = RULES[rule as RuleName];

	return new Response(content, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8'
		}
	});
};
