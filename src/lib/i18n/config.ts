export const locales = ['en', 'es', 'fr', 'de', 'ja'] as const;
export type Locale = (typeof locales)[number];
export const openGraphLocales = {
	en: 'en_US',
	es: 'es_ES',
	fr: 'fr_FR',
	de: 'de_DE',
	ja: 'ja_JP'
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
		const base = language.split('-')[0];
		if (isLocale(base)) return base;
	}
	return 'en';
}
