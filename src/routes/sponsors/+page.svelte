<script lang="ts">
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import agentuityLogo from '$lib/svg/sponsors/agentuity.svg';
	import convexLogo from '$lib/svg/sponsors/convex.svg';
	import daytonaLogo from '$lib/svg/sponsors/daytona.svg';
	import depotLogo from '$lib/svg/sponsors/depot.svg';
	import firecrawlLogo from '$lib/svg/sponsors/firecrawl.svg';
	import greptileLogo from '$lib/svg/sponsors/greptile.svg';
	import railwayLogo from '$lib/svg/sponsors/railway.svg';
	import upstashLogo from '$lib/svg/sponsors/upstash.svg';
	import workosLogo from '$lib/svg/sponsors/workos.svg';

	const sponsors = [
		{
			slug: 'agentuity',
			accent: '#8b5cf6',
			name: 'Agentuity',
			href: 'https://davis7.link/agentuity',
			description:
				"Full stack infra for AI agents. Seriously, everything you need for building agents. It's great.",
			logo: agentuityLogo,
			logoAlt: 'Agentuity logo',
			logoClass: 'max-h-10 max-w-[10rem]'
		},
		{
			slug: 'greptile',
			accent: '#22c55e',
			name: 'Greptile',
			href: 'https://davis7.link/greptile',
			description: 'My AI code reviewer of choice. Cannot imagine not having it on my repos.',
			logo: greptileLogo,
			logoAlt: 'Greptile logo',
			logoClass: 'max-h-9 max-w-[10rem]'
		},
		{
			slug: 'firecrawl',
			accent: '#fa5d19',
			name: 'Firecrawl',
			href: 'https://davis7.link/firecrawl',
			description:
				'Two tools: web search and web scrape (get the content of a page in markdown). I cannot live without them.',
			logo: firecrawlLogo,
			logoAlt: 'Firecrawl logo',
			logoClass: 'max-h-9 max-w-[10rem]'
		},
		{
			slug: 'railway',
			accent: '#a855f7',
			name: 'Railway',
			href: 'https://davis7.link/railway',
			description:
				'The best place to host your apps. Crazy performance, modern tech, and really cheap.',
			logo: railwayLogo,
			logoAlt: 'Railway logo',
			logoClass: 'max-h-10 max-w-[9.5rem]'
		},
		{
			slug: 'depot',
			accent: '#46a759',
			name: 'Depot',
			href: 'https://davis7.link/depot',
			description:
				'Depot CI takes github actions for slow and unusable, to something I actually want to use.',
			logo: depotLogo,
			logoAlt: 'Depot logo',
			logoClass: 'max-h-9 max-w-[10rem]'
		},
		{
			slug: 'daytona',
			accent: '#38bdf8',
			name: 'Daytona',
			href: 'https://davis7.link/daytona',
			description: 'My favorite sandbox platform. Really fast, great DX, and open source.',
			logo: daytonaLogo,
			logoAlt: 'Daytona logo',
			logoClass: 'max-h-8 max-w-[10.75rem]'
		},
		{
			slug: 'convex',
			accent: '#ee342f',
			name: 'Convex',
			href: 'https://davis7.link/convex',
			description:
				'My favorite backend for apps. Effortless client/server sync, infra as code, and agents are great at using it.',
			logo: convexLogo,
			logoAlt: 'Convex logo',
			logoClass: 'max-h-10 max-w-[10rem]'
		},
		{
			slug: 'upstash',
			accent: '#00e9a3',
			name: 'Upstash',
			href: 'https://davis7.link/upstash',
			description:
				'Upstash Redis is the only way I host Redis and Upstash Box has the best DX of any sandbox.',
			logo: upstashLogo,
			logoAlt: 'Upstash logo',
			logoClass: 'max-h-8 max-w-[12rem]'
		},
		{
			slug: 'workos',
			accent: '#6366f1',
			name: 'WorkOS',
			href: 'https://davis7.link/workos',
			description:
				'The auth platform for everything from insane enterprise setups all the way down to side projects.',
			logo: workosLogo,
			logoAlt: 'WorkOS logo',
			logoClass: 'max-h-8 max-w-[9rem]'
		}
	] as const;
</script>

<svelte:head>
	<title>Sponsors - Ben Davis</title>
	<meta
		name="description"
		content="The companies that I wanted to work with to make my videos possible."
	/>
</svelte:head>

<main class="px-3">
	<div class="pb-16">
		<PageHeader title="Sponsors">
			The companies I wanted to work with to make my videos possible.
		</PageHeader>

		<div class="grid auto-rows-fr gap-4 sm:grid-cols-2">
			{#each sponsors as sponsor}
				<a
					href={sponsor.href}
					target="_blank"
					rel="noopener noreferrer"
					class="resource-card sponsor-card min-h-75 w-full"
					style:--sponsor-accent={sponsor.accent}
				>
					<div class="flex h-full flex-col">
						<div class="logo-frame mb-5 h-24 w-full shrink-0 overflow-hidden px-5">
							<img
								src={sponsor.logo}
								alt={sponsor.logoAlt}
								class={`block h-auto w-auto shrink-0 object-contain ${sponsor.logoClass}`}
							/>
						</div>

						<h2 class="resource-title text-lg leading-tight font-semibold tracking-tight">
							{sponsor.name}
						</h2>
						<p class="resource-subtitle mt-2 flex-1 text-sm leading-6 sm:text-base">
							{sponsor.description}
						</p>
						<span class="sponsor-cta mt-4 text-sm font-medium">Visit sponsor →</span>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<SocialLinks />
</main>

<style lang="postcss">
	/*
	 * Per-sponsor brand accents. This is a deliberate, owner-approved exception to
	 * the Wire Rule in DESIGN.md: sponsors get a faint brand-colored tint + border so
	 * each card reads as its company. The card still layers on .resource-card, so it
	 * keeps the shared focus ring, the 1px lift, --shadow-surface, and reduced-motion.
	 */
	.sponsor-card {
		--sponsor-accent: var(--color-text-subtle);

		background:
			linear-gradient(
				135deg,
				color-mix(in srgb, var(--sponsor-accent) 14%, transparent),
				transparent 42%
			),
			linear-gradient(
				315deg,
				color-mix(in srgb, var(--sponsor-accent) 7%, transparent),
				transparent 48%
			),
			color-mix(in srgb, var(--sponsor-accent) 10%, var(--color-bg));
		border-color: color-mix(in srgb, var(--sponsor-accent) 32%, transparent);
		transition:
			background 160ms ease,
			border-color 160ms ease,
			transform 160ms ease;
	}

	.sponsor-card:hover {
		background:
			linear-gradient(
				135deg,
				color-mix(in srgb, var(--sponsor-accent) 20%, transparent),
				transparent 44%
			),
			linear-gradient(
				315deg,
				color-mix(in srgb, var(--sponsor-accent) 11%, transparent),
				transparent 50%
			),
			color-mix(in srgb, var(--sponsor-accent) 14%, var(--color-bg));
		border-color: color-mix(in srgb, var(--sponsor-accent) 52%, transparent);
	}

	.sponsor-cta {
		color: var(--color-text-subtle);
		transition: color 160ms ease;
	}

	:global(.resource-card:hover) .sponsor-cta {
		color: var(--color-link-hover);
	}
</style>
