import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss()],
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules/svelte/')) return 'svelte';
					if (id.includes('node_modules/@shikijs/') || id.includes('node_modules/shiki/'))
						return 'shiki';
					if (id.includes('node_modules/marked')) return 'marked';
				}
			}
		}
	}
});
