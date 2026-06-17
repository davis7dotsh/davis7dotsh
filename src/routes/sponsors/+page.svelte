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
			name: 'Greptile',
			href: 'https://davis7.link/greptile',
			description: 'My AI code reviewer of choice. Cannot imagine not having it on my repos.',
			logo: greptileLogo,
			logoAlt: 'Greptile logo',
			logoClass: 'max-h-9 max-w-[10rem]'
		},
		{
			slug: 'firecrawl',
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
			name: 'Daytona',
			href: 'https://davis7.link/daytona',
			description: 'My favorite sandbox platform. Really fast, great DX, and open source.',
			logo: daytonaLogo,
			logoAlt: 'Daytona logo',
			logoClass: 'max-h-8 max-w-[10.75rem]'
		},
		{
			slug: 'convex',
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
					class="resource-card min-h-75 w-full"
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
	.sponsor-cta {
		color: var(--color-text-subtle);
		transition: color 160ms ease;
	}

	:global(.resource-card:hover) .sponsor-cta {
		color: var(--color-link-hover);
	}
</style>
