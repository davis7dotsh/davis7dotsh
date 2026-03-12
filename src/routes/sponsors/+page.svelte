<script lang="ts">
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import agentuityLogo from '$lib/svg/sponsors/agentuity.svg';
	import daytonaLogo from '$lib/svg/sponsors/daytona.svg';
	import greptileLogo from '$lib/svg/sponsors/greptile.svg';
	import railwayLogo from '$lib/svg/sponsors/railway.svg';
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
		<a
			href="/"
			class="mb-6 inline-flex text-sm text-neutral-400 underline decoration-neutral-800 underline-offset-4 transition-colors hover:text-neutral-200 hover:decoration-neutral-500"
		>
			Back home
		</a>

		<h1 class="text-[clamp(2.25rem,4vw,3.75rem)] font-bold tracking-tight text-neutral-100 leading-none">
			Sponsors
		</h1>
		<p class="mt-3 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
			The companies I wanted to work with to make my videos possible.
		</p>

		<div class="mt-8 grid auto-rows-fr gap-4 sm:grid-cols-2">
			{#each sponsors as sponsor}
				<a
					href={sponsor.href}
					target="_blank"
					rel="noreferrer"
					class={`group sponsor-card sponsor-card--${sponsor.slug} flex h-75 w-full flex-col p-5`}
				>
					<div class="sponsor-logo-frame mb-5 flex h-24 w-full shrink-0 items-center justify-center overflow-hidden px-5">
						<img
							src={sponsor.logo}
							alt={sponsor.logoAlt}
							class={`sponsor-logo mx-auto block h-auto w-auto shrink-0 object-contain ${sponsor.logoClass}`}
						/>
					</div>

					<div class="flex flex-1 flex-col">
						<h2 class="sponsor-title text-[clamp(1.125rem,1.5vw,1.5rem)] font-semibold leading-tight">
							{sponsor.name}
						</h2>
						<p class="sponsor-description mt-2 flex-1 text-sm leading-6 sm:text-base">
							{sponsor.description}
						</p>
						<span class="sponsor-cta mt-4 text-sm font-medium">
							Visit sponsor
						</span>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<SocialLinks />
</main>

<style lang="postcss">
	.sponsor-card {
		--sponsor-surface: linear-gradient(180deg, #0a0a0a 0%, #111111 100%);
		--sponsor-surface-hover: linear-gradient(180deg, #0b0b0b 0%, #181818 100%);
		--sponsor-border: rgba(255, 255, 255, 0.12);
		--sponsor-border-hover: rgba(255, 255, 255, 0.24);
		--sponsor-logo-bg: #050505;
		--sponsor-logo-border: rgba(255, 255, 255, 0.08);
		--sponsor-logo-border-hover: rgba(255, 255, 255, 0.18);
		--sponsor-title: var(--color-neutral-100);
		--sponsor-description: var(--color-neutral-300);
		--sponsor-cta: var(--color-neutral-100);
		background: var(--sponsor-surface);
		border: 1px solid var(--sponsor-border);
		color: var(--sponsor-title);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
		transition:
			transform 180ms ease,
			background 180ms ease,
			border-color 180ms ease,
			box-shadow 180ms ease;
	}

	.sponsor-card:hover {
		transform: translateY(-2px);
		background: var(--sponsor-surface-hover);
		border-color: var(--sponsor-border-hover);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
	}

	.sponsor-logo-frame {
		background: var(--sponsor-logo-bg);
		border: 1px solid var(--sponsor-logo-border);
		transition: border-color 180ms ease, background 180ms ease;
	}

	.sponsor-card:hover .sponsor-logo-frame {
		border-color: var(--sponsor-logo-border-hover);
	}

	.sponsor-title {
		color: var(--sponsor-title);
		letter-spacing: -0.02em;
	}

	.sponsor-description {
		color: var(--sponsor-description);
	}

	.sponsor-cta {
		color: var(--sponsor-cta);
	}

	.sponsor-card--agentuity {
		--sponsor-surface: linear-gradient(180deg, #081214 0%, #091a1d 100%);
		--sponsor-surface-hover: linear-gradient(180deg, #091619 0%, #0d2327 100%);
		--sponsor-border: rgba(34, 211, 238, 0.18);
		--sponsor-border-hover: rgba(34, 211, 238, 0.32);
		--sponsor-logo-border: rgba(34, 211, 238, 0.16);
		--sponsor-logo-border-hover: rgba(34, 211, 238, 0.28);
		--sponsor-cta: #22d3ee;
	}

	.sponsor-card--daytona {
		--sponsor-surface: linear-gradient(180deg, #0b0b0b 0%, #131313 100%);
		--sponsor-surface-hover: linear-gradient(180deg, #0d0d0d 0%, #1a1a1a 100%);
		--sponsor-border: rgba(255, 255, 255, 0.14);
		--sponsor-border-hover: rgba(255, 255, 255, 0.28);
		--sponsor-logo-border: rgba(255, 255, 255, 0.08);
		--sponsor-logo-border-hover: rgba(255, 255, 255, 0.2);
		--sponsor-cta: var(--color-neutral-50);
	}

	.sponsor-card--railway {
		--sponsor-surface: linear-gradient(180deg, #120a1b 0%, #1a1226 100%);
		--sponsor-surface-hover: linear-gradient(180deg, #140c1f 0%, #20142d 100%);
		--sponsor-border: rgba(168, 85, 247, 0.18);
		--sponsor-border-hover: rgba(168, 85, 247, 0.34);
		--sponsor-logo-border: rgba(168, 85, 247, 0.16);
		--sponsor-logo-border-hover: rgba(168, 85, 247, 0.28);
		--sponsor-cta: #c084fc;
	}

	.sponsor-card--greptile {
		--sponsor-surface: linear-gradient(180deg, #07130f 0%, #0b1d16 100%);
		--sponsor-surface-hover: linear-gradient(180deg, #081611 0%, #0f2820 100%);
		--sponsor-border: rgba(16, 185, 129, 0.18);
		--sponsor-border-hover: rgba(16, 185, 129, 0.34);
		--sponsor-logo-border: rgba(16, 185, 129, 0.16);
		--sponsor-logo-border-hover: rgba(16, 185, 129, 0.28);
		--sponsor-cta: #34d399;
	}

	.sponsor-card--workos {
		--sponsor-surface: linear-gradient(180deg, #0a0d1d 0%, #101632 100%);
		--sponsor-surface-hover: linear-gradient(180deg, #0b1022 0%, #161c3f 100%);
		--sponsor-border: rgba(99, 102, 241, 0.18);
		--sponsor-border-hover: rgba(99, 102, 241, 0.34);
		--sponsor-logo-border: rgba(99, 102, 241, 0.16);
		--sponsor-logo-border-hover: rgba(99, 102, 241, 0.28);
		--sponsor-cta: #a5b4fc;
	}

	:global(html[data-theme='light']) .sponsor-card--agentuity {
		--sponsor-surface: linear-gradient(180deg, #ffffff 0%, #f0fdfa 100%);
		--sponsor-surface-hover: linear-gradient(180deg, #ffffff 0%, #ecfeff 100%);
		--sponsor-border: rgba(34, 211, 238, 0.18);
		--sponsor-border-hover: rgba(34, 211, 238, 0.3);
		--sponsor-logo-border: rgba(34, 211, 238, 0.14);
		--sponsor-logo-border-hover: rgba(34, 211, 238, 0.24);
		--sponsor-cta: #0891b2;
	}

	:global(html[data-theme='light']) .sponsor-card--daytona {
		--sponsor-surface: linear-gradient(180deg, #ffffff 0%, #f4f4f5 100%);
		--sponsor-surface-hover: linear-gradient(180deg, #ffffff 0%, #e7e7ea 100%);
		--sponsor-border: rgba(24, 24, 27, 0.12);
		--sponsor-border-hover: rgba(24, 24, 27, 0.22);
		--sponsor-logo-border: rgba(24, 24, 27, 0.1);
		--sponsor-logo-border-hover: rgba(24, 24, 27, 0.18);
		--sponsor-cta: #171717;
	}

	:global(html[data-theme='light']) .sponsor-card--railway {
		--sponsor-surface: linear-gradient(180deg, #ffffff 0%, #f7f2ff 100%);
		--sponsor-surface-hover: linear-gradient(180deg, #ffffff 0%, #f1e7ff 100%);
		--sponsor-border: rgba(168, 85, 247, 0.18);
		--sponsor-border-hover: rgba(168, 85, 247, 0.3);
		--sponsor-logo-border: rgba(168, 85, 247, 0.14);
		--sponsor-logo-border-hover: rgba(168, 85, 247, 0.24);
		--sponsor-cta: #7c3aed;
	}

	:global(html[data-theme='light']) .sponsor-card--greptile {
		--sponsor-surface: linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%);
		--sponsor-surface-hover: linear-gradient(180deg, #ffffff 0%, #dcfce7 100%);
		--sponsor-border: rgba(16, 185, 129, 0.18);
		--sponsor-border-hover: rgba(16, 185, 129, 0.3);
		--sponsor-logo-border: rgba(16, 185, 129, 0.14);
		--sponsor-logo-border-hover: rgba(16, 185, 129, 0.24);
		--sponsor-cta: #059669;
	}

	:global(html[data-theme='light']) .sponsor-card--workos {
		--sponsor-surface: linear-gradient(180deg, #ffffff 0%, #eef2ff 100%);
		--sponsor-surface-hover: linear-gradient(180deg, #ffffff 0%, #e0e7ff 100%);
		--sponsor-border: rgba(99, 102, 241, 0.18);
		--sponsor-border-hover: rgba(99, 102, 241, 0.3);
		--sponsor-logo-border: rgba(99, 102, 241, 0.14);
		--sponsor-logo-border-hover: rgba(99, 102, 241, 0.24);
		--sponsor-cta: #4f46e5;
	}
</style>
