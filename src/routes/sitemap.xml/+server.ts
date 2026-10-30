import { locales, localizedPagePaths, withLocale } from '$lib/i18n/config';
import type { RequestHandler } from './$types';
import { aiSnapshots } from '$lib/ai/manifest';
import { absoluteUrl } from '$lib/seo';

export const prerender = true;

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function snapshotPath(slug: string) {
	if (!slugPattern.test(slug)) throw new Error(`Invalid AI snapshot slug: ${slug}`);
	return `/ai/${slug}`;
}

function escapeXml(value: string) {
	return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

export const GET = (() => {
	const paths = [...localizedPagePaths, ...aiSnapshots.map(({ slug }) => snapshotPath(slug))];
	const urls = paths
		.flatMap((path) => locales.map((locale) => withLocale(path, locale)))
		.map((path) => `\t<url><loc>${escapeXml(absoluteUrl(path))}</loc></url>`)
		.join('\n');
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

	return new Response(sitemap, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' }
	});
}) satisfies RequestHandler;
