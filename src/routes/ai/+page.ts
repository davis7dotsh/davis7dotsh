import { redirect } from '@sveltejs/kit';
import { getAiIndex } from '$lib/ai/data.remote';

export async function load() {
	const index = await getAiIndex();
	redirect(308, `/ai/${index.latestSlug}`);
}
