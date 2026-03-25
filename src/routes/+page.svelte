<script lang="ts">
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import logo from '$lib/svg/my-logo.svg';
</script>

<svelte:head>
	<title>Ben Davis</title>
	<meta name="description" content="developer, youtuber, and theo's manager. based in sf" />
</svelte:head>

<main class="z-10 px-3 text-center">
	<div class="pb-16 text-left">
		<div class="mb-8 flex justify-center">
			<img src={logo} alt="Ben Davis Logo" class="w-24" />
		</div>
		<h1 class="mb-0 pb-0 text-4xl font-bold tracking-tight text-neutral-100">Ben Davis</h1>
		<p class="mx-0 mt-2 mb-8 text-neutral-300">
			<a
				href="https://github.com/bmdavis419"
				target="_blank"
				class="text-neutral-100 underline decoration-neutral-700 underline-offset-2 transition-colors hover:decoration-neutral-400"
				>developer</a
			>,
			<a
				href="https://www.youtube.com/@bmdavis419"
				target="_blank"
				class="text-neutral-100 underline decoration-neutral-700 underline-offset-2 transition-colors hover:decoration-neutral-400"
				>youtuber</a
			>, and
			<a
				href="https://www.youtube.com/@t3dotgg/videos"
				target="_blank"
				class="text-neutral-100 underline decoration-neutral-700 underline-offset-2 transition-colors hover:decoration-neutral-400"
				>theo's manager</a
			>. based in sf.
		</p>

		<h3 class="mb-4 text-lg font-medium text-neutral-200">You might be looking for:</h3>

		<div class="space-y-3">
			<a
				href="/sponsors"
				class="block rounded-lg border border-neutral-800 p-4 transition-all hover:border-neutral-700 hover:bg-neutral-900/50"
			>
				<span class="font-medium text-neutral-100">Sponsors</span>
				<span class="mt-1 block text-sm text-neutral-400"
					>The companies backing my work, with links, logos, and a quick rundown on each one.</span
				>
			</a>

			<a
				href="https://ai.davis7.sh/"
				target="_blank"
				class="block rounded-lg border border-neutral-800 p-4 transition-all hover:border-neutral-700 hover:bg-neutral-900/50"
			>
				<span class="font-medium text-neutral-100">My "State of AI"</span>
				<span class="mt-1 block text-sm text-neutral-400"
					>Rankings + descriptions of the models, harnesses, and subs I'm currently using.
					Periodically updated</span
				>
			</a>

			<a
				href="/macos"
				class="block rounded-lg border border-neutral-800 p-4 transition-all hover:border-neutral-700 hover:bg-neutral-900/50"
			>
				<span class="font-medium text-neutral-100">My MacOS Setup</span>
				<span class="mt-1 block text-sm text-neutral-400"
					>A collection of resources on how I setup my mac to be a power user's dream. Includes
					karabiner config, keyboard shortcuts, tools I used to make my configs, all the programs I
					use, and more.</span
				>
			</a>

			<a
				href="/karabiner"
				class="block rounded-lg border border-neutral-800 p-4 transition-all hover:border-neutral-700 hover:bg-neutral-900/50"
			>
				<span class="font-medium text-neutral-100">Karabiner Config</span>
				<span class="mt-1 block text-sm text-neutral-400"
					>My complete karabiner elements config and a visualizer for all my keybindings.</span
				>
			</a>

			<a
				href="https://btca.dev"
				target="_blank"
				class="block rounded-lg border border-neutral-800 p-4 transition-all hover:border-neutral-700 hover:bg-neutral-900/50"
			>
				<span class="font-medium text-neutral-100">btca (The Better Context App)</span>
				<span class="mt-1 block text-sm text-neutral-400"
					>The best way to get up to date context on the tech you're building with.</span
				>
			</a>

			<a
				href="https://svg.davis7.sh"
				target="_blank"
				class="block rounded-lg border border-neutral-800 p-4 transition-all hover:border-neutral-700 hover:bg-neutral-900/50"
			>
				<span class="font-medium text-neutral-100">Quick SVG Background</span>
				<span class="mt-1 block text-sm text-neutral-400"
					>A really simple webapp for uploading an SVG and adding a background to it. I know it
					sounds dumb, but I use it all the time for making thumbnails.</span
				>
			</a>
		</div>
	</div>
	<SocialLinks />
</main>
