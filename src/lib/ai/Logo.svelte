<script lang="ts">
	let {
		logoId,
		class: className = ''
	}: {
		logoId: string;
		class?: string;
	} = $props();

	const logos: Record<string, { light: string; dark: string }> = {
		'gpt-5-4': { light: '/logos/openai.svg', dark: '/logos/openai_dark.svg' },
		'gpt-5-4-mini': { light: '/logos/openai.svg', dark: '/logos/openai_dark.svg' },
		'opus-4-6': { light: '/logos/claude-ai-icon.svg', dark: '/logos/claude-ai-icon.svg' },
		'sonnet-4-6': { light: '/logos/claude-ai-icon.svg', dark: '/logos/claude-ai-icon.svg' },
		'gemini-3-1-pro': { light: '/logos/gemini.svg', dark: '/logos/gemini.svg' },
		'composer-2': { light: '/logos/cursor_light.svg', dark: '/logos/cursor_dark.svg' },
		codex: { light: '/logos/codex_light.svg', dark: '/logos/codex_dark.svg' },
		'codex-200': { light: '/logos/codex_light.svg', dark: '/logos/codex_dark.svg' },
		't3-code': { light: '/logos/t3-dark.svg', dark: '/logos/t3-light.svg' },
		'claude-code': { light: '/logos/claude-ai-icon.svg', dark: '/logos/claude-ai-icon.svg' },
		'claude-max': { light: '/logos/claude-ai-icon.svg', dark: '/logos/claude-ai-icon.svg' },
		cursor: { light: '/logos/cursor_light.svg', dark: '/logos/cursor_dark.svg' },
		'cursor-ultra': { light: '/logos/cursor_light.svg', dark: '/logos/cursor_dark.svg' },
		opencode: { light: '/logos/opencode.svg', dark: '/logos/opencode-dark.svg' },
		'opencode-black': { light: '/logos/opencode.svg', dark: '/logos/opencode-dark.svg' },
		pi: { light: '/logos/pi_light.svg', dark: '/logos/pi_dark.svg' },
		'gemini-sub-antigravity': { light: '/logos/gemini.svg', dark: '/logos/gemini.svg' }
	};

	let entry = $derived(logos[logoId]);
	let hasDarkVariant = $derived(entry ? entry.light !== entry.dark : false);
</script>

<div
	class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 p-2 {className}"
	aria-hidden="true"
>
	{#if entry}
		<img
			src={hasDarkVariant ? entry.dark : entry.light}
			alt=""
			class="h-full w-full object-contain"
		/>
	{/if}
</div>
