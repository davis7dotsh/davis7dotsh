import { defineParams } from '@sveltejs/kit/params';
import { isLocale } from '#lib/i18n/config.ts';

const matchLocale = isLocale;

export const params = defineParams({
	locale: (param) => (matchLocale(param) ? param : undefined)
});
