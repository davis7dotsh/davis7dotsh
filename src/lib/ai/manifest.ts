import { parse } from 'yaml';
import rawIndexYaml from './data/index.yaml?raw';

const rawIndex = parse(rawIndexYaml) as {
	title: string;
	defaultSnapshot: string;
	snapshots: { id: string; slug?: string; label: string; file: string }[];
};

export const slugForId = (id: string) => id.replaceAll('_', '-');

export const aiIndexManifest = rawIndex;

export function getAiSnapshotMetas() {
	return aiIndexManifest.snapshots.map((snapshot) => ({
		...snapshot,
		slug: snapshot.slug ?? slugForId(snapshot.id)
	}));
}
