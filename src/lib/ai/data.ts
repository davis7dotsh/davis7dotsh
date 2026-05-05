import { error } from '@sveltejs/kit';
import { parse } from 'yaml';
import type { RatingsIndex, RatingsSnapshot } from './ratings';

const yamlFiles = import.meta.glob('./data/*.yaml', {
	eager: true,
	import: 'default',
	query: '?raw'
}) as Record<string, string>;

const slugForId = (id: string) => id.replaceAll('_', '-');

function loadYaml<T>(filename: string) {
	const raw = yamlFiles[`./data/${filename}`];
	if (!raw) error(500, `Missing bundled AI data file: ${filename}`);
	return parse(raw) as T;
}

export function getIndex() {
	const legacy = loadYaml<{
		title: string;
		defaultSnapshot: string;
		snapshots: { id: string; slug?: string; label: string; file: string }[];
	}>('index.yaml');

	const snapshots = legacy.snapshots.map((snapshot) => ({
		...snapshot,
		slug: snapshot.slug ?? slugForId(snapshot.id)
	}));
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
