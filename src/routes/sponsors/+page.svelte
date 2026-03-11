<script lang="ts">
	import agentuityLogo from '$lib/svg/sponsors/agentuity.svg';
	import daytonaLogo from '$lib/svg/sponsors/daytona.svg';
	import greptileLogo from '$lib/svg/sponsors/greptile.svg';
	import railwayLogo from '$lib/svg/sponsors/railway.svg';

	const sponsors = [
		{
			name: 'Agentuity',
			href: 'https://davis7.link/agentuity',
			description:
				'The full-stack platform for building and deploying AI agents with built-in APIs, frontends, databases, and observability.',
			logo: agentuityLogo,
			logoAlt: 'Agentuity logo',
			logoClass: 'max-h-10 max-w-[10rem]',
			logoContainerClass: 'border-cyan-400/20 bg-black/60',
			cardClass:
				'border-cyan-400/20 bg-linear-to-br from-[#0a0a0a] via-[#09161a] to-[#0a0a0a] text-neutral-100 hover:border-cyan-300/45 hover:bg-linear-to-br hover:from-[#0a0a0a] hover:via-[#0d2024] hover:to-[#0a0a0a]',
			descriptionClass: 'text-neutral-300',
			ctaClass: 'text-cyan-300 group-hover:text-cyan-200'
		},
		{
			name: 'Daytona',
			href: 'https://davis7.link/daytona',
			description:
				'Secure infrastructure for running AI-generated code in fast, isolated sandboxes.',
			logo: daytonaLogo,
			logoAlt: 'Daytona logo',
			logoClass: 'max-h-8 max-w-[10.75rem]',
			logoContainerClass: 'border-sky-950/10 bg-white',
			cardClass:
				'border-sky-500/25 bg-linear-to-br from-white via-[#f3f9ff] to-white text-neutral-950 hover:border-sky-500/60 hover:bg-linear-to-br hover:from-white hover:via-[#eaf5ff] hover:to-white',
			descriptionClass: 'text-neutral-700',
			ctaClass: 'text-sky-700 group-hover:text-sky-800'
		},
		{
			name: 'Railway',
			href: 'https://davis7.link/railway',
			description:
				'A full-stack cloud for deploying apps, servers, and databases with scaling, monitoring, and security built in.',
			logo: railwayLogo,
			logoAlt: 'Railway logo',
			logoClass: 'max-h-7 max-w-[9.5rem]',
			logoContainerClass: 'border-cyan-300/10 bg-[#120f18]',
			cardClass:
				'border-fuchsia-400/20 bg-linear-to-br from-[#07040f] via-[#17111f] to-[#0b0812] text-neutral-100 hover:border-cyan-300/35 hover:bg-linear-to-br hover:from-[#0a0714] hover:via-[#1d1526] hover:to-[#0d0a15]',
			descriptionClass: 'text-neutral-300',
			ctaClass: 'text-cyan-300 group-hover:text-cyan-200'
		},
		{
			name: 'Greptile',
			href: 'https://davis7.link/greptile',
			description:
				'AI code reviews that understand your entire codebase so teams can catch bugs faster and improve code quality.',
			logo: greptileLogo,
			logoAlt: 'Greptile logo',
			logoClass: 'max-h-9 max-w-[10rem]',
			logoContainerClass: 'border-[#107A4D]/20 bg-[#08130f]',
			cardClass:
				'border-[#107A4D]/30 bg-linear-to-br from-[#06100c] via-[#0d2018] to-[#08130f] text-neutral-100 hover:border-[#1c9b67]/55 hover:bg-linear-to-br hover:from-[#07130e] hover:via-[#123021] hover:to-[#0a1712]',
			descriptionClass: 'text-neutral-300',
			ctaClass: 'text-[#5fd09a] group-hover:text-[#7be0ae]'
		}
	] as const;
</script>

<svelte:head>
	<title>Sponsors - Ben Davis</title>
	<meta
		name="description"
		content="Companies sponsoring Ben Davis, with links, logos, and quick descriptions."
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

		<h1 class="text-4xl font-bold tracking-tight text-neutral-100">Sponsors</h1>
		<p class="mt-3 max-w-2xl text-neutral-300">
			The companies helping me keep building, shipping, and making cool stuff on the internet.
		</p>

		<div class="mt-8 grid auto-rows-fr gap-4 sm:grid-cols-2">
			{#each sponsors as sponsor}
				<a
					href={sponsor.href}
					target="_blank"
					rel="noreferrer"
					class={`group flex h-[18.75rem] w-full flex-col rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5 ${sponsor.cardClass}`}
				>
					<div
						class={`mb-5 flex h-24 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl border px-5 ${sponsor.logoContainerClass}`}
					>
						<img
							src={sponsor.logo}
							alt={sponsor.logoAlt}
							class={`mx-auto block h-auto w-auto shrink-0 object-contain ${sponsor.logoClass}`}
						/>
					</div>

					<div class="flex flex-1 flex-col">
						<h2 class="text-xl font-semibold">
							{sponsor.name}
						</h2>
						<p class={`mt-2 flex-1 text-sm leading-6 ${sponsor.descriptionClass}`}>
							{sponsor.description}
						</p>
						<span class={`mt-4 text-sm font-medium transition-colors ${sponsor.ctaClass}`}>
							Visit sponsor
						</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</main>
