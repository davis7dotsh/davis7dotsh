<script lang="ts">
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import agentuityLogo from '$lib/svg/sponsors/agentuity.svg';
	import daytonaLogo from '$lib/svg/sponsors/daytona.svg';
	import railwayLogo from '$lib/svg/sponsors/railway.svg';
	import greptileLogo from '$lib/svg/sponsors/greptile-logo.svg';

	const sponsors = [
		{
			name: 'Agentuity',
			logo: agentuityLogo,
			description: 'The full-stack cloud platform for building, deploying, and scaling AI agents.',
			url: 'https://davis7.link/agentuity',
			hasWordmark: true
		},
		{
			name: 'Daytona',
			logo: daytonaLogo,
			description:
				'Secure, elastic infrastructure for running AI-generated code in isolated sandboxes.',
			url: 'https://davis7.link/daytona',
			hasWordmark: true
		},
		{
			name: 'Railway',
			logo: railwayLogo,
			description: 'The cloud platform that makes deploying and scaling applications effortless.',
			url: 'https://davis7.link/railway',
			hasWordmark: false
		},
		{
			name: 'Greptile',
			logo: greptileLogo,
			description:
				'AI code review that understands your entire codebase and catches bugs in every PR.',
			url: 'https://davis7.link/greptile',
			hasWordmark: false
		}
	];
</script>

<svelte:head>
	<title>Sponsors - Ben Davis</title>
	<meta
		name="description"
		content="Companies that sponsor Ben Davis and support his work in development and content creation."
	/>
</svelte:head>

<main class="z-10 px-3 text-center">
	<div class="pb-16 text-left">
		<a
			href="/"
			class="mb-8 inline-block text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-300"
			>← Back to Home</a
		>

		<h1 class="mb-2 text-4xl font-bold tracking-tight text-neutral-100">Sponsors</h1>
		<p class="mb-10 text-neutral-400">
			These are the companies that support my work. I only partner with products I genuinely believe
			in.
		</p>

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			{#each sponsors as sponsor}
				<a
					href={sponsor.url}
					target="_blank"
					rel="noopener noreferrer"
					class="group flex flex-col items-center rounded-xl border border-neutral-800 p-6 transition-all hover:border-neutral-700 hover:bg-neutral-900/50"
				>
					<div class="mb-4 flex h-16 items-center justify-center">
						{#if sponsor.hasWordmark}
							<img src={sponsor.logo} alt="{sponsor.name} logo" class="h-8 w-auto" />
						{:else}
							<img src={sponsor.logo} alt="{sponsor.name} logo" class="h-12 w-12" />
						{/if}
					</div>
					{#if !sponsor.hasWordmark}
						<h2 class="mb-2 text-lg font-semibold text-neutral-100">{sponsor.name}</h2>
					{:else}
						<div class="mb-2"></div>
					{/if}
					<p class="text-center text-sm text-neutral-400">{sponsor.description}</p>
				</a>
			{/each}
		</div>
	</div>
	<SocialLinks />
</main>
