import { redirect } from '@sveltejs/kit';
import { latestAiArticle } from '$lib/ai/articles';

export function load() {
	redirect(308, `/ai/${latestAiArticle.slug}`);
}
