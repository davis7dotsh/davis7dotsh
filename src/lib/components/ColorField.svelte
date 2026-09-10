<script lang="ts">
	import { tr } from '$lib/i18n';
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
		>{tr(label)}</label
	>
	<div class="flex items-center gap-3">
		<input type="color" {id} bind:value class="field-input color-swatch cursor-pointer" />
		<input
			type="text"
			bind:value
			class="field-input flex-1"
			aria-label={tr('{label} hex value', { label: tr(label) })}
		/>
	</div>
</div>

<style>
	.color-swatch {
		height: 2rem;
		width: 3rem;
		padding: 0;
	}
</style>
