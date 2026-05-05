import { error } from '@sveltejs/kit';
import { parse } from 'yaml';
import { aiIndexManifest, getAiSnapshotMetas } from './manifest';
import type { RatingsIndex, RatingsSnapshot } from './ratings';

const yamlFiles = import.meta.glob('./data/*.yaml', {
	eager: true,
	import: 'default',
	query: '?raw'
}) as Record<string, string>;

function loadYaml<T>(filename: string) {
	const raw = yamlFiles[`./data/${filename}`];
	if (!raw) error(500, `Missing bundled AI data file: ${filename}`);
	return parse(raw) as T;
}

export function getIndex() {
	const legacy = aiIndexManifest;
	const snapshots = getAiSnapshotMetas();
	const seenSlugs = new Set<string>();

	for (const snapshot of snapshots) {
		if (seenSlugs.has(snapshot.slug))
			error(500, `AI index contains duplicate snapshot slug: ${snapshot.slug}`);
		seenSlugs.add(snapshot.slug);
	}

	if (snapshots.length === 0) error(500, 'AI index must contain at least one snapshot');

	const latest =
		snapshots.find((snapshot) => snapshot.id === legacy.defaultSnapshot) ?? snapshots[0];

	return {
		title: legacy.title,
		latestSlug: latest.slug,
		snapshots
	} satisfies RatingsIndex;
}

export function getSnapshot(slug: string) {
	const index = getIndex();
	const meta = index.snapshots.find((snapshot) => snapshot.slug === slug || snapshot.id === slug);
	if (!meta) error(404, 'AI update not found');

	const snapshot = loadYaml<Omit<RatingsSnapshot, 'slug'>>(meta.file);

	return {
		index,
		snapshot: {
			...snapshot,
			slug: meta.slug
		},
		activeSnapshotId: meta.id
	};
}
