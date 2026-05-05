<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import { page } from '$app/state';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { vercelImageUrl } from '$lib/image';
	import { absoluteUrl, getSeo } from '$lib/seo';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	let { children } = $props();
	const seo = $derived(getSeo(page.url.pathname));
	const canonicalUrl = $derived(absoluteUrl(seo.path));
	const imageUrl = $derived(absoluteUrl(vercelImageUrl(seo.image, 1200)));
</script>

<svelte:head>
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Ben Davis" />
	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={imageUrl} />
	<meta name="color-scheme" content="dark light" />
</svelte:head>

<div class="relative min-h-screen w-full">
	<div
		class="grid-pattern fixed inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,transparent_0%,transparent_35%,rgba(0,0,0,0.5)_70%,black_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,transparent_0%,transparent_35%,rgba(0,0,0,0.5)_70%,black_100%)]"
	></div>

	<div class="relative z-10 flex h-full w-full justify-center overflow-auto p-4 sm:p-8">
		<div class="animate-fade-in-up w-full max-w-6xl">
			{@render children()}
		</div>
	</div>
</div>

<ThemeToggle />
