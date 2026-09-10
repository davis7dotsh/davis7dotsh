import { redirect } from '@sveltejs/kit';
import { withLocale, isLocale } from '$lib/i18n/config';
import { getIndex } from '$lib/ai/data';

export function load({ params }: import('./$types').PageServerLoadEvent) {
	const index = getIndex();
	redirect(
		307,
		withLocale(`/ai/${index.latestSlug}`, params.lang && isLocale(params.lang) ? params.lang : 'en')
	);
}
