<script lang="ts">
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { trackOutboundLink } from '$lib/analytics';

	// Client-only: injectAnalytics checks `browser` internally before injecting
	// the script and subscribing to pageview changes.
	injectAnalytics();

	function onWindowClick(event: MouseEvent) {
		const target = event.target as Element | null;
		const anchor = target?.closest?.('a[href]') as HTMLAnchorElement | null;
		if (anchor) trackOutboundLink(anchor);
	}
</script>

<svelte:window onclick={onWindowClick} />
