import { page } from '$app/state';
import source from './locales/en.json';
import { routeLocale, withLocale } from './config';

const normalize = (value: string) => value.replace(/\s+/g, ' ').trim();
const keys = new Map(Object.entries(source).map(([key, value]) => [normalize(value), key]));
export function currentLocale() {
	return routeLocale(page.params.lang);
}
export function tr(message: string, values: Record<string, string | number> = {}) {
	const key = keys.get(normalize(message));
	const catalog: Record<string, string> = page.data.translations ?? {};
	const translated = (key && catalog[key]) || message;
	return translated.replace(/\{(\w+)\}/g, (match, name) => String(values[name] ?? match));
}
export function localizePath(path: string) {
	return withLocale(path, currentLocale());
}
