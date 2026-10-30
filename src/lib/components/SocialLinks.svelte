<script lang="ts">
	import { tr } from '$lib/i18n';
	import SocialIcon from './SocialIcon.svelte';
	const links = [
		{ icon: 'youtube', href: 'https://www.youtube.com/@bmdavis419', label: 'YouTube' },
		{ icon: 'x', href: 'https://x.com/davis7', label: 'X (Twitter)' },
		{ icon: 'substack', href: 'https://substack.com/@davis7', label: 'Substack' },
		{ icon: 'discord', href: 'https://discord.gg/q2eARhxwMV', label: 'Discord' },
		{ icon: 'github', href: 'https://github.com/bmdavis419', label: 'GitHub' },
		{ icon: 'twitch', href: 'https://www.twitch.tv/bmdavis419', label: 'Twitch' }
	] as const;
</script>

<div class="flex items-center justify-center space-x-6 pb-8">
	{#each links as link (link.href)}
		<a href={link.href} target="_blank" rel="noopener noreferrer" class="social-link">
			<div class="svg-container"><SocialIcon name={link.icon} /></div>
			<span class="sr-only">{tr(link.label)}</span>
		</a>
	{/each}
</div>

<style lang="postcss">
	@reference 'tailwindcss';

	.svg-container {
		@apply flex h-6 w-6 items-center justify-center;
		pointer-events: none;
	}

	.svg-container :global(svg) {
		@apply h-full w-full;
		max-width: 100%;
		max-height: 100%;
	}
</style>
