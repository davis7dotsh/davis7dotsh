<script lang="ts">
	import { tr, localizePath } from '$lib/i18n';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import blacksmithLogo from '$lib/svg/sponsors/blacksmith.svg?raw';
	import encoreLogo from '$lib/svg/sponsors/encore.svg?raw';
	import spacexaiLogo from '$lib/svg/sponsors/spacexai.svg?raw';
	import agentuityLogo from '$lib/svg/sponsors/agentuity.svg?raw';
	import convexLogo from '$lib/svg/sponsors/convex.svg?raw';
	import daytonaLogo from '$lib/svg/sponsors/daytona.svg?raw';
	import depotLogo from '$lib/svg/sponsors/depot.svg?raw';
	import firecrawlLogo from '$lib/svg/sponsors/firecrawl.svg?raw';
	import greptileLogo from '$lib/svg/sponsors/greptile.svg?raw';
	import railwayLogo from '$lib/svg/sponsors/railway.svg?raw';
	import upstashLogo from '$lib/svg/sponsors/upstash.svg?raw';
	import workosLogo from '$lib/svg/sponsors/workos.svg?raw';

	const sponsors = [
		{
			slug: 'agentuity',
			name: 'Agentuity',
			href: 'https://davis7.link/agentuity',
			description:
				"Full stack infra for AI agents. Seriously, everything you need for building agents. It's great.",
			logo: agentuityLogo,
			logoAlt: 'Agentuity logo'
		},
		{
			slug: 'greptile',
			name: 'Greptile',
			href: 'https://davis7.link/greptile',
			description: 'My AI code reviewer of choice. Cannot imagine not having it on my repos.',
			logo: greptileLogo,
			logoAlt: 'Greptile logo'
		},
		{
			slug: 'firecrawl',
			name: 'Firecrawl',
			href: 'https://davis7.link/firecrawl',
			description:
				'Two tools: web search and web scrape (get the content of a page in markdown). I cannot live without them.',
			logo: firecrawlLogo,
			logoAlt: 'Firecrawl logo'
		},
		{
			slug: 'railway',
			name: 'Railway',
			href: 'https://davis7.link/railway',
			description:
				'The best place to host your apps. Crazy performance, modern tech, and really cheap.',
			logo: railwayLogo,
			logoAlt: 'Railway logo'
		},
		{
			slug: 'depot',
			name: 'Depot',
			href: 'https://davis7.link/depot',
			description:
				'Depot CI takes github actions for slow and unusable, to something I actually want to use.',
			logo: depotLogo,
			logoAlt: 'Depot logo'
		},
		{
			slug: 'daytona',
			name: 'Daytona',
			href: 'https://davis7.link/daytona',
			description: 'My favorite sandbox platform. Really fast, great DX, and open source.',
			logo: daytonaLogo,
			logoAlt: 'Daytona logo'
		},
		{
			slug: 'convex',
			name: 'Convex',
			href: 'https://davis7.link/convex',
			description:
				'My favorite backend for apps. Effortless client/server sync, infra as code, and agents are great at using it.',
			logo: convexLogo,
			logoAlt: 'Convex logo'
		},
		{
			slug: 'upstash',
			name: 'Upstash',
			href: 'https://davis7.link/upstash',
			description:
				'Upstash Redis is the only way I host Redis and Upstash Box has the best DX of any sandbox.',
			logo: upstashLogo,
			logoAlt: 'Upstash logo'
		},
		{
			slug: 'workos',
			name: 'WorkOS',
			href: 'https://davis7.link/workos',
			description:
				'The auth platform for everything from insane enterprise setups all the way down to side projects.',
			logo: workosLogo,
			logoAlt: 'WorkOS logo'
		},
		{
			slug: 'blacksmith',
			name: 'Blacksmith',
			href: 'https://www.blacksmith.sh/',
			description:
				'Faster GitHub Actions without rewriting your workflows. Swap the runner and keep shipping.',
			logo: blacksmithLogo,
			logoAlt: 'Blacksmith logo'
		},
		{
			slug: 'encore',
			name: 'Encore',
			href: 'https://encore.dev/',
			description:
				'Infrastructure defined in your code. Run your whole backend locally, then deploy to your own cloud.',
			logo: encoreLogo,
			logoAlt: 'Encore logo'
		},
		{
			slug: 'spacexai',
			name: 'SpaceXAI',
			href: 'https://x.ai/',
			description:
				'The team behind Grok Bot and Cursor. AI teammates for research, coding, and getting work done.',
			logo: spacexaiLogo,
			logoAlt: 'SpaceXAI logo'
		}
	] as const;

	// These are trusted, repository-owned SVGs. Let neutral wordmarks inherit the
	// theme's text color while retaining the colored parts of each brand mark.
	const themeableLogo = (svg: string) =>
		svg
			.replace(/fill="(?:white|#fff(?:fff)?|#eeeef0)"/gi, 'fill="currentColor"')
			.replace(/fill:white(?=;|"|$)/gi, 'fill:currentColor')
			.replace(/fill="#00ffff"/gi, 'fill="var(--sponsor-agentuity-icon)"');
</script>

<svelte:head>
	<title>{tr('Sponsors - Ben Davis')}</title>
	<meta
		name="description"
		content={tr('The companies that I wanted to work with to make my videos possible.')}
	/>
</svelte:head>

<main class="sponsors-page">
	<header>
		<nav class="sponsors-nav">
			<a href={localizePath('/')} class="back-link">← {tr('Back')}</a>
			<a href={localizePath('/')} class="site-name">{tr('Ben Davis')}</a>
		</nav>
		<div class="sponsors-hero">
			<h1>{tr('Sponsors')}.</h1>
			<p>{tr('The companies I wanted to work with to make my videos possible.')}</p>
		</div>
	</header>

	<div class="sponsors-gallery">
		{#each sponsors as sponsor, index (sponsor.slug)}
			<a
				href={sponsor.href}
				target="_blank"
				rel="noopener noreferrer"
				class="sponsor"
				aria-labelledby={`sponsor-name-${sponsor.slug} sponsor-cta-${sponsor.slug}`}
				aria-describedby={`sponsor-description-${sponsor.slug}`}
			>
				<div class="sponsor-mark">
					<div class="sponsor-logo" role="img" aria-label={tr(sponsor.logoAlt)}>
						{@html themeableLogo(sponsor.logo)}
					</div>
					<span class="sponsor-number" aria-hidden="true">
						{String(index + 1).padStart(2, '0')}
					</span>
				</div>
				<h2 id={`sponsor-name-${sponsor.slug}`}>{sponsor.name}</h2>
				<p id={`sponsor-description-${sponsor.slug}`}>{tr(sponsor.description)}</p>
				<span id={`sponsor-cta-${sponsor.slug}`} class="sponsor-cta">
					{tr('Visit sponsor →')}
				</span>
			</a>
		{/each}
	</div>

	<footer class="sponsors-footer">
		<SocialLinks />
	</footer>
</main>

<style>
	.sponsors-page {
		--sponsor-link: #4dabf7;
		--sponsor-agentuity-icon: #00ffff;

		max-width: 1024px;
		margin-inline: auto;
		padding: 8px 0 24px;
	}

	:global(html[data-theme='light']) .sponsors-page {
		--sponsor-link: var(--color-accent-blue);
		--sponsor-agentuity-icon: #087d89;
	}

	.sponsors-nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 44px;
		padding-right: 56px;
	}

	.sponsors-nav a {
		padding-block: 10px;
		font-size: 14px;
		line-height: 22px;
	}

	.site-name {
		color: var(--color-text);
	}

	.site-name:focus-visible,
	.sponsor:focus-visible,
	.sponsors-footer :global(a:focus-visible) {
		outline: 1px solid var(--color-focus);
		outline-offset: 3px;
	}

	.sponsors-hero {
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding-block: 36px;
	}

	.sponsors-hero h1 {
		color: var(--color-text);
		font-size: clamp(40px, 4.5vw, 64px);
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.06em;
		overflow-wrap: anywhere;
	}

	.sponsors-hero p {
		max-width: 340px;
		color: var(--color-text-subtle);
		font-size: 18px;
		line-height: 1.45;
	}

	.sponsors-gallery {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		column-gap: clamp(24px, 3vw, 48px);
	}

	.sponsor {
		display: flex;
		min-width: 0;
		min-height: 280px;
		flex-direction: column;
		padding-block: 24px;
		border-top: 1px solid var(--color-border);
		transition: border-color 160ms ease;
	}

	.sponsor:hover {
		border-color: var(--color-border-strong);
	}

	.sponsor-mark {
		display: flex;
		height: 60px;
		flex-shrink: 0;
		align-items: flex-start;
		justify-content: space-between;
		gap: 16px;
	}

	.sponsor-logo {
		display: flex;
		width: 144px;
		height: 36px;
		align-items: center;
		color: var(--color-text);
	}

	.sponsor-logo :global(svg) {
		display: block;
		width: 100%;
		height: auto;
		max-height: 36px;
	}

	.sponsor-number {
		color: var(--color-text-subtle);
		font-size: 14px;
		line-height: 22px;
		font-variant-numeric: tabular-nums;
	}

	.sponsor h2 {
		padding-bottom: 8px;
		color: var(--color-text);
		font-size: 18px;
		font-weight: 500;
		line-height: 24px;
	}

	.sponsor p {
		flex: 1;
		color: var(--color-text-subtle);
		font-size: 15px;
		line-height: 23px;
		overflow-wrap: anywhere;
	}

	.sponsor-cta {
		align-self: flex-start;
		padding-top: 20px;
		color: var(--sponsor-link);
		font-size: 14px;
		line-height: 22px;
		text-underline-offset: 4px;
	}

	.sponsor:hover .sponsor-cta,
	.sponsor:focus-visible .sponsor-cta {
		text-decoration: underline;
	}

	.sponsors-footer {
		display: flex;
		justify-content: center;
		padding-top: 32px;
		border-top: 1px solid var(--color-border);
	}

	.sponsors-footer :global(> div) {
		display: grid;
		width: min(100%, 384px);
		grid-template-columns: repeat(6, minmax(0, 1fr));
	}

	.sponsors-footer :global(.social-link) {
		justify-self: center;
		margin-inline: 0;
	}

	@media (min-width: 640px) {
		.sponsors-gallery {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 1024px) {
		.sponsors-hero {
			flex-direction: row;
			align-items: flex-end;
			justify-content: space-between;
			gap: 40px;
			padding-block: 44px;
		}

		.sponsors-hero p {
			flex-basis: 340px;
		}

		.sponsors-gallery {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (min-width: 1440px) {
		.sponsors-nav {
			padding-right: 0;
		}
	}
</style>
