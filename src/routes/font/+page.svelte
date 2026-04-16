<script lang="ts">
	import SocialLinks from '$lib/components/SocialLinks.svelte';

	let height = 0;

	$inspect(height);
</script>

<svelte:head>
	<title>Font - Ben Davis</title>
	<meta name="description" content="The font I use in Cursor and the terminal" />
</svelte:head>

<main class="px-3">
	<div
		class="pb-16"
		@attach={(el) => {
			height = el.clientHeight;
		}}
	>
		<a
			href="/"
			class="mb-6 inline-flex text-sm text-neutral-400 underline decoration-neutral-800 underline-offset-4 transition-colors hover:text-neutral-200 hover:decoration-neutral-500"
		>
			Back home
		</a>

		<div class="mt-12 mb-10 flex flex-col items-center gap-4 text-center sm:mt-20 sm:mb-14">
			<h1
				class="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-bold tracking-tight text-neutral-100"
			>
				What Font is That?
			</h1>

			<a
				href="https://usgraphics.com/products/berkeley-mono"
				target="_blank"
				rel="noreferrer"
				class="text-lg text-neutral-100 underline decoration-neutral-700 underline-offset-4 transition-colors hover:decoration-neutral-400 sm:text-xl"
			>
				Berkeley Mono
			</a>

			<p class="text-sm text-neutral-400 sm:text-base">
				(and the theme is <a
					href="https://open-vsx.org/extension/GitHub/github-vscode-theme"
					target="_blank"
					rel="noreferrer"
					class="text-neutral-300 underline decoration-neutral-700 underline-offset-2 transition-colors hover:decoration-neutral-400"
					>GitHub Dark Default</a
				>, the icons are
				<a
					href="https://open-vsx.org/extension/vscode-icons-team/vscode-icons"
					target="_blank"
					rel="noreferrer"
					class="text-neutral-300 underline decoration-neutral-700 underline-offset-2 transition-colors hover:decoration-neutral-400"
					>VSCode Icons</a
				>)
			</p>
		</div>

		<div class="full-bleed">
			<img
				src="/font-showcase.png"
				alt="Berkeley Mono font showcase"
				class="w-full rounded-xl border border-neutral-800 shadow-2xl shadow-black/50"
			/>
		</div>
	</div>

	<SocialLinks />
</main>

<style>
	.full-bleed {
		width: min(1200px, calc(100vw - 2rem));
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
