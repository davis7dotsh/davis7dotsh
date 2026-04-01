<script lang="ts">
	import SocialLinks from '$lib/components/SocialLinks.svelte';
</script>

<svelte:head>
	<title>Ben Davis</title>
	<meta name="description" content="developer, youtuber, and theo's manager. based in sf" />
</svelte:head>

<main class="z-10 px-3 text-center">
	<div class="pb-16 text-left">
		<div class="mb-8 flex justify-center">
			<svg
				viewBox="0 0 700 443"
				width="96"
				height="61"
				aria-hidden="true"
				class="w-24 text-neutral-50"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill="currentColor"
					d="M338.628 442.235H275.451V252.705H252.706V252.706H136.462V252.755C102.741 254.081 75.8108 281.837 75.8105 315.883C75.8108 349.928 102.742 377.683 136.462 379.009V379.059H252.706V442.235H121.299V442.135C53.8593 439.482 8.8513e-05 383.972 0 315.882C0.000140851 247.792 53.8593 192.282 121.299 189.629V189.529H219.857V189.528H275.451V0H338.628V442.235ZM424.548 379.059H563.538V379.009C597.258 377.682 624.187 349.927 624.188 315.882C624.187 281.837 597.258 254.081 563.538 252.755V252.706H447.294V189.528H578.701V189.628C646.14 192.281 700 247.791 700 315.881C700 383.971 646.141 439.481 578.701 442.134V442.234H505.414V442.235H361.371V0H424.548V379.059Z"
				/>
			</svg>
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
				class="block rounded-lg border border-neutral-800 bg-neutral-900 p-4 transition-all hover:border-neutral-700 hover:bg-neutral-800/80"
			>
				<span class="font-medium text-neutral-100">Sponsors</span>
				<span class="mt-1 block text-sm text-neutral-400"
					>The companies backing my work, with links, logos, and a quick rundown on each one.</span
				>
			</a>

			<a
				href="https://ai.davis7.sh/"
				target="_blank"
				class="block rounded-lg border border-neutral-800 bg-neutral-900 p-4 transition-all hover:border-neutral-700 hover:bg-neutral-800/80"
			>
				<span class="font-medium text-neutral-100">My "State of AI"</span>
				<span class="mt-1 block text-sm text-neutral-400"
					>Rankings + descriptions of the models, harnesses, and subs I'm currently using.
					Periodically updated</span
				>
			</a>

			<a
				href="/macos"
				class="block rounded-lg border border-neutral-800 bg-neutral-900 p-4 transition-all hover:border-neutral-700 hover:bg-neutral-800/80"
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
				class="block rounded-lg border border-neutral-800 bg-neutral-900 p-4 transition-all hover:border-neutral-700 hover:bg-neutral-800/80"
			>
				<span class="font-medium text-neutral-100">Karabiner Config</span>
				<span class="mt-1 block text-sm text-neutral-400"
					>My complete karabiner elements config and a visualizer for all my keybindings.</span
				>
			</a>

			<a
				href="https://btca.dev"
				target="_blank"
				class="block rounded-lg border border-neutral-800 bg-neutral-900 p-4 transition-all hover:border-neutral-700 hover:bg-neutral-800/80"
			>
				<span class="font-medium text-neutral-100">btca (The Better Context App)</span>
				<span class="mt-1 block text-sm text-neutral-400"
					>The best way to get up to date context on the tech you're building with.</span
				>
			</a>

			<a
				href="https://svg.davis7.sh"
				target="_blank"
				class="block rounded-lg border border-neutral-800 bg-neutral-900 p-4 transition-all hover:border-neutral-700 hover:bg-neutral-800/80"
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
