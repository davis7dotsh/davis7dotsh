import { Marked, type TokenizerAndRendererExtension } from 'marked';

type ArticleEntity = {
	key: string;
	lab: string;
	href: string;
	icon?: string;
	iconText?: string;
	aliases: string[];
};

const articleEntities: ArticleEntity[] = [
	{
		key: 'gpt-5-6-sol',
		lab: 'OpenAI',
		href: 'https://developers.openai.com/api/docs/models/gpt-5.6-sol',
		icon: '/logos/openai_dark.svg',
		aliases: ['GPT-5.6 Sol', 'Sol']
	},
	{
		key: 'gpt-5-6-luna',
		lab: 'OpenAI',
		href: 'https://developers.openai.com/api/docs/models/gpt-5.6-luna',
		icon: '/logos/openai_dark.svg',
		aliases: ['GPT-5.6 Luna', 'Luna']
	},
	{
		key: 'gpt-5-5',
		lab: 'OpenAI',
		href: 'https://developers.openai.com/api/docs/models/gpt-5.5',
		icon: '/logos/openai_dark.svg',
		aliases: ['GPT-5.5']
	},
	{
		key: 'claude-opus-5',
		lab: 'Anthropic',
		href: 'https://www.anthropic.com/claude/opus',
		icon: '/logos/claude-ai-icon.svg',
		aliases: ['Claude Opus 5']
	},
	{
		key: 'claude-opus-4-8',
		lab: 'Anthropic',
		href: 'https://www.anthropic.com/claude/opus',
		icon: '/logos/claude-ai-icon.svg',
		aliases: ['Claude Opus 4.8']
	},
	{
		key: 'claude-fable-5',
		lab: 'Anthropic',
		href: 'https://www.anthropic.com/claude/fable',
		icon: '/logos/claude-ai-icon.svg',
		aliases: ['Claude Fable 5', 'Fable 5', 'Fable']
	},
	{
		key: 'mythos',
		lab: 'Anthropic',
		href: 'https://www.anthropic.com/claude/mythos',
		icon: '/logos/claude-ai-icon.svg',
		aliases: ['Mythos']
	},
	{
		key: 'grok-4-5',
		lab: 'SpaceX AI',
		href: 'https://x.ai/news/grok-4-5',
		icon: '/logos/grok.png',
		aliases: ['Grok 4.5']
	},
	{
		key: 'kimi-k3',
		lab: 'Moonshot AI',
		href: 'https://www.kimi.com/blog/kimi-k3',
		icon: '/logos/kimi.png',
		aliases: ['Kimi K3']
	},
	{
		key: 'composer-3',
		lab: 'Cursor',
		href: 'https://cursor.com/composer',
		icon: '/logos/cursor_dark.svg',
		aliases: ['Composer 3']
	},
	{
		key: 'gemini',
		lab: 'Google DeepMind',
		href: 'https://deepmind.google/models/gemini/',
		icon: '/logos/gemini.svg',
		aliases: ['Gemini 3.6 Flash', 'Gemini 4']
	},
	{
		key: 'muse-spark',
		lab: 'Meta',
		href: 'https://ai.meta.com/blog/introducing-muse-spark-msl/',
		icon: '/logos/meta.png',
		aliases: ['Muse Spark']
	},
	{
		key: 'hermes-agent',
		lab: 'Nous Research',
		href: 'https://hermes-agent.nousresearch.com/',
		icon: '/logos/hermes-agent.png',
		aliases: ['Hermes Agent', 'Hermes']
	},
	{
		key: 'claude-code',
		lab: 'Anthropic',
		href: 'https://code.claude.com/docs/en/overview',
		icon: '/logos/claude-ai-icon.svg',
		aliases: ['Claude Code']
	},
	{
		key: 'codex',
		lab: 'OpenAI',
		href: 'https://learn.chatgpt.com/docs/app',
		icon: '/logos/codex_dark.svg',
		aliases: ['Codex']
	},
	{
		key: 'pi',
		lab: 'Pi',
		href: 'https://github.com/badlogic/pi-mono',
		icon: '/logos/pi_dark.svg',
		aliases: ['Pi']
	},
	{
		key: 't3-code',
		lab: 'T3',
		href: 'https://t3.codes/',
		icon: '/logos/t3-light.svg',
		aliases: ['T3 Code']
	},
	{
		key: 'cursor',
		lab: 'Cursor',
		href: 'https://cursor.com/',
		icon: '/logos/cursor_dark.svg',
		aliases: ['Cursor']
	},
	{
		key: 'vibe-proxy',
		lab: 'Automaze',
		href: 'https://github.com/automazeio/vibeproxy',
		iconText: 'VP',
		aliases: ['Vibe Proxy']
	},
	{
		key: 'openrouter',
		lab: 'OpenRouter',
		href: 'https://openrouter.ai/',
		icon: '/logos/openrouter.png',
		aliases: ['OpenRouter']
	}
];

