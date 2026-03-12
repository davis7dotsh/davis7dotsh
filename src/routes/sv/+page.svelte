<script lang="ts">
	import { remoteGetPrompts } from '$lib/prompts.remote';

	let vercelSetup = $state(false);
	let cloudflareSetup = $state(false);
	let cursorRules = $state(false);
	let usefulPackages = $state(false);
	let asyncSvelte = $state(false);
	let helloWorld = $state(false);
	let convexSetup = $state(false);
	let vscodeThemeEnabled = $state(false);
	let topBarColor = $state('#1f2937');
	let topBarTextColor = $state('#ffffff');
	let tailwindThemeEnabled = $state(false);
	let primaryColor = $state('#f97316');

	let toastMessage = $state<string | null>(null);
	let toastType = $state<'success' | 'error'>('success');
	let isLoading = $state(false);
	let copySuccess = $state(false);

	function showToast(message: string, type: 'success' | 'error' = 'success') {
		toastMessage = message;
		toastType = type;
		setTimeout(() => {
			toastMessage = null;
		}, 3000);
	}

	async function copyPrompts() {
		isLoading = true;
		try {
			const prompts = await remoteGetPrompts({
				vercelSetup,
				cloudflareSetup,
				cursorRules,
				usefulPackages,
				convexSetup,
				asyncSvelte,
				helloWorld,
				vscodeTheme: vscodeThemeEnabled ? { topBarColor, topBarTextColor } : undefined,
				tailwindTheme: tailwindThemeEnabled ? { primaryColor } : undefined
			});

			await navigator.clipboard.writeText(prompts);
			copySuccess = true;
			setTimeout(() => {
				copySuccess = false;
			}, 2000);
			showToast('Prompts copied to clipboard!', 'success');
		} catch (error) {
			showToast(
				`Failed to copy prompts: ${error instanceof Error ? error.message : 'Unknown error'}`,
				'error'
			);
		} finally {
			isLoading = false;
		}
	}

	function toggleAll() {
		const allChecked =
			vercelSetup &&
			cursorRules &&
			usefulPackages &&
			asyncSvelte &&
			helloWorld &&
			vscodeThemeEnabled &&
			tailwindThemeEnabled &&
			convexSetup;
		vercelSetup = !allChecked;
		cloudflareSetup = false;
		cursorRules = !allChecked;
		usefulPackages = !allChecked;
		asyncSvelte = !allChecked;
		helloWorld = !allChecked;
		vscodeThemeEnabled = !allChecked;
		tailwindThemeEnabled = !allChecked;
		convexSetup = !allChecked;
	}

	function handleVercelChange(value: boolean) {
		vercelSetup = value;
		if (value) cloudflareSetup = false;
	}

	function handleCloudflareChange(value: boolean) {
		cloudflareSetup = value;
		if (value) vercelSetup = false;
	}
</script>

<svelte:head>
	<title>SvelteKit Setup</title>
	<meta name="description" content="An easy way to setup your SvelteKit project." />
</svelte:head>

