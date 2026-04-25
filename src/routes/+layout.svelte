<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	let { children } = $props();
</script>

<svelte:head>
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Ben Davis" />
	<meta property="og:title" content="Ben Davis" />
	<meta property="og:description" content="developer, youtuber, and theo's manager. based in sf" />
	<meta property="og:url" content="https://davis7.sh" />
	<meta property="og:image" content="https://davis7.sh/og.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Ben Davis " />
	<meta name="twitter:description" content="developer, youtuber, and theo's manager. based in sf" />
	<meta name="twitter:image" content="https://davis7.sh/og.png" />
	<meta name="color-scheme" content="dark light" />
</svelte:head>

<div class="relative min-h-screen w-full">
	<div
		class="grid-pattern fixed inset-0 h-full w-full [mask-image:linear-gradient(to_bottom,white_0%,white_75%,transparent_100%)]"
	></div>

	<div class="relative z-10 flex h-full w-full justify-center overflow-auto p-4 sm:p-8">
		<div class="animate-fade-in-up w-full max-w-2xl">
			{@render children()}
		</div>
	</div>
</div>

<ThemeToggle />
