<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { trackCopy } from '$lib/analytics';

	let { content, label = 'Config snippet' }: { content: string; label?: string } = $props();

	let copied = $state(false);
	let resetTimer: ReturnType<typeof setTimeout> | undefined;

	async function copy() {
		try {
			await navigator.clipboard.writeText(content);
			trackCopy(label);
			copied = true;
			clearTimeout(resetTimer);
			resetTimer = setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy text: ', err);
		}
	}
</script>

<div class="relative">
	<button type="button" class="button absolute top-2 right-2 px-2 py-1 text-xs" onclick={copy}>
		{#if copied}
			<Icon name="check" size={12} class="success-text" />
			Copied!
		{:else}
			<Icon name="copy" size={12} />
			Copy
		{/if}
	</button>
	<pre class="code-snippet"><code>{content}</code></pre>
</div>

<style>
	.code-snippet {
		padding-top: 3.25rem;
	}
</style>
