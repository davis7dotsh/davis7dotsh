<script lang="ts">
	import { codeToHtml } from 'shiki';
	import { Copy } from 'lucide-svelte';
	import Keyboard from '$lib/components/Keyboard.svelte';
	import myConfig from './karabiner.json';

	import { Check } from 'lucide-svelte';

	let html = $state('');
	let showModal = $state(false);
	let copied = $state(false);

	$effect(() => {
		const run = async () => {
			const innerHtml = await codeToHtml(JSON.stringify(myConfig, null, 2), {
				lang: 'json',
				theme: 'github-dark',
				colorReplacements: {
					'#24292e': '#262626'
				}
			});
			html = innerHtml;
		};

		run();
	});

	const copy = () => {
		navigator.clipboard.writeText(JSON.stringify(myConfig));
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	};
</script>

<svelte:head>
	<title>Ben Davis - Karabiner Config</title>
</svelte:head>

<div class="flex flex-col items-start gap-8">
	<a
		href="/"
		class="mb-2 text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-300"
		>← Back to Home</a
	>
	<h2 class="text-2xl font-semibold text-neutral-100">My Karabiner Config</h2>

	<p class="leading-relaxed text-neutral-300">
		This is my "hyper key" config, you can download Karabiner elements
		<a
			href="https://karabiner-elements.pqrs.org/"
			target="_blank"
			rel="noopener noreferrer"
			class="text-neutral-100 underline transition-colors hover:text-white">here</a
		>.
	</p>

	<button
		class="rounded-lg border-2 border-blue-500 bg-transparent px-4 py-2 font-medium text-blue-300 transition-all hover:border-blue-400 hover:text-blue-200"
		onclick={() => (showModal = true)}
	>
		View Full Config
	</button>

	<Keyboard />

	<p class="text-neutral-300">Keybindings:</p>
	<ul class="w-full space-y-2 font-bold">
		<li class="border-b border-neutral-800 py-2 text-neutral-300 last:border-b-0">
			Caps Lock to Hyper
		</li>
		<li class="border-b border-neutral-800 py-2 text-neutral-300 last:border-b-0">
			Hyper + tab to control + tab
		</li>
		<li class="border-b border-neutral-800 py-2 text-neutral-300 last:border-b-0">
			Hyper + a to cmd + a
		</li>
		<li class="border-b border-neutral-800 py-2 text-neutral-300 last:border-b-0">
			Hyper + j/k to pageup/pagedown
		</li>
		<li class="border-b border-neutral-800 py-2 text-neutral-300 last:border-b-0">
			Hyper + h/l to left/right arrow
		</li>
		<li class="border-b border-neutral-800 py-2 text-neutral-300 last:border-b-0">
			Hyper + c to cmd + c
		</li>
		<li class="border-b border-neutral-800 py-2 text-neutral-300 last:border-b-0">
			Hyper + v to cmd + v
		</li>
		<li class="border-b border-neutral-800 py-2 text-neutral-300 last:border-b-0">
			Hyper + t to cmd + t
		</li>
		<li class="border-b border-neutral-800 py-2 text-neutral-300 last:border-b-0">
			Hyper + w to cmd + w
		</li>
	</ul>
</div>

{#if showModal}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
		onclick={() => (showModal = false)}
	>
		<div
			class="z-50 max-h-[90vh] max-w-4xl overflow-auto rounded-lg border border-neutral-800 bg-neutral-900 p-6"
		>
			<div class="mb-4 flex items-center justify-between">
				<h3 class="text-xl font-semibold text-neutral-100">Full Karabiner Configuration</h3>
				<button
					class="text-neutral-400 transition-colors hover:text-neutral-100"
					onclick={() => (showModal = false)}
				>
					✕
				</button>
			</div>
			<div class="mb-4">
				<button
					class="flex items-center gap-2 rounded-lg border-2 border-blue-500 bg-transparent px-3 py-2 font-medium text-blue-300 transition-all hover:border-blue-400 hover:text-blue-200"
					onclick={copy}
				>
					{#if copied}
						<Check size={16} class="text-green-400" />
						Copied!
					{:else}
						<Copy size={16} />
						Copy Config
					{/if}
				</button>
			</div>
			<div class="rounded-lg bg-neutral-800 p-4 text-sm">
				{@html html}
			</div>
		</div>
	</div>
{/if}
