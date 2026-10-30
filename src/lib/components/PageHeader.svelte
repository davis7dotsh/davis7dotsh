<script lang="ts">
	import { tr, localizePath } from '$lib/i18n';
	import type { Snippet } from 'svelte';

	let { title, children }: { title: string; children?: Snippet } = $props();
</script>

<header class="mb-10">
	<a href={localizePath('/')} class="back-link">← {tr('Back')}</a>
	<div class="mt-8 flex flex-col gap-3">
		<h1 class="headline-text text-4xl font-semibold tracking-tight">{title}</h1>
		{#if children}
			<div class="muted-text max-w-2xl text-base sm:text-lg">
				{@render children()}
			</div>
		{/if}
	</div>
</header>
