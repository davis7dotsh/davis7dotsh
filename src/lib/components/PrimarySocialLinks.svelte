<script lang="ts">
	type Link = {
		href: string;
		label: string;
		icon: 'youtube' | 'x' | 'twitch';
	};

	const links: Link[] = [
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
			href: 'https://www.twitch.tv/bmdavis419',
			label: 'bmdavis419',
			icon: 'twitch'
		}
	];
</script>

<nav class="primary-social-links" aria-label="social">
	<ul class="primary-social-links__list">
		{#each links as link (link.href)}
			<li>
				<a
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					class="primary-social-link"
				>
					<span class="primary-social-link__icon" aria-hidden="true">
						{#if link.icon === 'youtube'}
							<svg viewBox="0 0 256 180" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
									fill="currentColor"
								/>
								<path
									fill="var(--youtube-play-color)"
									d="m102.421 128.06 66.328-38.418-66.328-38.418z"
								/>
							</svg>
						{:else if link.icon === 'x'}
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227">
								<path
									fill="currentColor"
									d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
								/>
							</svg>
						{:else}
							<svg viewBox="0 0 256 268" xmlns="http://www.w3.org/2000/svg">
								<path
									fill="currentColor"
									d="M17.458 0 0 46.556v186.201h63.983v34.934h34.931l34.898-34.934h52.36L256 162.954V0H17.458Zm23.259 23.263H232.73v128.029l-40.739 40.741H128L93.113 226.92v-34.886H40.717V23.263Zm64.008 116.405H128V69.844h-23.275v69.824Zm63.997 0h23.27V69.844h-23.27v69.824Z"
								/>
							</svg>
						{/if}
					</span>
					<span class="primary-social-link__label">{link.label}</span>
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
		@apply m-0 flex list-none flex-wrap items-center gap-x-5 gap-y-2 p-0;
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