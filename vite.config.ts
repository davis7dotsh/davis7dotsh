import { locales, localizedPagePaths, withLocale } from './src/lib/i18n/config.ts';
import { imageWidths } from './src/lib/image-widths.ts';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteDevtools } from '@sveltejs/vite-devtools-svelte';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

// app.html's inline theme script runs before hydration, so CSP must allow it by hash.
const themeScript = readFileSync('src/app.html', 'utf8').match(/<script>([\s\S]*?)<\/script>/)?.[1];
if (themeScript === undefined) throw new Error('Inline theme script not found in src/app.html');
const themeScriptHash =
	`sha256-${createHash('sha256').update(themeScript).digest('base64')}` as const;

export default defineConfig({
	devtools: { apply: 'serve' },
	plugins: [
		svelteDevtools(),
		sveltekit({
			preprocess: vitePreprocess(),
			compilerOptions: { experimental: { async: true } },
			adapter: adapter({
				runtime: 'nodejs24.x',
				images: {
					sizes: imageWidths,
					formats: ['image/avif', 'image/webp'],
					minimumCacheTTL: 2678400,
					domains: []
				}
			}),

			csp: {
				mode: 'auto',
				directives: {
					'default-src': ['self'],
					'base-uri': ['self'],
					'connect-src': ['self'],
					'font-src': ['self'],
					'form-action': ['self'],
					'img-src': ['self', 'data:'],
					'object-src': ['none'],
					'script-src': ['self', themeScriptHash],
					'style-src-elem': ['self'],
					'style-src-attr': ['unsafe-inline']
				}
			},
			prerender: {
				crawl: false,
				entries: [
					'/og',
					'/sitemap.xml',
					'/sv/rules',
					'/executor',
					'/executor/privacy',
					'/executor/terms',
					...locales.flatMap((locale) => localizedPagePaths.map((path) => withLocale(path, locale)))
				],

				handleHttpError: ({ path, message }) => {
					if (path === '/_vercel/image') return;

					throw new Error(message);
				}
			}
		}),
		tailwindcss()
	]
});
