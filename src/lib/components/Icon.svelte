<script lang="ts">
	type IconName = 'check' | 'copy' | 'moon' | 'sun' | 'sun-moon' | 'x';

	let {
		name,
		size = 16,
		class: className
	}: { name: IconName; size?: number; class?: string } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	class={className}
	aria-hidden="true"
>
	{#if name === 'check'}
		<path d="m20 6-11 11-5-5" />
	{:else if name === 'copy'}
		<rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
		<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
	{:else if name === 'moon'}
		<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79" />
	{:else if name === 'sun'}
		<circle cx="12" cy="12" r="4" />
		<path
			d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
		/>
	{:else if name === 'sun-moon'}
		<path d="M12 2v2" />
		<path
			d="M14.84 16.39a6 6 0 1 1-7.23-7.23c.63-.15.97.66.72 1.25a4 4 0 0 0 5.26 5.26c.59-.26 1.4.09 1.25.72"
		/>
		<path d="M16 12a4 4 0 0 0-4-4M19 5l-1.26 1.26M20 12h2" />
	{:else}
		<path d="M18 6 6 18M6 6l12 12" />
	{/if}
</svg>
