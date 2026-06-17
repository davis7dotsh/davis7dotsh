<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		align = 'left',
		backHref = '/',
		backLabel = 'Back',
		children
	}: {
		title: string;
		align?: 'left' | 'center';
		backHref?: string;
		backLabel?: string;
		/** Optional lede / subtitle rendered under the title. */
		children?: Snippet;
	} = $props();
</script>

<header class="mb-10">
	<a href={backHref} class="back-link">← {backLabel}</a>
	<div
		class="mt-8 flex flex-col gap-3"
		class:items-center={align === 'center'}
		class:text-center={align === 'center'}
	>
		<h1 class="headline-text text-4xl font-semibold tracking-tight">{title}</h1>
		{#if children}
			<div class="muted-text max-w-2xl text-base sm:text-lg">
				{@render children()}
			</div>
		{/if}
	</div>
</header>
