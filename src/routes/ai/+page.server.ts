import { redirect } from '@sveltejs/kit';
import { getIndex } from '$lib/ai/data';

export function load() {
	const index = getIndex();
	redirect(308, `/ai/${index.latestSlug}`);
}
