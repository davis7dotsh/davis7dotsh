<script lang="ts">
	import { tr, localizePath } from '$lib/i18n';
	import { parseRich, type RichElement, type RichNode } from '$lib/i18n/rich';
	let { message, elements }: { message: string; elements: RichElement[] } = $props();
	const nodes = $derived(
		parseRich(tr(message), elements.length) ?? parseRich(message, elements.length) ?? [message]
	);
</script>

{#snippet renderNodes(children: RichNode[])}
	{#each children as node, index (index)}
		{#if typeof node === 'string'}
			{node}
		{:else}
			{@const element = elements[node.index]}
			<svelte:element
				this={element.tag}
				{...element.attributes}
				href={element.attributes.href ? localizePath(element.attributes.href) : undefined}
				>{@render renderNodes(node.children)}</svelte:element
			>
		{/if}
	{/each}
{/snippet}

{@render renderNodes(nodes)}
