<script lang="ts">
	import { Copy, Check } from 'lucide-svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';

	const ghosttyContent = `---
description: Help make changes to my terminal emulator
agent: build
---

Run "ghostty +show-config --default --docs" to see the full guide on how to configure my terminal emulator ghostty. In this session I want you to help me get it configured. When I tell you to make a change, reference the docs on how to do it, and then write the changes to: "~/Library/Application Support/com.mitchellh.ghostty/config"`;

	const cursorContent = `---
description: Help fine tune my cursor keybindings
agent: build
---

My cursor (vscode) keybindings are located at: "~/Library/Application Support/Cursor/User/keybindings.json". In this session your job is to help me fine tune them.`;

	const tmuxContent = `---
description: Help fine tune tmux config
agent: build
---

My tmux config is located at: ~/.tmux.conf Your job is to make the changes I describe to that config file. Every time you make a change, make sure to end by giving me the command I need to restart my current tmux instance and use the changes immediately`;

	let copiedId = $state<string | null>(null);

	const copyToClipboard = async (content: string, id: string) => {
		try {
			await navigator.clipboard.writeText(content);
			copiedId = id;
			setTimeout(() => {
				copiedId = null;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy text: ', err);
		}
	};
</script>

<svelte:head>
	<title>Ben Davis - MacOS Power User Setup</title>
	<meta
		name="description"
		content="My complete MacOS setup for power user productivity with Karabiner, Raycast, Rectangle, and custom configs"
	/>
</svelte:head>

<main class="z-10 px-3 text-center">
	<article class="content-sheet prose prose-neutral mb-8 pb-16 text-left">
		<a href="/" class="back-link mb-8">← Back to Home</a>

		<h1 class="mb-8">MacOS Power User Setup</h1>

		<p>
			I've setup my mac so that it is as fast to navigate through and work on as Linux. The main
			things I did this with are:
		</p>

		<ul>
			<li>
				<a href="https://karabiner-elements.pqrs.org/" target="_blank">karabiner elements</a>
				(breakdown <a href="/karabiner">here</a>)
			</li>
			<li>
				<a href="https://www.raycast.com/" target="_blank">raycast</a>
			</li>
			<li>
				<a href="https://rectangleapp.com/" target="_blank">rectangle</a>
			</li>
		</ul>

		<p>
			Starting with the simplest one, rectangle is just my window manager. I really only ever use
			the binding
			<code>left_option + left_control + enter</code> for full-screening and centering a window.
		</p>

		<p>
			<strong
				>The key to all of this is never ever use the desktops or built in full screen of macos.
				This will massively slow down your jumping between apps, just fullscreen them and jump
				around with <code>cmd + tab</code> and the raycast opening shortcuts.</strong
			>
		</p>

		<p>
			The next key piece is karabiner elements. I use this to make a <strong>hyper key</strong> on
			caps lock. I have it bound so that if you tap it, it presses escape, and if you press it with
			something else it acts as <code>control + option + shift + command</code>. This is insanely
			powerful for navigation and work, especially when combined with raycast.
		</p>

		<p>
			I have raycast bound to <code>hyper + space</code> (which is really
			<code>caps lock + space</code>). Then in raycast if you search extensions, then search for an
			application, then you can set a keybinding for it. Mine are all hyper + something. You can see
			them all <a href="/karabiner">here</a>.
		</p>

		<h2>Super Easy Configs</h2>

		<p>
			When I setup my mac I did a ton of custom stuff for tmux, ghostty, and cursor. I never read
			any of the configs for any of them, I just ended up making little commands for opencode, then
			had an AI write them for me. They're not complex, but if you want mine for a reference:
		</p>

		<h3>ghostty</h3>
		<p><code>~/.opencode/command/ghostty.md</code></p>

		<div class="relative">
			<button
				class="button absolute top-2 right-2 px-2 py-1 text-xs"
				onclick={() => copyToClipboard(ghosttyContent, 'ghostty')}
			>
				{#if copiedId === 'ghostty'}
					<Check size={12} class="success-text" />
					Copied!
				{:else}
					<Copy size={12} />
					Copy
				{/if}
			</button>
			<pre><code
					>---
description: Help make changes to my terminal emulator
agent: build
---

Run "ghostty +show-config --default --docs" to see the full guide on how to configure my terminal emulator ghostty. In this session I want you to help me get it configured. When I tell you to make a change, reference the docs on how to do it, and then write the changes to: "~/Library/Application Support/com.mitchellh.ghostty/config"</code
				></pre>
		</div>

		<h3>cursor</h3>
		<p><code>~/.opencode/command/cursor.md</code></p>

		<div class="relative">
			<button
				class="button absolute top-2 right-2 px-2 py-1 text-xs"
				onclick={() => copyToClipboard(cursorContent, 'cursor')}
			>
				{#if copiedId === 'cursor'}
					<Check size={12} class="success-text" />
					Copied!
				{:else}
					<Copy size={12} />
					Copy
				{/if}
			</button>
			<pre><code
					>---
description: Help fine tune my cursor keybindings
agent: build
---

My cursor (vscode) keybindings are located at: "~/Library/Application Support/Cursor/User/keybindings.json". In this session your job is to help me fine tune them.</code
				></pre>
		</div>

		<h3>tmux</h3>
		<p><code>~/.opencode/command/tmux.md</code></p>

		<div class="relative">
			<button
				class="button absolute top-2 right-2 px-2 py-1 text-xs"
				onclick={() => copyToClipboard(tmuxContent, 'tmux')}
			>
				{#if copiedId === 'tmux'}
					<Check size={12} class="success-text" />
					Copied!
				{:else}
					<Copy size={12} />
					Copy
				{/if}
			</button>
			<pre><code
					>---
description: Help fine tune tmux config
agent: build
---

My tmux config is located at: ~/.tmux.conf Your job is to make the changes I describe to that config file. Every time you make a change, make sure to end by giving me the command I need to restart my current tmux instance and use the changes immediately</code
				></pre>
		</div>

		<p>
			Just drop these in and then start opencode in the root directory and you can do <code
				>/tmux</code
			> to customize your tmux config without having to deal with figuring out yet another config setup.
		</p>
	</article>
	<SocialLinks />
</main>
