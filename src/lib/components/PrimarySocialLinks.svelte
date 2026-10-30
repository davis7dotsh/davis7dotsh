<script lang="ts">
	import { tr } from '$lib/i18n';
	import SocialIcon from './SocialIcon.svelte';

	const links = [
		{
			href: 'https://www.youtube.com/@bmdavis419',
			label: 'bmdavis419',
			icon: 'youtube'
		},
		{
			href: 'https://www.youtube.com/@nerd-snipe',
			label: 'nerd snipe',
			icon: 'youtube'
		},
		{
			href: 'https://x.com/davis7',
			label: 'davis7',
			icon: 'x'
		},
		{
			href: 'https://substack.com/@davis7',
			label: 'substack',
			icon: 'substack'
		},
		{
			href: 'https://www.twitch.tv/bmdavis419',
			label: 'bmdavis419',
			icon: 'twitch'
		}
	] as const;
</script>

<nav class="primary-social-links" aria-label={tr('Social')}>
	<ul class="primary-social-links__list">
		{#each links as link (link.href)}
			<li>
				<a href={link.href} target="_blank" rel="noopener noreferrer" class="primary-social-link">
					<span class="primary-social-link__icon" aria-hidden="true">
						<SocialIcon name={link.icon} />
					</span>
					<span class="primary-social-link__label">{tr(link.label)}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="postcss">
	@reference 'tailwindcss';

	.primary-social-links {
		@apply mt-2 mb-6;
	}

	.primary-social-links__list {
		@apply m-0 grid list-none grid-cols-2 gap-x-5 gap-y-3 p-0 sm:flex sm:flex-wrap sm:items-center sm:gap-y-2;
	}

	.primary-social-link {
		@apply inline-flex items-center gap-1.5 text-sm transition-colors;
		color: var(--color-text-subtle);
		text-decoration: none;
		border-bottom: 1px solid transparent;
	}

	.primary-social-link:hover {
		color: var(--color-link-hover);
		border-bottom-color: var(--color-link-hover);
	}

	.primary-social-link:focus-visible {
		outline: 1px solid var(--color-focus);
		outline-offset: 3px;
	}

	.primary-social-link__icon {
		@apply flex h-4 w-4 shrink-0 items-center justify-center;
	}

	.primary-social-link__icon :global(svg) {
		@apply h-full w-full;
	}

	.primary-social-link__label {
		@apply leading-none;
	}
</style>
