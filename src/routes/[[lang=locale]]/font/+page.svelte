<script lang="ts">
	import { tr, localizePath } from '$lib/i18n';
	import RichText from '$lib/components/RichText.svelte';
	import { vercelImageUrl, vercelSrcset } from '$lib/image';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
</script>

<svelte:head>
	<title>{tr('Font - Ben Davis')}</title>
	<meta name="description" content={tr('The font I use in Cursor and the terminal')} />
</svelte:head>

<main class="px-3">
	<div class="pb-16">
		<a href={localizePath('/')} class="back-link mb-6">{tr('← Back')}</a>

		<div class="mt-12 mb-10 flex flex-col items-center gap-4 text-center sm:mt-20 sm:mb-14">
			<h1 class="headline-text text-4xl font-semibold tracking-tight">
				{tr('What Font Is That?')}
			</h1>

			<a
				href="https://usgraphics.com/products/berkeley-mono"
				target="_blank"
				rel="noreferrer"
				class="brand-link text-lg sm:text-xl"
			>
				{tr('Berkeley Mono')}
			</a>

			<p class="text-sm sm:text-base" style="color: var(--color-text-subtle)">
				<RichText
					message={'(And the theme is <s0>GitHub Dark Default</s0>, the icons are <s1>VSCode Icons</s1>)'}
					elements={[
						{
							tag: 'a',
							attributes: {
								href: 'https://open-vsx.org/extension/GitHub/github-vscode-theme',
								target: '_blank',
								rel: 'noreferrer',
								class: 'brand-link'
							}
						},
						{
							tag: 'a',
							attributes: {
								href: 'https://open-vsx.org/extension/vscode-icons-team/vscode-icons',
								target: '_blank',
								rel: 'noreferrer',
								class: 'brand-link'
							}
						}
					]}
				/>
			</p>
		</div>

		<img
			src={vercelImageUrl('/font-showcase.png', 1200)}
			srcset={vercelSrcset('/font-showcase.png')}
			sizes="min(1200px, calc(100vw - 2rem))"
			alt={tr('Berkeley Mono font showcase')}
			class="w-full border"
			style="border-color: var(--color-border)"
		/>
	</div>

	<SocialLinks />
</main>
