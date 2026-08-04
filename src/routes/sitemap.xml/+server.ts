import type { RequestHandler } from './$types';
import { getAiSnapshotMetas } from '$lib/ai/manifest';
import { absoluteUrl } from '$lib/seo';

export const prerender = true;

const staticPaths = ['/', '/sponsors', '/macos', '/home-server', '/karabiner', '/font', '/sv'];

export const GET = (() => {
	const paths = [...staticPaths, ...getAiSnapshotMetas().map((snapshot) => `/ai/${snapshot.slug}`)];
	const urls = paths.map((path) => `\t<url><loc>${absoluteUrl(path)}</loc></url>`).join('\n');
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

	return new Response(sitemap, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' }
	});
}) satisfies RequestHandler;
