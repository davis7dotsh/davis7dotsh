<script lang="ts">
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import agentuityLogo from '$lib/svg/sponsors/agentuity.svg';
	import daytonaLogo from '$lib/svg/sponsors/daytona.svg';
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
				"Full stack infra for ai agents. Seriously, everything you need for building agents it's great.",
			logo: agentuityLogo,
			logoAlt: 'Agentuity logo',
			logoClass: 'max-h-10 max-w-[10rem]'
		},
		{
			slug: 'daytona',
			name: 'Daytona',
			href: 'https://davis7.link/daytona',
			description: 'My favorite sandbox platform. Really fast, great dx, and open source.',
			logo: daytonaLogo,
			logoAlt: 'Daytona logo',
			logoClass: 'max-h-8 max-w-[10.75rem]'
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
			slug: 'greptile',
			name: 'Greptile',
			href: 'https://davis7.link/greptile',
			description: 'My ai code reviewer of choice. Cannot imagine not having it on my repos.',
			logo: greptileLogo,
			logoAlt: 'Greptile logo',
			logoClass: 'max-h-9 max-w-[10rem]'
		},
		{
			slug: 'upstash',
			name: 'Upstash',
			href: 'https://davis7.link/upstash',
			description:
				'Upstash Redis is the only way I host redis and Upstash Box has the best dx of any sandbox.',
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
		<a href="/" class="back-link mb-6"> Back home </a>

		<h1
			class="text-[clamp(2.25rem,4vw,3.75rem)] leading-none font-bold tracking-tight"
			style="color: var(--color-text)"
		>
			Sponsors
		</h1>
		<p class="mt-3 max-w-2xl text-base leading-7 sm:text-lg" style="color: var(--color-text-muted)">
			The companies I wanted to work with to make my videos possible.
		</p>

		<div class="mt-8 grid auto-rows-fr gap-4 sm:grid-cols-2">
			{#each sponsors as sponsor}
				<a
					href={sponsor.href}
					target="_blank"
					rel="noopener noreferrer"
					class="sponsor-card flex min-h-75 w-full flex-col p-5"
				>
					<div
						class="sponsor-logo-frame mb-5 flex h-24 w-full shrink-0 items-center justify-center overflow-hidden px-5"
					>
						<img
							src={sponsor.logo}
							alt={sponsor.logoAlt}
							class={`sponsor-logo mx-auto block h-auto w-auto shrink-0 object-contain ${sponsor.logoClass}`}
						/>
					</div>

					<div class="flex flex-1 flex-col">
						<h2
							class="sponsor-title text-[clamp(1.125rem,1.5vw,1.5rem)] leading-tight font-semibold"
						>
							{sponsor.name}
						</h2>
						<p class="sponsor-description mt-2 flex-1 text-sm leading-6 sm:text-base">
							{sponsor.description}
						</p>
						<span class="sponsor-cta mt-4 text-sm font-medium"> Visit sponsor </span>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<SocialLinks />
</main>

<style lang="postcss">
	.sponsor-card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		color: var(--color-text);
		box-shadow: var(--shadow-surface);
		transition:
			transform 160ms ease,
			background 160ms ease,
			border-color 160ms ease;
	}

	.sponsor-card:hover {
		transform: translateY(-1px);
		background: var(--color-surface-elevated);
		border-color: var(--color-border-strong);
	}

	.sponsor-logo-frame {
		background: var(--color-ink);
		border: 1px solid var(--color-border);
	}

	.sponsor-title {
		color: var(--color-text);
		letter-spacing: -0.02em;
	}

	.sponsor-description {
		color: var(--color-text-muted);
	}

	.sponsor-cta {
		color: var(--color-text-subtle);
		transition: color 160ms ease;
	}

	.sponsor-card:hover .sponsor-cta {
		color: var(--color-link-hover);
	}

	/* keep logo frame dark in light mode so white SVG logos stay legible */
	:global(html[data-theme='light']) .sponsor-logo-frame {
		background: #1a1a1a;
		border-color: rgba(255, 255, 255, 0.08);
	}
</style>
