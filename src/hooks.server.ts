import type { Handle } from '@sveltejs/kit';
import { isLocale, withLocale, preferredLocale } from '$lib/i18n/config';

export const handle: Handle = ({ event, resolve }) => {
	if (
		(event.request.method === 'GET' || event.request.method === 'HEAD') &&
		event.route.id?.startsWith('/[[lang=locale]]') &&
		!event.params.lang
	) {
		return new Response(null, {
			status: 307,
			headers: {
				Location: withLocale(
					event.url.pathname + event.url.search,
					preferredLocale(event.request.headers.get('accept-language'))
				),
				Vary: 'Accept-Language',
				'Cache-Control': 'private, no-store'
			}
		});
	}
	const locale = event.params.lang && isLocale(event.params.lang) ? event.params.lang : 'en';
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%site.locale%', locale)
	});
};
