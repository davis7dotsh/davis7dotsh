<script lang="ts">
	let keyTitle = $state('Hover a key');
	let keyDescription = $state('Hover one of the keys to see the keybinding');
	let hoveredKey = $state.raw<{ label: string } | null>(null);
	let lastTimeout: number | null = null;

	// Simple keyboard layout: each row is an array of keys
	const layout = $state([
		[
			{ label: 'Esc', width: 50 },
			{ label: 'F1', width: 40 },
			{ label: 'F2', width: 40 },
			{ label: 'F3', width: 40 },
			{ label: 'F4', width: 40 },
			{ label: 'F5', width: 40 },
			{ label: 'F6', width: 40 },
			{ label: 'F7', width: 40 },
			{ label: 'F8', width: 40 },
			{ label: 'F9', width: 40 },
			{ label: 'F10', width: 40 },
			{ label: 'F11', width: 40 },
			{ label: 'F12', width: 40 },
			{ label: 'Del', width: 50 }
		],
		[
			{ label: '`', width: 40 },
			{
				label: '1',
				width: 40,
				title: 'Helium',
				description: 'Hyper + 1 opens Helium (using raycast)'
			},
			{
				label: '2',
				width: 40,
				title: 'Ghosty',
				description: 'Hyper + 2 opens Ghosty (using raycast)'
			},
			{
				label: '3',
				width: 40,
				title: 'Cursor',
				description: 'Hyper + 3 opens Cursor (using raycast)'
			},
			{
				label: '4',
				width: 40,
				title: 'Discord',
				description: 'Hyper + 4 opens Discord (using raycast)'
			},
			{ label: '5', width: 40 },
			{ label: '6', width: 40 },
			{
				label: '7',
				width: 40,
				title: 'Final Cut Pro',
				description: 'Hyper + 7 opens Final Cut Pro (using raycast)'
			},
			{
				label: '8',
				width: 40,
				title: 'Affinity Photo',
				description: 'Hyper + 8 opens Affinity Photo (using raycast)'
			},
			{
				label: '9',
				width: 40,
				title: 'Todoist',
				description: 'Hyper + 9 opens Todoist (using raycast)'
			},
			{
				label: '0',
				width: 40,
				title: 'Obsidian',
				description: 'Hyper + 0 opens Obsidian (using raycast)'
			},
			{ label: '-', width: 40 },
			{ label: '=', width: 40 },
			{ label: 'Backspace', width: 80 }
		],
		[
			{ label: 'Tab', width: 60, title: 'control + tab', description: 'Presses control + tab' },
			{ label: 'Q', width: 40 },
			{ label: 'W', width: 40, title: 'CMD + W', description: 'Presses cmd + w' },
			{ label: 'E', width: 40 },
			{ label: 'R', width: 40 },
			{ label: 'T', width: 40, title: 'CMD + T', description: 'Presses cmd + t' },
			{ label: 'Y', width: 40, title: 'CMD + Y', description: 'Presses cmd + y' },
			{ label: 'U', width: 40 },
			{ label: 'I', width: 40 },
			{ label: 'O', width: 40 },
			{ label: 'P', width: 40 },
			{ label: '[', width: 40 },
			{ label: ']', width: 40 },
			{ label: '\\', width: 60 }
		],
		[
			{ label: 'Caps', width: 70 },
			{ label: 'A', width: 40, title: 'CMD + A', description: 'Presses cmd + a' },
			{ label: 'S', width: 40 },
			{ label: 'D', width: 40 },
			{ label: 'F', width: 40 },
			{ label: 'G', width: 40 },
			{ label: 'H', width: 40, title: 'Left arrow', description: 'Presses left arrow' },
			{ label: 'J', width: 40, title: 'Page down', description: 'Presses page down' },
			{ label: 'K', width: 40, title: 'Page up', description: 'Presses page up' },
			{ label: 'L', width: 40, title: 'Right arrow', description: 'Presses right arrow' },
			{ label: ';', width: 40 },
			{ label: "'", width: 40 },
			{ label: 'Enter', width: 90 }
		],
		[
			{ label: 'Shift', width: 90 },
			{ label: 'Z', width: 40 },
			{ label: 'X', width: 40 },
			{ label: 'C', width: 40, title: 'CMD + C', description: 'Presses cmd + c' },
			{ label: 'V', width: 40, title: 'CMD + V', description: 'Presses cmd + v' },
			{ label: 'B', width: 40, title: 'Zen', description: 'Hyper + B opens Zen (using raycast)' },
			{
				label: 'N',
				width: 40,
				title: 'Notion',
				description: 'Hyper + N opens Notion (using raycast)'
			},
			{
				label: 'M',
				width: 40,
				title: 'Superhuman',
				description: 'Hyper + M opens Superhuman (using raycast)'
			},
			{ label: ',', width: 40 },
			{ label: '.', width: 40 },
			{ label: '/', width: 40 },
			{ label: 'Shift', width: 90 }
		],
		[
			{ label: 'fn', width: 60 },
			{ label: 'ctrl', width: 60 },
			{ label: 'opt', width: 60 },
			{ label: 'cmd', width: 60 },
			{ label: '', width: 260, title: 'Space', description: 'Hyper + Space opens Raycast' }, // Spacebar
			{ label: 'cmd', width: 60 },
			{ label: 'opt', width: 60 }
		]
	]);

	const keyHeight = 40;
	const rowSpacing = 10;
	const keySpacing = 8;
	const svgWidth = 800;
	const svgHeight = layout.length * (keyHeight + rowSpacing) + rowSpacing;
	const rowOffsets = [10, 10, 30, 40, 50, 10];

	// Pre-calculate positions
	const keys = $derived(
		layout.flatMap((row, rowIndex) => {
			let x = rowOffsets[rowIndex];
			const y = rowSpacing + rowIndex * (keyHeight + rowSpacing);
			return row.map((key) => {
				const k = { ...key, x, y };
				x += key.width + keySpacing;
				return k;
			});
		})
	);

	function handleMouseEnter(key: (typeof keys)[0]) {
		if (key.label === 'Caps') return;
		hoveredKey = key;
		if (lastTimeout) clearTimeout(lastTimeout);
		keyTitle = key.title || 'Hover a key';
		keyDescription = key.description || 'Hover one of the keys to see the keybinding';
	}

	function handleMouseLeave() {
		hoveredKey = null;
		if (lastTimeout) clearTimeout(lastTimeout);
		lastTimeout = window.setTimeout(() => {
			keyTitle = 'Hover a key';
			keyDescription = 'Hover one of the keys to see the keybinding';
		}, 150);
	}

	$effect(() => {
		return () => {
			if (lastTimeout) clearTimeout(lastTimeout);
		};
	});
