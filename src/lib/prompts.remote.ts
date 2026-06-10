import { command } from '$app/server';
import { z } from 'zod';

const VERCEL_SETUP_PROMPT = `
Setup this SvelteKit project to be deployed to Vercel by doing the following:

1. Install the adapter and get rid of the old one:
pnpm add -D @sveltejs/adapter-vercel
pnpm remove @sveltejs/adapter-auto
2. Update the svelte.config.js file to use the new adapter:
import adapter from '@sveltejs/adapter-vercel';
`;

const CONVEX_SETUP_PROMPT = `
Setup Convex to be used in this project by doing the following:

1. Install the Convex packages:
pnpm add convex convex-svelte
2. Create a convex.json file in the root of the project with the following content:
{
	"$schema": "https://raw.githubusercontent.com/get-convex/convex-backend/refs/heads/main/npm-packages/convex/schemas/convex.schema.json",
	"functions": "src/convex/"
}
3. Update the dev scripts in the package.json and install the concurrently package:
pnpm add -D concurrently

"dev": "concurrently --names \"SVELTE,CONVEX\" -c yellow,magenta \"pnpm run dev:sv\" \"pnpm run dev:cx\"",
"dev:sv": "vite dev",
"dev:cx": "convex dev",
4. Update the +layout.svelte file at the root of the routes directory to include the following in the script tag:
<script lang="ts">  
import { PUBLIC_CONVEX_URL } from '$env/static/public';  
import { setupConvex } from 'convex-svelte';  
  
const { children } = $props();  
setupConvex(PUBLIC_CONVEX_URL);  
</script>
Don't get rid of anything else in the +layout.svelte file, just add the above code.
5. Add in the Convex Cursor rules by running the following command:
curl "https://www.davis7.sh/sv/rules?rule=convex" -o .cursor/rules/convex.mdc
6. Prompt the user when this agent run is finished to run the following command to setup the Convex project:
pnpm run dev:cx
7. Update the svelte.config.js to include the following:
kit: {
		alias: {
			$convex: './src/convex'
		}
}
Leave the rest of the svelte.config.js file alone (including the kit section, just add the alias)
`;

const CLOUDFLARE_SETUP_PROMPT = `
Setup this SvelteKit project to be deployed to Cloudflare Workers by doing the following:
1. Install the adapter and get rid of the old one:
pnpm add -D @sveltejs/adapter-cloudflare
pnpm remove @sveltejs/adapter-auto
2. Update the svelte.config.js file to use the new adapter:
import adapter from '@sveltejs/adapter-cloudflare';
3. Update the scripts in package.json to be the following:
	"scripts": {
		"dev": "vite dev",
		"build": "vite build",
		"preview": "pnpm run build && wrangler dev",
		"prepare": "svelte-kit sync || echo ''",
		"check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
		"check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch",
		"deploy": "pnpm run build && wrangler deploy",
		"cf-typegen": "wrangler types ./src/worker-configuration.d.ts",
		"format": "prettier --write .",
		"lint": "prettier --check ."
	},
4. Create a wrangler.jsonc file in the root of the project with the following content:
{
	"$schema": "node_modules/wrangler/config-schema.json",
	"name": "",
	"main": ".svelte-kit/cloudflare/_worker.js",
	"compatibility_flags": ["nodejs_compat"],
	"compatibility_date": "2025-10-11",
	"assets": {
		"binding": "ASSETS",
		"directory": ".svelte-kit/cloudflare"
	},
	"observability": {
		"enabled": true
	}
}
Fill the name with the name in the package.json file.
5. Generate the types with: pnpm run cf-typegen
6. Update app.d.ts to be the following:
// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Platform {
			env: Env;
			cf: CfProperties;
			ctx: ExecutionContext;
		}
	}
}

export {};
`;

