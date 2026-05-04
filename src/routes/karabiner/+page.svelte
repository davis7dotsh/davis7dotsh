<script lang="ts">
	import { codeToHtml } from 'shiki';
	import { Copy, Check, X } from 'lucide-svelte';
	import Keyboard from '$lib/components/Keyboard.svelte';
	import myConfig from './karabiner.json';
	import { onMount } from 'svelte';

	let html = $state('');
	let copied = $state(false);
	let currentTheme = $state<'dark' | 'light'>('dark');
	let dialogEl = $state<HTMLDialogElement>();

	onMount(() => {
		currentTheme = (document.documentElement.dataset.theme as 'dark' | 'light') || 'dark';

		const observer = new MutationObserver(() => {
			currentTheme = (document.documentElement.dataset.theme as 'dark' | 'light') || 'dark';
		});
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['data-theme']
		});

		return () => observer.disconnect();
	});

	$effect(() => {
		const shikiTheme = currentTheme === 'light' ? 'github-light' : 'github-dark';
		const run = async () => {
			const innerHtml = await codeToHtml(JSON.stringify(myConfig, null, 2), {
				lang: 'json',
				theme: shikiTheme
			});
			html = innerHtml;
		};

		run();
	});

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(JSON.stringify(myConfig));
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
	<title>Ben Davis - Karabiner Config</title>
</svelte:head>

<main class="mx-auto flex max-w-5xl flex-col items-start gap-8">
	<div class="content-sheet flex w-full flex-col items-start gap-8">
		<a href="/" class="back-link mb-2">← Back to Home</a>
		<h2 class="text-2xl font-semibold" style="color: var(--color-text)">My Karabiner Config</h2>

		<p class="leading-relaxed" style="color: var(--color-text-muted)">
			This is my "hyper key" config, you can download Karabiner elements
			<a
				href="https://karabiner-elements.pqrs.org/"
				target="_blank"
				rel="noopener noreferrer"
				class="brand-link">here</a
			>.
		</p>

		<button class="button" onclick={openDialog}> View Full Config </button>

		<p style="color: var(--color-text-muted)">Keybindings:</p>
		<ul class="w-full space-y-2 font-bold">
			<li
				class="border-b py-2 last:border-b-0"
				style="border-color: var(--color-border); color: var(--color-text-muted)"
			>
				Caps Lock to Hyper
			</li>
			<li
				class="border-b py-2 last:border-b-0"
				style="border-color: var(--color-border); color: var(--color-text-muted)"
			>
				Hyper + tab to control + tab
			</li>
			<li
				class="border-b py-2 last:border-b-0"
				style="border-color: var(--color-border); color: var(--color-text-muted)"
			>
				Hyper + a to cmd + a
			</li>
			<li
				class="border-b py-2 last:border-b-0"
				style="border-color: var(--color-border); color: var(--color-text-muted)"
			>
				Hyper + j/k to pageup/pagedown
			</li>
			<li
				class="border-b py-2 last:border-b-0"
				style="border-color: var(--color-border); color: var(--color-text-muted)"
			>
				Hyper + h/l to left/right arrow
			</li>
			<li
				class="border-b py-2 last:border-b-0"
				style="border-color: var(--color-border); color: var(--color-text-muted)"
			>
				Hyper + c to cmd + c
			</li>
			<li
				class="border-b py-2 last:border-b-0"
				style="border-color: var(--color-border); color: var(--color-text-muted)"
			>
				Hyper + v to cmd + v
			</li>
			<li
				class="border-b py-2 last:border-b-0"
				style="border-color: var(--color-border); color: var(--color-text-muted)"
			>
				Hyper + t to cmd + t
			</li>
			<li
				class="border-b py-2 last:border-b-0"
				style="border-color: var(--color-border); color: var(--color-text-muted)"
			>
				Hyper + w to cmd + w
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
				Full Karabiner Configuration
			</h3>
			<button class="icon-button h-9 w-9" onclick={closeDialog} aria-label="Close dialog">
				<X size={16} />
			</button>
		</div>
		<div class="mb-4">
			<button class="button" onclick={copy}>
				{#if copied}
					<Check size={16} class="success-text" />
					Copied!
				{:else}
					<Copy size={16} />
					Copy Config
				{/if}
			</button>
		</div>
		<div class="surface p-4 text-sm">
			{@html html}
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
		background: rgba(0, 0, 0, 0.55);
	}

	.config-dialog-inner {
		max-height: inherit;
		overflow: auto;
		padding: 1.5rem;
	}
</style>