const entitiesByKey = new Map(articleEntities.map((entity) => [entity.key, entity]));
const lightThemeInvertedIcons = new Set([
	'/logos/openai_dark.svg',
	'/logos/codex_dark.svg',
	'/logos/cursor_dark.svg',
	'/logos/pi_dark.svg',
	'/logos/t3-light.svg'
]);
const aliases = articleEntities
	.flatMap((entity) => entity.aliases)
	.sort((left, right) => right.length - left.length);
const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const aliasSource = aliases.map(escapeRegex).join('|');
const entityAtStart = new RegExp(`^(?:${aliasSource})(?![\\p{L}\\p{N}])`, 'u');
const nextEntity = new RegExp(`(?<![\\p{L}\\p{N}])(?:${aliasSource})(?![\\p{L}\\p{N}])`, 'u');
const youtubeHosts = new Set(['youtu.be', 'youtube.com', 'www.youtube.com', 'm.youtube.com']);

const escapeHtml = (value: string) =>
	value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#039;');

const findEntity = (value: string) => {
	const label = value.trim();
	return articleEntities.find((entity) => entity.aliases.includes(label));
};

const isYouTubeLink = (href: string) => {
	try {
		return youtubeHosts.has(new URL(href).hostname);
	} catch {
		return false;
	}
};

const renderEntityLink = (entity: ArticleEntity, label: string, href = entity.href) => {
	const iconClass = lightThemeInvertedIcons.has(entity.icon ?? '')
		? 'article-entity-icon article-entity-icon--invert-light'
		: 'article-entity-icon';
	const icon = entity.icon
		? `<img class="${iconClass}" src="${escapeHtml(entity.icon)}" alt="" width="16" height="16" aria-hidden="true">`
		: `<span class="article-entity-icon article-entity-monogram" aria-hidden="true">${escapeHtml(entity.iconText ?? entity.lab.slice(0, 2))}</span>`;
	const accessibleLabel = `${label} · ${entity.lab} · opens in a new tab`;

	return `<a class="article-entity-link" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer external" aria-label="${escapeHtml(accessibleLabel)}" title="${escapeHtml(entity.lab)}">${icon}<span>${escapeHtml(label)}</span></a>`;
};

const articleEntityExtension = {
	name: 'articleEntity',
	level: 'inline',
	start(source) {
		if (this.lexer.state.inLink) return;

		const match = nextEntity.exec(source);
		return match?.index;
	},
	tokenizer(source) {
		if (this.lexer.state.inLink) return;

		const match = entityAtStart.exec(source);
		if (!match) return;

		const entity = findEntity(match[0]);
		if (!entity) return;

		return {
			type: 'articleEntity',
			raw: match[0],
			entityKey: entity.key,
			text: match[0]
		};
	},
	renderer(token) {
		const entity = entitiesByKey.get(String(token.entityKey));
		if (!entity) return false;

		return renderEntityLink(entity, String(token.text));
	}
} satisfies TokenizerAndRendererExtension;

const articleMarked = new Marked({
	extensions: [articleEntityExtension],
	hooks: {
		preprocess(markdown) {
			return markdown.replace(
				/\[\[entity:([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g,
				(_match, key: string, label?: string) => {
					const entity = entitiesByKey.get(key);
					return entity ? renderEntityLink(entity, label ?? entity.aliases[0]) : _match;
				}
			);
		}
	},
	renderer: {
		link(token) {
			const entity = findEntity(token.text);
			if (entity) return renderEntityLink(entity, token.text, token.href);

			if (!isYouTubeLink(token.href)) return false;

			return `<a href="${escapeHtml(token.href)}" target="_blank" rel="noopener noreferrer external">${escapeHtml(token.text)}</a>`;
		}
	}
});

export const renderAiArticle = (markdown: string) =>
	articleMarked.parse(markdown, { async: false });
