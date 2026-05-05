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
		image: '/og/ai-may-5-2026.png'
	},
	'/ai/may-5-2026': {
		title: 'State of AI Rankings - May 5, 2026',
		description: aiDescriptions,
		path: '/ai/may-5-2026',
		image: '/og/ai-may-5-2026.png'
	},
	'/ai/march-25-2026': {
		title: 'State of AI Rankings - March 25, 2026',
		description: aiDescriptions,
		path: '/ai/march-25-2026',
		image: '/og/ai-march-25-2026.png'
	},
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
