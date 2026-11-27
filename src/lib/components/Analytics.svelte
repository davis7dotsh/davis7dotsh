<script lang="ts">
	import { inject, pageview } from '@vercel/analytics';
	import { browser } from '$app/env';
	import { page } from '$app/state';
	import { trackOutboundLink } from '#lib/analytics.ts';

	// Mirrors `@vercel/analytics/sveltekit`, which still imports the removed `$app/stores`.
	if (browser) {
		inject(
			{
				basePath: import.meta.env.VITE_VERCEL_OBSERVABILITY_BASEPATH,
				disableAutoTrack: true,
				framework: 'sveltekit'
			},
			import.meta.env.VITE_VERCEL_OBSERVABILITY_CLIENT_CONFIG
		);
	}

	$effect(() => {
		if (page.route.id) pageview({ route: page.route.id, path: page.url.pathname });
	});

	function onWindowClick(event: MouseEvent) {
		const target = event.target as Element | null;
		const anchor = target?.closest?.('a[href]') as HTMLAnchorElement | null;
		if (anchor) trackOutboundLink(anchor);
	}
</script>

<svelte:window onclick={onWindowClick} />
