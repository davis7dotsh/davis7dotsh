import { getIndex, getSnapshot } from '$lib/ai/data';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load = (({ params }) => getSnapshot(params.slug)) satisfies PageServerLoad;

export function entries() {
	const index = getIndex();
	return index.snapshots.map((snapshot) => ({ slug: snapshot.slug }));
}
