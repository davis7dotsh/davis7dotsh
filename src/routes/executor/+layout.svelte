<script lang="ts">
	import { resolve } from '$app/paths';
	let { children } = $props();
</script>

<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<main class="mx-auto max-w-3xl px-3 py-8 sm:py-12">
	<a href={resolve('/executor')} aria-label="Executor on Nexus" class="mb-10 inline-block">
		<svg
			viewBox="0 0 700 443"
			width="64"
			height="41"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill="currentColor"
				d="M338.628 442.235H275.451V252.705H252.706V252.706H136.462V252.755C102.741 254.081 75.8108 281.837 75.8105 315.883C75.8108 349.928 102.742 377.683 136.462 379.009V379.059H252.706V442.235H121.299V442.135C53.8593 439.482 8.8513e-05 383.972 0 315.882C0.000140851 247.792 53.8593 192.282 121.299 189.629V189.529H219.857V189.528H275.451V0H338.628V442.235ZM424.548 379.059H563.538V379.009C597.258 377.682 624.187 349.927 624.188 315.882C624.187 281.837 597.258 254.081 563.538 252.755V252.706H447.294V189.528H578.701V189.628C646.14 192.281 700 247.791 700 315.881C700 383.971 646.141 439.481 578.701 442.134V442.234H505.414V442.235H361.371V0H424.548V379.059Z"
			/>
		</svg>
	</a>
	<article class="prose">
		{@render children()}
	</article>
	<nav aria-label="Executor information" class="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm">
		<a class="brand-link" href={resolve('/executor')}>Executor</a>
		<a class="brand-link" href={resolve('/executor/privacy')}>Privacy</a>
		<a class="brand-link" href={resolve('/executor/terms')}>Terms</a>
		<a class="brand-link" href="mailto:me@davis7.sh">Contact</a>
	</nav>
</main>
