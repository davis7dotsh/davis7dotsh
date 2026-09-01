import { track } from '@vercel/analytics';

const linkCategories: Array<[RegExp, string]> = [
	[
		/(^|\.)(youtube\.com|youtu\.be|twitch\.tv|twitter\.com|x\.com|substack\.com|discord\.(gg|com)|github\.com)$/i,
		'social'
	],
	[
		/(^|\.)(davis7\.link|amzn\.to|amazon\.com|shop\.app|apple\.com|frame\.work|firewalla\.com|serverpartdeals\.com)$/i,
		'product'
	]
];

/** Classify an outbound link so the dashboard reads socials vs. products vs. references. */
function categoryFor(url: URL): string {
	const host = url.hostname.replace(/^www\./, '');
	for (const [pattern, category] of linkCategories) {
		if (pattern.test(host)) return category;
	}
	return 'reference';
}

/** Track a useful thing being copied, identified by a target label. */
export function trackCopy(target: string): void {
	track('Copy', { target });
}

/** Track a click on an external anchor (skips same-origin and non-http links). */
export function trackOutboundLink(anchor: HTMLAnchorElement): void {
	let url: URL;
	try {
		url = new URL(anchor.href);
	} catch {
		return;
	}
	if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
	if (url.host === window.location.host) return;

	const label =
		anchor.getAttribute('aria-label')?.trim() ||
		anchor.textContent?.replace(/\s+/g, ' ').trim() ||
		url.hostname;

	track('Outbound Link', {
		label: label.slice(0, 120),
		url: `${url.origin}${url.pathname}`.slice(0, 255),
		category: categoryFor(url)
	});
}
