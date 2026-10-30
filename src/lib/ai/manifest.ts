import rawIndex from './data/index.json' with { type: 'json' };

const manifest = rawIndex as {
	title: string;
	defaultSnapshot: string;
	snapshots: { id: string; slug?: string; label: string; file: string }[];
};

export const aiTitle = manifest.title;
export const aiSnapshots = manifest.snapshots.map((snapshot) => ({
	...snapshot,
	slug: snapshot.slug ?? snapshot.id.replaceAll('_', '-')
}));
export const latestAiSnapshot =
	aiSnapshots.find((snapshot) => snapshot.id === manifest.defaultSnapshot) ?? aiSnapshots[0];
