<script lang="ts">
	import { tr, localizePath } from '$lib/i18n';
	import RichText from '$lib/components/RichText.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import CodeSnippet from '$lib/components/CodeSnippet.svelte';

	const ghosttyContent = `---
description: Help make changes to my terminal emulator
agent: build
---

Run "ghostty +show-config --default --docs" to see the full guide on how to configure my terminal emulator Ghostty. In this session I want you to help me get it configured. When I tell you to make a change, reference the docs on how to do it, and then write the changes to: "~/Library/Application Support/com.mitchellh.ghostty/config"`;

	const cursorContent = `---
description: Help fine tune my Cursor keybindings
agent: build
---

My Cursor (VSCode) keybindings are located at: "~/Library/Application Support/Cursor/User/keybindings.json". In this session your job is to help me fine tune them.`;

	const tmuxContent = `---
description: Help fine tune tmux config
agent: build
---

My tmux config is located at: ~/.tmux.conf Your job is to make the changes I describe to that config file. Every time you make a change, make sure to end by giving me the command I need to restart my current tmux instance and use the changes immediately`;
</script>

<svelte:head>
	<title>{tr('Ben Davis - macOS Power User Setup')}</title>
	<meta
		name="description"
		content={tr(
			'My complete macOS setup for power user productivity with Karabiner, Raycast, Rectangle, and custom configs'
		)}
	/>
</svelte:head>

<main class="z-10 px-3 text-center">
	<article class="content-sheet prose mb-8 pb-16 text-left">
		<a href={localizePath('/')} class="back-link mb-8">{tr('← Back')}</a>

		<h1 class="mb-8">{tr('macOS Power User Setup')}</h1>

		<p>
			{tr(
				"I've set up my Mac so that it is as fast to navigate through and work on as Linux. The main things I did this with are:"
			)}
		</p>

		<ul>
			<li>
				<a href="https://karabiner-elements.pqrs.org/" target="_blank" rel="noopener noreferrer"
					>{tr('Karabiner Elements')}</a
				>
				{tr('(breakdown')} <a href={localizePath('/karabiner')}>{tr('here')}</a>)
			</li>
			<li>
				<a href="https://www.raycast.com/" target="_blank" rel="noopener noreferrer"
					>{tr('Raycast')}</a
				>
			</li>
			<li>
				<a href="https://rectangleapp.com/" target="_blank" rel="noopener noreferrer"
					>{tr('Rectangle')}</a
				>
			</li>
		</ul>

		<p>
			<RichText
				message={'Starting with the simplest one, Rectangle is just my window manager. I really only ever use the binding <s0>left_option + left_control + enter</s0> for full-screening and centering a window.'}
				elements={[{ tag: 'code', attributes: {} }]}
			/>
		</p>

		<p>
			<RichText
				message={'<s0>The key to all of this is never ever use the desktops or built in full screen of macOS. This will massively slow down your jumping between apps, just fullscreen them and jump around with <s1>cmd + tab</s1> and the Raycast opening shortcuts.</s0>'}
				elements={[
					{ tag: 'strong', attributes: {} },
					{ tag: 'code', attributes: {} }
				]}
			/>
		</p>

		<p>
			<RichText
				message={'The next key piece is Karabiner Elements. I use this to make a <s0>hyper key</s0> on caps lock. I have it bound so that if you tap it, it presses escape, and if you press it with something else it acts as <s1>control + option + shift + command</s1>. This is insanely powerful for navigation and work, especially when combined with Raycast.'}
				elements={[
					{ tag: 'strong', attributes: {} },
					{ tag: 'code', attributes: {} }
				]}
			/>
		</p>

		<p>
			<RichText
				message={'I have Raycast bound to <s0>hyper + space</s0> (which is really <s1>caps lock + space</s1>). Then in Raycast if you search extensions, then search for an application, then you can set a keybinding for it. Mine are all hyper + something. You can see them all <s2>here</s2>.'}
				elements={[
					{ tag: 'code', attributes: {} },
					{ tag: 'code', attributes: {} },
					{ tag: 'a', attributes: { href: '/karabiner' } }
				]}
			/>
		</p>

		<h2>{tr('Super Easy Configs')}</h2>

		<p>
			{tr(
				"When I setup my Mac I did a ton of custom stuff for tmux, Ghostty, and Cursor. I never read any of the configs for any of them, I just ended up making little commands for OpenCode, then had an AI write them for me. They're not complex, but if you want mine for a reference:"
			)}
		</p>

		<h3>{tr('Ghostty')}</h3>
		<p>
			<RichText
				message={'<s0>~/.opencode/command/ghostty.md</s0>'}
				elements={[{ tag: 'code', attributes: {} }]}
			/>
		</p>
		<CodeSnippet content={ghosttyContent} label="macOS Ghostty config" />

		<h3>{tr('Cursor')}</h3>
		<p>
			<RichText
				message={'<s0>~/.opencode/command/cursor.md</s0>'}
				elements={[{ tag: 'code', attributes: {} }]}
			/>
		</p>
		<CodeSnippet content={cursorContent} label="macOS Cursor keybindings" />

		<h3>{tr('tmux')}</h3>
		<p>
			<RichText
				message={'<s0>~/.opencode/command/tmux.md</s0>'}
				elements={[{ tag: 'code', attributes: {} }]}
			/>
		</p>
		<CodeSnippet content={tmuxContent} label="macOS tmux config" />

		<p>
			<RichText
				message={'Just drop these in and then start OpenCode in the root directory and you can do <s0>/tmux</s0> to customize your tmux config without having to deal with figuring out yet another config setup.'}
				elements={[{ tag: 'code', attributes: {} }]}
			/>
		</p>
	</article>
	<SocialLinks />
</main>
