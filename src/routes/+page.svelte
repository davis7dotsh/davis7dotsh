<script lang="ts">
	import PrimarySocialLinks from '$lib/components/PrimarySocialLinks.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
</script>

<svelte:head>
	<title>Ben Davis</title>
	<meta name="description" content="Developer, YouTuber, and Theo's manager. Based in SF" />
</svelte:head>

<main class="z-10 mx-auto max-w-3xl px-3 text-center">
	<div class="pb-16 text-left">
		<div class="mb-10 flex justify-start">
			<svg
				viewBox="0 0 700 443"
				width="64"
				height="41"
				aria-hidden="true"
				class="w-16"
				style="color: var(--color-text)"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill="currentColor"
					d="M338.628 442.235H275.451V252.705H252.706V252.706H136.462V252.755C102.741 254.081 75.8108 281.837 75.8105 315.883C75.8108 349.928 102.742 377.683 136.462 379.009V379.059H252.706V442.235H121.299V442.135C53.8593 439.482 8.8513e-05 383.972 0 315.882C0.000140851 247.792 53.8593 192.282 121.299 189.629V189.529H219.857V189.528H275.451V0H338.628V442.235ZM424.548 379.059H563.538V379.009C597.258 377.682 624.187 349.927 624.188 315.882C624.187 281.837 597.258 254.081 563.538 252.755V252.706H447.294V189.528H578.701V189.628C646.14 192.281 700 247.791 700 315.881C700 383.971 646.141 439.481 578.701 442.134V442.234H505.414V442.235H361.371V0H424.548V379.059Z"
				/>
			</svg>
		</div>
		<h1 class="headline-text mb-0 pb-0 text-4xl font-semibold tracking-tight">Ben Davis</h1>
		<PrimarySocialLinks />

		<div class="home-link-list space-y-1">
			<a href="/sponsors" class="resource-card">
				<span class="resource-title font-medium">Sponsors</span>
				<span class="resource-subtitle mt-1 block text-sm">The companies backing my work.</span>
			</a>

			<a href="/ai" class="resource-card">
				<span class="resource-title font-medium">My "State of AI"</span>
				<span class="resource-subtitle mt-1 block text-sm"
					>Rankings and notes on the models, harnesses, and subscriptions I'm using.</span
				>
			</a>

			<a href="/macos" class="resource-card">
				<span class="resource-title font-medium">My macOS Setup</span>
				<span class="resource-subtitle mt-1 block text-sm"
					>Tools, shortcuts, and configs from my Mac setup.</span
				>
			</a>

			<a href="/home-server" class="resource-card">
				<span class="resource-title font-medium">My Home Server</span>
				<span class="resource-subtitle mt-1 block text-sm"
					>The hardware, links, and cost breakdown for my home server setup.</span
				>
			</a>

			<a href="/karabiner" class="resource-card">
				<span class="resource-title font-medium">Karabiner Config</span>
				<span class="resource-subtitle mt-1 block text-sm"
					>My complete config and a visualizer for every keybinding.</span
				>
			</a>

			<a
				href="https://github.com/davis7dotsh/my-pi-setup"
				target="_blank"
				rel="noopener noreferrer"
				class="resource-card"
			>
				<span class="resource-title font-medium">My Pi Setup</span>
				<span class="resource-subtitle mt-1 block text-sm"
					>Extensions, theme, and config for my coding agent.</span
				>
			</a>

			<a href="/font" class="resource-card">
				<span class="resource-title font-medium">My Font</span>
				<span class="resource-subtitle mt-1 block text-sm"
					>The font I use in Cursor and the terminal.</span
				>
			</a>

			<a href="https://btca.dev" target="_blank" rel="noopener noreferrer" class="resource-card">
				<span class="resource-title font-medium">BTCA (The Better Context App)</span>
				<span class="resource-subtitle mt-1 block text-sm"
					>Up-to-date context for the tech you're building with.</span
				>
			</a>

			<a
				href="https://svg.davis7.sh"
				target="_blank"
				rel="noopener noreferrer"
				class="resource-card"
			>
				<span class="resource-title font-medium">Quick SVG Background</span>
				<span class="resource-subtitle mt-1 block text-sm"
					>Upload an SVG, add a background, export it.</span
				>
			</a>
		</div>
	</div>
	<SocialLinks />
</main>
