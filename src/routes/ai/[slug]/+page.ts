import { getAiIndex } from '$lib/ai/data.remote';

export const prerender = true;

export async function entries() {
	const index = await getAiIndex();
	return index.snapshots.map((snapshot) => ({ slug: snapshot.slug }));
}
