import { aiIndexManifest, getAiSnapshotMetas } from '$lib/ai/manifest';

type SeoConfig = {
	title: string;
	description: string;
	path: string;
	image: string;
};

const origin = 'https://www.davis7.sh';

const defaultSeo: SeoConfig = {
	title: 'Ben Davis',
	description: "Developer, YouTuber, and Theo's manager. Based in SF",
	path: '/',
	image: '/og/home.png'
};

const aiDescriptions =
	"Rankings and notes on the AI models, harnesses, and subscriptions I'm using.";
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
		description: 'The companies backing my work and videos.',
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
		title: 'macOS Power User Setup - Ben Davis',
		description: 'Karabiner, Raycast, Rectangle, and small config commands for a faster Mac.',
		path: '/macos',
		image: '/og/macos.png'
	},
	'/home-server': {
		title: 'My Home Servers - Ben Davis',
		description: 'The hardware, links, and cost breakdowns for my home server setups.',
		path: '/home-server',
		image: '/og/home-server.png'
	},
	'/karabiner': {
		title: 'Karabiner Config - Ben Davis',
		description: 'My hyper key config and keybinding visualizer.',
		path: '/karabiner',
		image: '/og/karabiner.png'
	},
	'/font': {
		title: 'Font - Ben Davis',
		description: 'The font, theme, and icon setup I use in Cursor and the terminal.',
		path: '/font',
		image: '/og/font.png'
	},
	'/sv': {
		title: 'SvelteKit Setup - Ben Davis',
		description: 'A small prompt generator for setting up a SvelteKit project.',
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
