<script lang="ts">
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import logo from '$lib/svg/my-logo.svg';
</script>

<svelte:head>
	<title>Ben Davis - dev & youtuber</title>
	<meta name="description" content="developer, youtuber, and theo's manager. based in sf" />
</svelte:head>

<main class="z-10 px-3 text-center">
	<article class="prose prose-neutral prose-invert pb-16 text-left">
		<div class="mb-8 flex justify-center">
			<img src={logo} alt="Ben Davis Logo" class="w-24" />
		</div>
		<h1 class="mb-0 pb-0">Ben Davis</h1>
		<p class="mx-0 my-1">
			<a href="https://github.com/bmdavis419" target="_blank">developer</a>,
			<a href="https://www.youtube.com/@bmdavis419" target="_blank">youtuber</a>, and
			<a href="https://www.youtube.com/@t3dotgg/videos" target="_blank">theo's manager</a>. based in
			sf.
		</p>

		<h3>You might be looking for:</h3>

		<p>
			<a href="/macos">My MacOS Setup</a> a collection of resources on how I setup my mac to be a power
			user's dream. Includes karabiner config, keyboard shortcuts, tools I used to make my configs, all
			the programs I use, and more.
		</p>

		<p>
			<a href="/karabiner">Karabiner Config</a> my complete karabiner elements config and a visualizer
			for all my keybindings.
		</p>

		<p>
			<a href="/sv">SvelteKit Setup</a> a bunch of prompts/cursor rules to get your SvelteKit project
			started.
		</p>

		<p>
			<a href="https://btca.dev" target="_blank">btca (The Better Context App)</a> the best way to get
			up to date context on the tech you're building with.
		</p>

		<p>
			<a href="https://github.com/bmdavis419/river" target="_blank">River</a> a trpc like experience
			for durable streams and ai agents.
		</p>

		<p>
			<a href="https://insiderviz.com" target="_blank">Insiderviz</a> an insider trading data visualization
			platform. I built this in college with the boys. Was a really cool project that is now pretty much
			abandoned.
		</p>

		<p>
			<a href="https://svg.davis7.sh" target="_blank">Quick SVG Background</a> A really simple webapp
			for uploading an SVG and adding a background to it. I know it sounds dumb, but I use it all the
			time for making thumbnails.
		</p>
	</article>
	<SocialLinks />
</main>
