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
			logoClass: 'h-7 w-auto',
			logoContainerClass: 'bg-neutral-950'
		},
		{
			name: 'Daytona',
			href: 'https://davis7.link/daytona',
			description:
				'Secure infrastructure for running AI-generated code in fast, isolated sandboxes.',
			logo: daytonaLogo,
			logoAlt: 'Daytona logo',
			logoClass: 'h-9 w-auto',
			logoContainerClass: 'bg-white'
		},
		{
			name: 'Railway',
			href: 'https://davis7.link/railway',
			description:
				'A full-stack cloud for deploying apps, servers, and databases with scaling, monitoring, and security built in.',
			logo: railwayLogo,
			logoAlt: 'Railway logo',
			logoClass: 'h-8 w-auto',
			logoContainerClass: 'bg-neutral-950'
		},
		{
			name: 'Greptile',
			href: 'https://davis7.link/greptile',
			description:
				'AI code reviews that understand your entire codebase so teams can catch bugs faster and improve code quality.',
			logo: greptileLogo,
			logoAlt: 'Greptile logo',
			logoClass: 'h-8 w-auto',
			logoContainerClass: 'bg-white/5'
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

		<div class="mt-8 grid gap-4 sm:grid-cols-2">
			{#each sponsors as sponsor}
				<a
					href={sponsor.href}
					target="_blank"
					rel="noreferrer"
					class="group flex h-full flex-col rounded-xl border border-neutral-800 bg-neutral-950/60 p-5 transition-all hover:-translate-y-0.5 hover:border-neutral-700 hover:bg-neutral-900/70"
				>
					<div
						class={`mb-5 flex h-20 items-center rounded-lg border border-neutral-800 px-4 ${sponsor.logoContainerClass}`}
					>
						<img src={sponsor.logo} alt={sponsor.logoAlt} class={sponsor.logoClass} />
					</div>

					<div class="flex flex-1 flex-col">
						<h2 class="text-xl font-semibold text-neutral-100">
							{sponsor.name}
						</h2>
						<p class="mt-2 flex-1 text-sm leading-6 text-neutral-400">
							{sponsor.description}
						</p>
						<span
							class="mt-4 text-sm font-medium text-neutral-200 transition-colors group-hover:text-white"
						>
							Visit sponsor
						</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</main>
