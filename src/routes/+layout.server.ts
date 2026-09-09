import { isLocale } from '$lib/i18n/config';
import type { LayoutServerLoad } from './$types';

const catalogs = import.meta.glob<Record<string, string>>(
	['$lib/i18n/locales/*.json', '!**/*.metadata.json'],
	{
		import: 'default'
	}
);
export const load = (async ({ params }) => {
	const locale = params.lang && isLocale(params.lang) ? params.lang : 'en';
	const loadCatalog = catalogs[`/src/lib/i18n/locales/${locale}.json`];
	if (locale !== 'en' && !loadCatalog)
		throw new Error(`Missing ${locale} translations. Run pnpm i18n:translate.`);
	return { locale, translations: locale === 'en' ? {} : await loadCatalog() };
}) satisfies LayoutServerLoad;
