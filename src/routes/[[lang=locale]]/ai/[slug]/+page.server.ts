import { locales } from '$lib/i18n/config';
import { getIndex, getSnapshot } from '$lib/ai/data';
import type { PageServerLoad } from './$types';

export const prerender = 'auto';

export const load = (({ params }) => getSnapshot(params.slug)) satisfies PageServerLoad;

export function entries() {
	const index = getIndex();
	return locales.flatMap((lang) =>
		index.snapshots.map((snapshot) => ({
			lang,
			slug: snapshot.slug
		}))
	);
}
