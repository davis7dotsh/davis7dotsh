import { aiIndexManifest, getAiSnapshotMetas } from '$lib/ai/manifest';

type SeoConfig = {
	title: string;
	description: string;
	path: string;
	image: string;
};

const origin = 'https://davis7.sh';

const defaultSeo: SeoConfig = {
	title: 'Ben Davis',
	description: "developer, youtuber, and theo's manager. based in sf",
	path: '/',
	image: '/og/home.png'
};

const aiDescriptions =
	"rankings and notes on the ai models, harnesses, and subscriptions i'm using.";
const aiSnapshots = getAiSnapshotMetas();
const latestAiSnapshot =
	aiSnapshots.find((snapshot) => snapshot.id === aiIndexManifest.defaultSnapshot) ?? aiSnapshots[0];

export function aiSnapshotSeo(slug: string, label: string): SeoConfig {
	return {
		title: `State of AI Rankings - ${label}`,
		description: aiDescriptions,
		path: `/ai/${slug}`,
		image: `/og/ai-${slug}.png`
	};
}

const seoByPath: Record<string, SeoConfig> = {
	'/': defaultSeo,
	'/sponsors': {
		title: 'Sponsors - Ben Davis',
		description: 'the companies backing my work and videos.',
		path: '/sponsors',
		image: '/og/sponsors.png'
	},
	'/ai': {
		title: 'State of AI Rankings - Ben Davis',
		description: aiDescriptions,
		path: '/ai',
		image: latestAiSnapshot ? `/og/ai-${latestAiSnapshot.slug}.png` : defaultSeo.image
	},
	...Object.fromEntries(
		aiSnapshots.map((snapshot) => [
			`/ai/${snapshot.slug}`,
			aiSnapshotSeo(snapshot.slug, snapshot.label)
		])
	),
	'/macos': {
		title: 'MacOS Power User Setup - Ben Davis',
		description: 'karabiner, raycast, rectangle, and small config commands for a faster mac.',
		path: '/macos',
		image: '/og/macos.png'
	},
	'/karabiner': {
		title: 'Karabiner Config - Ben Davis',
		description: 'my hyper key config and keybinding visualizer.',
		path: '/karabiner',
		image: '/og/karabiner.png'
	},
	'/font': {
		title: 'Font - Ben Davis',
		description: 'the font, theme, and icon setup i use in cursor and the terminal.',
		path: '/font',
		image: '/og/font.png'
	},
	'/sv': {
		title: 'SvelteKit Setup - Ben Davis',
		description: 'a small prompt generator for setting up a sveltekit project.',
		path: '/sv',
		image: '/og/sveltekit.png'
	},
	'/og': {
		title: 'OG Image - Ben Davis',
		description: defaultSeo.description,
		path: '/og',
		image: '/og/home.png'
	}
};

export function getSeo(pathname: string) {
	return seoByPath[pathname] ?? defaultSeo;
}

export function absoluteUrl(path: string) {
	return new URL(path, origin).toString();
}
