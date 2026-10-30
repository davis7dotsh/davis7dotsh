import { error } from '@sveltejs/kit';
import { aiSnapshots, aiTitle, latestAiSnapshot } from './manifest';
import { parseRatingsSnapshot } from './ratings';

const snapshotFiles = import.meta.glob('./data/*.json', {
	eager: true,
	import: 'default'
}) as Record<string, unknown>;

function loadSnapshot(filename: string) {
	const snapshot = snapshotFiles[`./data/${filename}`];
	if (!snapshot) error(500, `Missing bundled AI data file: ${filename}`);
	return parseRatingsSnapshot(snapshot);
}

export function getIndex() {
	const seenSlugs = new Set<string>();

	for (const snapshot of aiSnapshots) {
		if (seenSlugs.has(snapshot.slug))
			error(500, `AI index contains duplicate snapshot slug: ${snapshot.slug}`);
		seenSlugs.add(snapshot.slug);
	}

	if (!latestAiSnapshot) error(500, 'AI index must contain at least one snapshot');

	return {
		title: aiTitle,
		latestSlug: latestAiSnapshot.slug,
		snapshots: aiSnapshots
	};
}

export function getSnapshot(slug: string) {
	const index = getIndex();
	const meta = index.snapshots.find((snapshot) => snapshot.slug === slug || snapshot.id === slug);
	if (!meta) error(404, 'AI update not found');

	const snapshot = loadSnapshot(meta.file);

	return {
		index,
		snapshot: {
			...snapshot,
			slug: meta.slug
		}
	};
}
