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
	let topBarColor = $state('#232831');
	let topBarTextColor = $state('#ffffff');
	let tailwindThemeEnabled = $state(false);
	let primaryColor = $state('#00B8D9');

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

<div class="mx-auto w-full max-w-4xl space-y-8 px-3">
	<div class="content-sheet space-y-4">
		<a href="/" class="back-link mb-4">← Back to Home</a>
		<div class="flex items-center justify-between">
			<h1 class="text-4xl font-bold" style="color: var(--color-text)">SvelteKit Setup</h1>
			<button onclick={toggleAll} class="button px-3 py-1"> Toggle All </button>
		</div>
		<p class="text-lg" style="color: var(--color-text-muted)">
			An easy way to setup your SvelteKit project. Select the options you want to enable and copy
			the prompts to your clipboard, then paste them into cursor.
		</p>
		<p class="text-lg" style="color: var(--color-text-muted)">
			This will not create a project for you, to do that run: <code
				class="code-chip px-2 py-1 font-mono text-sm">bunx sv create</code
			>. I recommend picking: minimal, typescript, prettier/tailwindcss, and then bun.
		</p>
	</div>

	<div class="space-y-8">
		<!-- Basic Prompts -->
		<div class="space-y-4">
			<h2
				class="text-sm font-semibold tracking-wide uppercase"
				style="color: var(--color-text-subtle)"
			>
				Setup Options
			</h2>
			<div class="space-y-1">
				<label class="option-row">
					<input
						type="checkbox"
						checked={vercelSetup}
						onchange={(e) => handleVercelChange(e.currentTarget.checked)}
						class="option-checkbox"
					/>
					<div>
						<span class="text-sm font-medium" style="color: var(--color-text)">Vercel Setup</span>
						<p class="mt-0.5 text-xs" style="color: var(--color-text-subtle)">
							Adds the vercel adapter and removes the default one
						</p>
					</div>
				</label>
				<label class="option-row">
					<input
						type="checkbox"
						checked={cloudflareSetup}
						onchange={(e) => handleCloudflareChange(e.currentTarget.checked)}
						class="option-checkbox"
					/>
					<div>
						<span class="text-sm font-medium" style="color: var(--color-text)"
							>Cloudflare Setup</span
						>
						<p class="mt-0.5 text-xs" style="color: var(--color-text-subtle)">
							Adds the cloudflare adapter, sets up wrangler, and gives you the right commands to
							deploy to cloudflare
						</p>
					</div>
				</label>
				<label class="option-row">
					<input type="checkbox" bind:checked={convexSetup} class="option-checkbox" />
					<div>
						<span class="text-sm font-medium" style="color: var(--color-text)">Convex Setup</span>
						<p class="mt-0.5 text-xs" style="color: var(--color-text-subtle)">
							Sets up convex in your sveltekit app and gives you a good cursor rule for it
						</p>
					</div>
				</label>
				<label class="option-row">
					<input type="checkbox" bind:checked={cursorRules} class="option-checkbox" />
					<div>
						<span class="text-sm font-medium" style="color: var(--color-text)">Cursor Rules</span>
						<p class="mt-0.5 text-xs" style="color: var(--color-text-subtle)">
							Adds 5 useful cursor rules for sveltekit: global, neverthrow, svelte, tailwindcss, and
							convex
						</p>
					</div>
				</label>
				<label class="option-row">
					<input type="checkbox" bind:checked={usefulPackages} class="option-checkbox" />
					<div>
						<span class="text-sm font-medium" style="color: var(--color-text)">Useful Packages</span
						>
						<p class="mt-0.5 text-xs" style="color: var(--color-text-subtle)">
							Adds useful packages for sveltekit: runed, neverthrow, and zod
						</p>
					</div>
				</label>
				<label class="option-row">
					<input type="checkbox" bind:checked={asyncSvelte} class="option-checkbox" />
					<div>
						<span class="text-sm font-medium" style="color: var(--color-text)">Async Svelte</span>
						<p class="mt-0.5 text-xs" style="color: var(--color-text-subtle)">
							Updates the svelte.config.js file to support async svelte
						</p>
					</div>
				</label>
				<label class="option-row">
					<input type="checkbox" bind:checked={helloWorld} class="option-checkbox" />
					<div>
						<span class="text-sm font-medium" style="color: var(--color-text)">Hello World</span>
						<p class="mt-0.5 text-xs" style="color: var(--color-text-subtle)">
							Makes the default page a nicer hello world
						</p>
					</div>
				</label>
			</div>
		</div>

		<!-- VSCode Theme -->
		<div class="space-y-4">
			<label class="flex cursor-pointer items-center gap-3">
				<input type="checkbox" bind:checked={vscodeThemeEnabled} class="option-checkbox h-4 w-4" />
				<span class="font-medium" style="color: var(--color-text)">VSCode Theme</span>
			</label>
			{#if vscodeThemeEnabled}
				<div class="space-y-4 pl-7">
					<div>
						<label
							for="topBarColor"
							class="mb-3 block text-xs font-medium tracking-wide uppercase"
							style="color: var(--color-text-subtle)">Top Bar Color</label
						>
						<div class="flex items-center gap-3">
							<input
								type="color"
								id="topBarColor"
								bind:value={topBarColor}
								class="field-input h-8 w-12 cursor-pointer p-0"
							/>
							<input type="text" bind:value={topBarColor} class="field-input flex-1" />
						</div>
					</div>
					<div>
						<label
							for="topBarTextColor"
							class="mb-3 block text-xs font-medium tracking-wide uppercase"
							style="color: var(--color-text-subtle)">Top Bar Text Color</label
						>
						<div class="flex items-center gap-3">
							<input
								type="color"
								id="topBarTextColor"
								bind:value={topBarTextColor}
								class="field-input h-8 w-12 cursor-pointer p-0"
							/>
							<input type="text" bind:value={topBarTextColor} class="field-input flex-1" />
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
					class="option-checkbox h-4 w-4"
				/>
				<span class="font-medium" style="color: var(--color-text)">Tailwind Theme</span>
			</label>
			{#if tailwindThemeEnabled}
				<div class="space-y-4 pl-7">
					<div>
						<label
							for="primaryColor"
							class="mb-3 block text-xs font-medium tracking-wide uppercase"
							style="color: var(--color-text-subtle)">Primary Color</label
						>
						<div class="flex items-center gap-3">
							<input
								type="color"
								id="primaryColor"
								bind:value={primaryColor}
								class="field-input h-8 w-12 cursor-pointer p-0"
							/>
							<input type="text" bind:value={primaryColor} class="field-input flex-1" />
						</div>
					</div>
				</div>
			{/if}
		</div>

		<!-- Copy Button -->
		<div class="flex justify-start pt-4">
			<button onclick={copyPrompts} disabled={isLoading} class="button">
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
						class="success-text h-4 w-4"
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
	<div class={`toast ${toastType === 'success' ? 'toast-success' : 'toast-error'}`}>
		<div
			class="h-2 w-2"
			style:background={toastType === 'success' ? 'var(--color-success)' : 'var(--color-danger)'}
		></div>
		{toastMessage}
	</div>
{/if}
