<script lang="ts">
	import { tr, localizePath } from '$lib/i18n';
	import RichText from '$lib/components/RichText.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Keyboard from '$lib/components/Keyboard.svelte';
	import { trackCopy } from '$lib/analytics';
	import myConfig from './karabiner.json';

	const configText = JSON.stringify(myConfig, null, 2);
	let copied = $state(false);
	let dialogEl = $state<HTMLDialogElement>();

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(JSON.stringify(myConfig));
			trackCopy('Karabiner config');
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch {
			copied = false;
		}
	};

	function openDialog() {
		dialogEl?.showModal();
	}

	function closeDialog() {
		dialogEl?.close();
	}

	function handleBackdropClick(event: MouseEvent) {
		if (event.target === dialogEl) closeDialog();
	}
</script>

<svelte:head>
	<title>{tr('Ben Davis - Karabiner Config')}</title>
</svelte:head>

<main class="mx-auto flex max-w-5xl flex-col items-start gap-8">
	<div class="content-sheet flex w-full flex-col items-start gap-8">
		<a href={localizePath('/')} class="back-link">{tr('← Back')}</a>
		<h1 class="headline-text text-4xl font-semibold tracking-tight">{tr('My Karabiner Config')}</h1>

		<p class="leading-relaxed" style="color: var(--color-text-muted)">
			<RichText
				message={'This is my "hyper key" config, you can download Karabiner Elements <s0>here</s0>.'}
				elements={[
					{
						tag: 'a',
						attributes: {
							href: 'https://karabiner-elements.pqrs.org/',
							target: '_blank',
							rel: 'noopener noreferrer',
							class: 'brand-link'
						}
					}
				]}
			/>
		</p>

		<button class="button" onclick={openDialog}> {tr('View Full Config')} </button>

		<p style="color: var(--color-text-muted)">{tr('Keybindings:')}</p>
		<ul class="w-full space-y-2">
			<li
				class="border-b py-2 last:border-b-0"
				style="border-color: var(--color-border); color: var(--color-text-muted)"
			>
				{tr('Caps Lock to Hyper')}
			</li>
			<li
				class="border-b py-2 last:border-b-0"
				style="border-color: var(--color-border); color: var(--color-text-muted)"
			>
				{tr('Hyper + Tab to Control + Tab')}
			</li>
			<li
				class="border-b py-2 last:border-b-0"
				style="border-color: var(--color-border); color: var(--color-text-muted)"
			>
				{tr('Hyper + A to Cmd + A')}
			</li>
			<li
				class="border-b py-2 last:border-b-0"
				style="border-color: var(--color-border); color: var(--color-text-muted)"
			>
				{tr('Hyper + J/K to PageUp/PageDown')}
			</li>
			<li
				class="border-b py-2 last:border-b-0"
				style="border-color: var(--color-border); color: var(--color-text-muted)"
			>
				{tr('Hyper + H/L to Left/Right Arrow')}
			</li>
			<li
				class="border-b py-2 last:border-b-0"
				style="border-color: var(--color-border); color: var(--color-text-muted)"
			>
				{tr('Hyper + C to Cmd + C')}
			</li>
			<li
				class="border-b py-2 last:border-b-0"
				style="border-color: var(--color-border); color: var(--color-text-muted)"
			>
				{tr('Hyper + V to Cmd + V')}
			</li>
			<li
				class="border-b py-2 last:border-b-0"
				style="border-color: var(--color-border); color: var(--color-text-muted)"
			>
				{tr('Hyper + T to Cmd + T')}
			</li>
			<li
				class="border-b py-2 last:border-b-0"
				style="border-color: var(--color-border); color: var(--color-text-muted)"
			>
				{tr('Hyper + W to Cmd + W')}
			</li>
		</ul>
	</div>
	<Keyboard />
</main>

<dialog
	bind:this={dialogEl}
	class="config-dialog surface"
	aria-labelledby="karabiner-config-title"
	onclick={handleBackdropClick}
>
	<div class="config-dialog-inner">
		<div class="mb-4 flex items-center justify-between gap-4">
			<h3
				id="karabiner-config-title"
				class="text-xl font-semibold"
				style="color: var(--color-text)"
			>
				{tr('Full Karabiner Configuration')}
			</h3>
			<button class="icon-button h-9 w-9" onclick={closeDialog} aria-label={tr('Close dialog')}>
				<Icon name="x" size={16} />
			</button>
		</div>
		<div class="mb-4">
			<button class="button" onclick={copy}>
				{#if copied}
					<Icon name="check" size={16} class="success-text" /> {tr('Copied!')}
				{:else}
					<Icon name="copy" size={16} /> {tr('Copy Config')}
				{/if}
			</button>
		</div>
		<div class="surface p-4 text-sm">
			<pre class="config-code"><code>{configText}</code></pre>
		</div>
	</div>
</dialog>

<style>
	.config-dialog {
		max-width: min(64rem, 100vw - 2rem);
		max-height: min(90vh, 100dvh - 2rem);
		width: 100%;
		padding: 0;
		border: 1px solid var(--color-border);
		background: var(--color-surface);
		color: var(--color-text);
		overflow: hidden;
	}

	.config-dialog::backdrop {
		background: var(--color-overlay);
	}

	.config-dialog-inner {
		max-height: inherit;
		overflow: auto;
		padding: 1.5rem;
	}

	.config-code {
		margin: 0;
		overflow: auto;
		color: var(--color-text);
		font-family: var(--font-family-geist-mono);
		white-space: pre;
	}
</style>
