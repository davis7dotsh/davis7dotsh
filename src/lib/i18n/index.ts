import { page } from '$app/state';
import source from './locales/en.json';
import { isLocale, localeDirection, withLocale } from './config';

const normalize = (value: string) => value.replace(/\s+/g, ' ').trim();
const keys = new Map(Object.entries(source).map(([key, value]) => [normalize(value), key]));
export function currentLocale() {
	const value = page.params.lang ?? 'en';
	return isLocale(value) ? value : 'en';
}
// Arrow glyphs are not mirrored by bidi, so point them the other way in right-to-left locales.
export function mirror(text: string) {
	if (localeDirection(currentLocale()) === 'ltr') return text;
	return text.replace(/[←→]/g, (arrow) => (arrow === '←' ? '→' : '←'));
}
// Keeps a value like a price left-to-right when interpolated into right-to-left text.
export const isolate = (text: string) =>
	`${String.fromCodePoint(0x2066)}${text}${String.fromCodePoint(0x2069)}`;
export function tr(message: string, values: Record<string, string | number> = {}) {
	const key = keys.get(normalize(message));
	const catalog: Record<string, string> = page.data.translations ?? {};
	const translated = (key && catalog[key]) || message;
	return mirror(translated.replace(/\{(\w+)\}/g, (match, name) => String(values[name] ?? match)));
}
export function localizePath(path: string) {
	return withLocale(path, currentLocale());
}
