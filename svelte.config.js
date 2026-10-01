import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { locales } from './src/lib/i18n/config.ts';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Permit only the exact startup script, without a blocking network request or
// unsafe-inline. Read the template so formatting and edits keep the hash in sync.
const themeScript = readFileSync(new URL('./src/app.html', import.meta.url), 'utf8').match(
	/<script id="theme-init">([\s\S]*?)<\/script>/
)?.[1];
if (!themeScript) throw new Error('Missing theme initializer in src/app.html');
const themeScriptHash = `sha256-${createHash('sha256').update(themeScript).digest('base64')}`;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			runtime: 'nodejs24.x',
			images: {
				sizes: [640, 828, 1200, 1920],
				formats: ['image/avif', 'image/webp'],
				minimumCacheTTL: 2678400
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
				...locales.flatMap((locale) =>
					['', '/sponsors', '/macos', '/home-server', '/karabiner', '/font', '/sv'].map(
						(route) => `/${locale}${route}`
					)
				)
			],
			handleHttpError: ({ path, message }) => {
				if (path === '/_vercel/image') return;

				throw new Error(message);
			}
		}
	},
	compilerOptions: {
		experimental: {
			async: true
		}
	}
};

export default config;
