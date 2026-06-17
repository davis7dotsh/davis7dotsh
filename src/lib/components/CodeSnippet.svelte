<script lang="ts">
	import { Copy, Check } from 'lucide-svelte';

	let { content }: { content: string } = $props();

	let copied = $state(false);

	async function copy() {
		try {
			await navigator.clipboard.writeText(content);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy text: ', err);
		}
	}
</script>

<div class="relative">
	<button class="button absolute top-2 right-2 px-2 py-1 text-xs" onclick={copy}>
		{#if copied}
			<Check size={12} class="success-text" />
			Copied!
		{:else}
			<Copy size={12} />
			Copy
		{/if}
	</button>
	<pre><code>{content}</code></pre>
</div>
