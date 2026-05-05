<script lang="ts">
	import { vercelImageUrl, vercelSrcset } from '$lib/image';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
</script>

<svelte:head>
	<title>Font - Ben Davis</title>
	<meta name="description" content="The font I use in Cursor and the terminal" />
</svelte:head>

<main class="px-3">
	<div class="pb-16">
		<a href="/" class="back-link mb-6"> Back home </a>

		<div class="mt-12 mb-10 flex flex-col items-center gap-4 text-center sm:mt-20 sm:mb-14">
			<h1
				class="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-bold tracking-tight"
				style="color: var(--color-text)"
			>
				What Font is That?
			</h1>

			<a
				href="https://usgraphics.com/products/berkeley-mono"
				target="_blank"
				rel="noreferrer"
				class="brand-link text-lg sm:text-xl"
			>
				Berkeley Mono
			</a>

			<p class="text-sm sm:text-base" style="color: var(--color-text-subtle)">
				(and the theme is <a
					href="https://open-vsx.org/extension/GitHub/github-vscode-theme"
					target="_blank"
					rel="noreferrer"
					class="brand-link">GitHub Dark Default</a
				>, the icons are
				<a
					href="https://open-vsx.org/extension/vscode-icons-team/vscode-icons"
					target="_blank"
					rel="noreferrer"
					class="brand-link">VSCode Icons</a
				>)
			</p>
		</div>

		<div class="full-bleed">
			<img
				src={vercelImageUrl('/font-showcase.png', 1200)}
				srcset={vercelSrcset('/font-showcase.png')}
				sizes="min(1200px, calc(100vw - 2rem))"
				alt="Berkeley Mono font showcase"
				class="w-full border shadow-2xl shadow-black/35"
				style="border-color: var(--color-border)"
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
