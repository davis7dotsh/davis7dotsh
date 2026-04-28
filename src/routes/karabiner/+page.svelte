<script lang="ts">
	import { codeToHtml } from 'shiki';
	import { Copy } from 'lucide-svelte';
	import Keyboard from '$lib/components/Keyboard.svelte';
	import myConfig from './karabiner.json';
	import { onMount } from 'svelte';

	import { Check } from 'lucide-svelte';

	let html = $state('');
	let showModal = $state(false);
	let copied = $state(false);
	let currentTheme = $state<'dark' | 'light'>('dark');

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
</script>

<svelte:head>
	<title>Ben Davis - Karabiner Config</title>
</svelte:head>

<div class="mx-auto flex max-w-5xl flex-col items-start gap-8">
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

		<button class="button" onclick={() => (showModal = true)}> View Full Config </button>

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
</div>

{#if showModal}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/55"
		onclick={() => (showModal = false)}
	>
		<div
			class="surface z-50 max-h-[90vh] max-w-4xl overflow-auto p-6"
			onclick={(event) => event.stopPropagation()}
		>
			<div class="mb-4 flex items-center justify-between">
				<h3 class="text-xl font-semibold" style="color: var(--color-text)">
					Full Karabiner Configuration
				</h3>
				<button class="icon-button h-8 w-8" onclick={() => (showModal = false)}> ✕ </button>
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
	</div>
{/if}
