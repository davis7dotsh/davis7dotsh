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
			<img
				src="/brand/bendavis-white-brandmark.svg"
				alt=""
				width="2000"
				height="1112"
				class="brandmark brandmark-white"
			/>
			<img
				src="/brand/bendavis-black-brandmark.svg"
				alt=""
				width="2000"
				height="1112"
				class="brandmark brandmark-black"
			/>
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

			<a
				href="https://models.davis7.sh"
				target="_blank"
				rel="noopener noreferrer"
				class="resource-card"
			>
				<span class="resource-title font-medium">Faster Models.dev</span>
				<span class="resource-subtitle mt-1 block text-sm"
					>My version of the models.dev site. Way faster, with the filters I want.</span
				>
			</a>

			<a
				href="https://github.com/davis7dotsh/grep-bench"
				target="_blank"
				rel="noopener noreferrer"
				class="resource-card"
			>
				<span class="resource-title font-medium">Grep Bench</span>
				<span class="resource-subtitle mt-1 block text-sm"
					>Benchmark for how well different models search codebases.</span
				>
			</a>
		</div>
	</div>
	<SocialLinks />
</main>

<style>
	.brandmark {
		width: 4rem;
		height: auto;
	}

	.brandmark-black {
		display: none;
	}

	:global(html[data-theme='light']) .brandmark-white {
		display: none;
	}

	:global(html[data-theme='light']) .brandmark-black {
		display: block;
	}
</style>
