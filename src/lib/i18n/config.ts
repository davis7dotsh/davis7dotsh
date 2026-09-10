export const locales = [
	'en',
	'es',
	'fr',
	'de',
	'ja',
	'hi',
	'pt-BR',
	'nl',
	'pl',
	'id',
	'sv-SE',
	'it',
	'ru',
	'th',
	'vi'
] as const;
export type Locale = (typeof locales)[number];
export const openGraphLocales = {
	en: 'en_US',
	es: 'es_ES',
	fr: 'fr_FR',
	de: 'de_DE',
	ja: 'ja_JP',
	hi: 'hi_IN',
	'pt-BR': 'pt_BR',
	nl: 'nl_NL',
	pl: 'pl_PL',
	id: 'id_ID',
	'sv-SE': 'sv_SE',
	it: 'it_IT',
	ru: 'ru_RU',
	th: 'th_TH',
	vi: 'vi_VN'
} satisfies Record<Locale, string>;
export const isLocale = (value: string): value is Locale =>
	locales.some((locale) => locale === value);
export function stripLocale(path: string) {
	const [pathname, ...suffix] = path.split(/(?=[?#])/);
	const segments = pathname.split('/');
	if (isLocale(segments[1])) segments.splice(1, 1);
	return (segments.join('/') || '/') + suffix.join('');
}
export function withLocale(path: string, locale: Locale) {
	if (!path.startsWith('/') || path.startsWith('//')) return path;
	const clean = stripLocale(path);
	return `/${locale}${clean === '/' ? '' : clean}`;
}

export function preferredLocale(acceptLanguage: string | null): Locale {
	const preferences = (acceptLanguage ?? '')
		.split(',')
		.map((entry, order) => {
			const [language, ...parameters] = entry.trim().toLowerCase().split(';');
			const quality = parameters.find((parameter) => parameter.trim().startsWith('q='));
			const weight = quality ? Number(quality.trim().slice(2)) : 1;
			return { language, weight, order };
		})
		.filter(({ weight }) => Number.isFinite(weight) && weight > 0 && weight <= 1)
		.sort((a, b) => b.weight - a.weight || a.order - b.order);

	for (const { language } of preferences) {
		if (language === '*') return 'en';
		const exact = locales.find((locale) => locale.toLowerCase() === language);
		if (exact) return exact;
		const base = language.split('-')[0];
		const match = locales.find((locale) => locale.toLowerCase().split('-')[0] === base);
		if (match) return match;
	}
	return 'en';
}
