<script lang="ts">
	let {
		id,
		label,
		value = $bindable()
	}: {
		id: string;
		label: string;
		value: string;
	} = $props();
</script>

<div>
	<label for={id} class="mb-3 block text-xs font-medium" style="color: var(--color-text-subtle)"
		>{label}</label
	>
	<div class="flex items-center gap-3">
		<input type="color" {id} bind:value class="field-input color-swatch cursor-pointer" />
		<input type="text" bind:value class="field-input flex-1" aria-label={`${label} hex value`} />
	</div>
</div>

<style>
	.color-swatch {
		height: 2rem;
		width: 3rem;
		padding: 0;
	}
</style>