</script>

<section
	class="flex w-full items-center gap-6 rounded-lg border border-neutral-800/70 bg-neutral-900/55 p-6 backdrop-blur-sm"
>
	<div class="shrink-0">
		<div
			class="flex h-16 w-16 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-orange-600"
		>
			<svg class="h-8 w-8 text-neutral-50" fill="currentColor" viewBox="0 0 24 24">
				<path
					d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"
				/>
			</svg>
		</div>
	</div>
	<div class="flex-1">
		<h2 class="mb-2 text-2xl font-bold text-neutral-50">{keyTitle}</h2>
		<p class="text-neutral-200/75">{keyDescription}</p>
	</div>
</section>

<div class="w-full overflow-x-auto rounded-lg p-4">
	<svg viewBox="0 0 {svgWidth} {svgHeight}" class="h-auto w-full">
		{#each keys as key}
			{@const isCapsLock = key.label === 'Caps'}
			{@const hasKeybinding = key.title && key.description}
			{@const isHovered = hoveredKey === key}

			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<g
				style:cursor={isCapsLock ? 'default' : 'pointer'}
				onmouseenter={() => handleMouseEnter(key)}
				onmouseleave={handleMouseLeave}
			>
				<rect
					x={key.x}
					y={key.y}
					width={key.width}
					height={keyHeight}
					rx={6}
					class={isCapsLock
						? 'fill-orange-500/80 stroke-orange-400 stroke-2 drop-shadow-[0_0_10px_rgba(251,146,60,0.8)] filter'
						: isHovered
							? 'fill-blue-600/80 stroke-blue-400 stroke-2 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] filter'
							: hasKeybinding
								? 'fill-blue-400/40 stroke-blue-300/50 stroke-1 drop-shadow-sm backdrop-blur-sm'
								: 'fill-neutral-50/20 stroke-neutral-50/30 stroke-1 drop-shadow-sm backdrop-blur-sm'}
				/>
				<text
					x={key.x + key.width / 2}
					y={key.y + keyHeight / 2}
					text-anchor="middle"
					dominant-baseline="central"
					class={isCapsLock
						? 'fill-neutral-50 text-sm font-medium drop-shadow-sm select-none'
						: 'fill-neutral-50 text-sm font-medium select-none'}
				>
					{key.label}
				</text>
			</g>
		{/each}
	</svg>
</div>
