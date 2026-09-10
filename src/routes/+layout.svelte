<script>
	import '../app.css';
	import { tr, localizePath, currentLocale } from '$lib/i18n';
	import { locales, openGraphLocales, stripLocale, withLocale } from '$lib/i18n/config';
	import { page } from '$app/state';
	import Analytics from '$lib/components/Analytics.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { absoluteUrl, getSeo } from '$lib/seo';

	let { children } = $props();
	const seo = $derived(getSeo(stripLocale(page.url.pathname)));
	const isLocalizedPage = $derived(page.route.id?.startsWith('/[[lang=locale]]'));
	const canonicalUrl = $derived(absoluteUrl(isLocalizedPage ? localizePath(seo.path) : seo.path));
	const imageUrl = $derived(absoluteUrl(seo.image));
</script>

<svelte:head>
	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:locale" content={openGraphLocales[currentLocale()]} />
	{#if isLocalizedPage}
		{#each locales as locale (locale)}
			<link rel="alternate" hreflang={locale} href={absoluteUrl(withLocale(seo.path, locale))} />
		{/each}
		<link rel="alternate" hreflang="x-default" href={absoluteUrl(seo.path)} />
	{/if}
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Ben Davis" />
	<meta property="og:title" content={tr(seo.title)} />
	<meta property="og:description" content={tr(seo.description)} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:alt" content={tr('{title} preview', { title: tr(seo.title) })} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={tr(seo.title)} />
	<meta name="twitter:description" content={tr(seo.description)} />
	<meta name="twitter:image" content={imageUrl} />
	<meta name="twitter:image:alt" content={tr('{title} preview', { title: tr(seo.title) })} />
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
<Analytics />
