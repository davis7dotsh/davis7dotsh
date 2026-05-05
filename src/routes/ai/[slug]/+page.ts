import { getIndex } from '$lib/ai/data';

export const prerender = true;

export function entries() {
	const index = getIndex();
	return index.snapshots.map((snapshot) => ({ slug: snapshot.slug }));
}