<div class="w-full max-w-2xl space-y-8 px-3">
	<div class="space-y-4">
		<a
			href="/"
			class="mb-4 inline-block text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-300"
			>← Back to Home</a
		>
		<div class="flex items-center justify-between">
			<h1 class="text-4xl font-bold text-neutral-50">SvelteKit Setup</h1>
			<button
				onclick={toggleAll}
				class="rounded-lg border border-neutral-600 px-3 py-1 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-neutral-200"
			>
				Toggle All
			</button>
		</div>
		<p class="text-lg text-neutral-300">
			An easy way to setup your SvelteKit project. Select the options you want to enable and copy
			the prompts to your clipboard, then paste them into cursor.
		</p>
		<p class="text-lg text-neutral-300">
			This will not create a project for you, to do that run: <code
				class="rounded-md bg-neutral-800 px-2 py-1 font-mono text-sm text-neutral-200"
				>bunx sv create</code
			>. I recommend picking: minimal, typescript, prettier/tailwindcss, and then bun.
		</p>
	</div>

	<div class="space-y-8">
		<!-- Basic Prompts -->
		<div class="space-y-4">
			<h2 class="text-sm font-semibold tracking-wide text-neutral-400 uppercase">Setup Options</h2>
			<div class="space-y-1">
				<label
					class="flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors hover:bg-neutral-900/50"
				>
					<input
						type="checkbox"
						checked={vercelSetup}
						onchange={(e) => handleVercelChange(e.currentTarget.checked)}
						class="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-neutral-600 text-blue-500"
					/>
					<div>
						<span class="text-sm font-medium text-neutral-200">Vercel Setup</span>
						<p class="mt-0.5 text-xs text-neutral-400">
							Adds the vercel adapter and removes the default one
						</p>
					</div>
				</label>
				<label
					class="flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors hover:bg-neutral-900/50"
				>
					<input
						type="checkbox"
						checked={cloudflareSetup}
						onchange={(e) => handleCloudflareChange(e.currentTarget.checked)}
						class="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-neutral-600 text-blue-500"
					/>
					<div>
						<span class="text-sm font-medium text-neutral-200">Cloudflare Setup</span>
						<p class="mt-0.5 text-xs text-neutral-400">
							Adds the cloudflare adapter, sets up wrangler, and gives you the right commands to
							deploy to cloudflare
						</p>
					</div>
				</label>
				<label
					class="flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors hover:bg-neutral-900/50"
				>
					<input
						type="checkbox"
						bind:checked={convexSetup}
						class="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-neutral-600 text-blue-500"
					/>
					<div>
						<span class="text-sm font-medium text-neutral-200">Convex Setup</span>
						<p class="mt-0.5 text-xs text-neutral-400">
							Sets up convex in your sveltekit app and gives you a good cursor rule for it
						</p>
					</div>
				</label>
				<label
					class="flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors hover:bg-neutral-900/50"
				>
					<input
						type="checkbox"
						bind:checked={cursorRules}
						class="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-neutral-600 text-blue-500"
					/>
					<div>
						<span class="text-sm font-medium text-neutral-200">Cursor Rules</span>
						<p class="mt-0.5 text-xs text-neutral-400">
							Adds 5 useful cursor rules for sveltekit: global, neverthrow, svelte, tailwindcss, and
							convex
						</p>
					</div>
				</label>
				<label
					class="flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors hover:bg-neutral-900/50"
				>
					<input
						type="checkbox"
						bind:checked={usefulPackages}
						class="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-neutral-600 text-blue-500"
					/>
					<div>
						<span class="text-sm font-medium text-neutral-200">Useful Packages</span>
						<p class="mt-0.5 text-xs text-neutral-400">
							Adds useful packages for sveltekit: runed, neverthrow, and zod
						</p>
					</div>
				</label>
				<label
					class="flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors hover:bg-neutral-900/50"
				>
					<input
						type="checkbox"
						bind:checked={asyncSvelte}
						class="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-neutral-600 text-blue-500"
					/>
					<div>
						<span class="text-sm font-medium text-neutral-200">Async Svelte</span>
						<p class="mt-0.5 text-xs text-neutral-400">
							Updates the svelte.config.js file to support async svelte
						</p>
					</div>
				</label>
				<label
					class="flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors hover:bg-neutral-900/50"
				>
					<input
						type="checkbox"
						bind:checked={helloWorld}
						class="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-neutral-600 text-blue-500"
					/>
					<div>
						<span class="text-sm font-medium text-neutral-200">Hello World</span>
						<p class="mt-0.5 text-xs text-neutral-400">
							Makes the default page a nicer hello world
						</p>
					</div>
				</label>
			</div>
		</div>

		<!-- VSCode Theme -->
		<div class="space-y-4">
			<label class="flex cursor-pointer items-center gap-3">
				<input
					type="checkbox"
					bind:checked={vscodeThemeEnabled}
					class="h-4 w-4 cursor-pointer rounded border-neutral-600 text-blue-500"
				/>
				<span class="font-medium text-neutral-200">VSCode Theme</span>
			</label>
			{#if vscodeThemeEnabled}
				<div class="space-y-4 pl-7">
					<div>
						<label
							for="topBarColor"
							class="mb-3 block text-xs font-medium tracking-wide text-neutral-400 uppercase"
							>Top Bar Color</label
						>
						<div class="flex items-center gap-3">
							<input
								type="color"
								id="topBarColor"
								bind:value={topBarColor}
								class="h-8 w-12 cursor-pointer rounded border border-neutral-600"
							/>
							<input
								type="text"
								bind:value={topBarColor}
								class="flex-1 rounded border border-neutral-600 bg-neutral-900 px-3 py-2 font-mono text-xs text-neutral-200"
							/>
						</div>
					</div>
					<div>
						<label
							for="topBarTextColor"
							class="mb-3 block text-xs font-medium tracking-wide text-neutral-400 uppercase"
							>Top Bar Text Color</label
						>
						<div class="flex items-center gap-3">
							<input
								type="color"
								id="topBarTextColor"
								bind:value={topBarTextColor}
								class="h-8 w-12 cursor-pointer rounded border border-neutral-600"
							/>
							<input
								type="text"
								bind:value={topBarTextColor}
								class="flex-1 rounded border border-neutral-600 bg-neutral-900 px-3 py-2 font-mono text-xs text-neutral-200"
							/>
						</div>
					</div>
				</div>
			{/if}
		</div>

		<!-- Tailwind Theme -->
		<div class="space-y-4">
			<label class="flex cursor-pointer items-center gap-3">
				<input
					type="checkbox"
					bind:checked={tailwindThemeEnabled}
					class="h-4 w-4 cursor-pointer rounded border-neutral-600 text-blue-500"
				/>
				<span class="font-medium text-neutral-200">Tailwind Theme</span>
			</label>
			{#if tailwindThemeEnabled}
				<div class="space-y-4 pl-7">
					<div>
						<label
							for="primaryColor"
							class="mb-3 block text-xs font-medium tracking-wide text-neutral-400 uppercase"
							>Primary Color</label
						>
						<div class="flex items-center gap-3">
							<input
								type="color"
								id="primaryColor"
								bind:value={primaryColor}
								class="h-8 w-12 cursor-pointer rounded border border-neutral-600"
							/>
							<input
								type="text"
								bind:value={primaryColor}
								class="flex-1 rounded border border-neutral-600 bg-neutral-900 px-3 py-2 font-mono text-xs text-neutral-200"
							/>
						</div>
					</div>
				</div>
			{/if}
		</div>

		<!-- Copy Button -->
		<div class="flex justify-start pt-4">
			<button
				onclick={copyPrompts}
				disabled={isLoading}
				class="flex items-center gap-2 rounded-lg border-2 border-blue-500 bg-transparent px-4 py-2 font-medium text-blue-300 transition-all hover:border-blue-400 hover:text-blue-200 disabled:border-neutral-600 disabled:text-neutral-500"
			>
				{#if isLoading}
					<svg class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
						<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
						></circle>
						<path
							class="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
						></path>
					</svg>
					Copying...
				{:else if copySuccess}
					<svg
						class="h-4 w-4 text-green-400"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<polyline points="20 6 9 17 4 12"></polyline>
					</svg>
					Copied!
				{:else}
					Copy Prompts
				{/if}
			</button>
		</div>
	</div>
</div>

<!-- Toast Notification -->
{#if toastMessage}
	<div
		class={`fixed right-8 bottom-8 z-50 flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium shadow-xl backdrop-blur-sm transition-all ${toastType === 'success' ? 'border-green-500/30 bg-green-500/10 text-green-500' : 'border-red-500/30 bg-red-500/10 text-red-500'}`}
	>
		<div
			class={`h-2 w-2 rounded-full ${toastType === 'success' ? 'bg-green-400' : 'bg-red-400'}`}
		></div>
		{toastMessage}
	</div>
{/if}