const CURSOR_RULES_PROMPT = `
Setup the cursor rules for this project by doing the following:

1. Make sure the Cursor rules directory exists (".cursor/rules"), if it doesn't, create it
2. Run the following commands to populate the rules directory:
curl "https://www.davis7.sh/sv/rules?rule=global" -o .cursor/rules/global.mdc && \
curl "https://www.davis7.sh/sv/rules?rule=neverthrow" -o .cursor/rules/neverthrow.mdc && \
curl "https://www.davis7.sh/sv/rules?rule=svelte" -o .cursor/rules/svelte.mdc && \
curl "https://www.davis7.sh/sv/rules?rule=tailwindcss" -o .cursor/rules/tailwindcss.mdc && \
curl "https://www.davis7.sh/sv/rules?rule=convex" -o .cursor/rules/convex.mdc
`;

const USEFUL_PACKAGES_PROMPT = `
Run the following command to install packages for this project:
pnpm add zod neverthrow runed
`;

const ASYNC_SVELTE_PROMPT = `
Update the svelte.config.js file to support async svelte:

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		experimental: {
			remoteFunctions: true
		}
	},
	compilerOptions: {
		experimental: {
			async: true
		}
	}
};

The only thing you should be touching is the compilerOptions: { experimental: { async: true } } section and the experimental: { remoteFunctions: true } section, leave the rest of the file alone.
`;

const VSCODE_THEME_PROMPT = (opts: { topBarColor: string; topBarTextColor: string }) => `
Add a VSCode conifg file that sets the top bar to be ${opts.topBarColor} with ${opts.topBarTextColor} text
`;

const TAILWIND_THEME_PROMPT = (opts: { primaryColor: string }) => `
In @app.css could you setup a basic theme for this site. It should be light mode with Tailwind neutral colors, and set the primary color to be ${opts.primaryColor}
`;

const HELLO_WORLD_PROMPT = `
Setup the root layout and page to be nicer:

---

<script lang="ts">
	// +layout.ts
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>My SvelteKit App</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col items-center justify-between bg-neutral-50 text-neutral-800">
	<header class="py-4"></header>
	{@render children?.()}
	<footer class="py-4"></footer>
</div>

---

<script lang="ts">
	// +page.svelte
	import logo from '$lib/assets/favicon.svg';
</script>

<main class="flex grow flex-col items-center justify-center gap-4">
	<div class="flex flex-row items-center justify-center gap-2">
		<img src={logo} alt="Logo" class="h-24 w-24" />
		<h2 class="text-3xl font-bold"><span class="text-primary">SvelteKit</span> App</h2>
	</div>
	<p class="text-center text-lg text-neutral-500">Welcome to your new SvelteKit project.</p>
</main>

---

NOTE: If there is not a primary color set, just use orange-500
`;

const getPromptsSchema = z.object({
	vercelSetup: z.boolean(),
	cloudflareSetup: z.boolean(),
	cursorRules: z.boolean(),
	usefulPackages: z.boolean(),
	asyncSvelte: z.boolean(),
	helloWorld: z.boolean(),
	convexSetup: z.boolean(),
	vscodeTheme: z
		.object({
			topBarColor: z.string(),
			topBarTextColor: z.string()
		})
		.optional(),
	tailwindTheme: z
		.object({
			primaryColor: z.string()
		})
		.optional()
});

export const remoteGetPrompts = command(getPromptsSchema, (opts) => {
	const prompts = [];
	if (opts.asyncSvelte) prompts.push(ASYNC_SVELTE_PROMPT);
	if (opts.cursorRules) prompts.push(CURSOR_RULES_PROMPT);
	if (opts.usefulPackages) prompts.push(USEFUL_PACKAGES_PROMPT);
	if (opts.vercelSetup) prompts.push(VERCEL_SETUP_PROMPT);
	if (opts.cloudflareSetup) prompts.push(CLOUDFLARE_SETUP_PROMPT);
	if (opts.vscodeTheme) prompts.push(VSCODE_THEME_PROMPT(opts.vscodeTheme));
	if (opts.tailwindTheme) prompts.push(TAILWIND_THEME_PROMPT(opts.tailwindTheme));
	if (opts.helloWorld) prompts.push(HELLO_WORLD_PROMPT);
	if (opts.convexSetup) prompts.push(CONVEX_SETUP_PROMPT);
	return prompts.join('\n');
});
