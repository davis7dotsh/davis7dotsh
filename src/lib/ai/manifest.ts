import rawIndex from './data/index.json';

export const slugForId = (id: string) => id.replaceAll('_', '-');

export const aiIndexManifest = rawIndex as {
	title: string;
	defaultSnapshot: string;
	snapshots: { id: string; slug?: string; label: string; file: string }[];
};

export function getAiSnapshotMetas() {
	return aiIndexManifest.snapshots.map((snapshot) => ({
		...snapshot,
		slug: snapshot.slug ?? slugForId(snapshot.id)
	}));
}
