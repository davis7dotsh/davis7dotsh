<script lang="ts">
	import { onMount } from 'svelte';
	import { Moon, Sun, SunMoon } from 'lucide-svelte';

	type Theme = 'light' | 'dark';

	const storageKey = 'theme-preference';

	let theme = $state<Theme>('dark');
	let mounted = $state(false);

	function applyTheme(nextTheme: Theme) {
		theme = nextTheme;
		document.documentElement.dataset.theme = nextTheme;
		document.documentElement.style.colorScheme = nextTheme;
	}

	function toggleTheme() {
		const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';

		try {
			localStorage.setItem(storageKey, nextTheme);
		} catch {
			// Ignore storage failures and still update the current session.
		}

		applyTheme(nextTheme);
	}

	onMount(() => {
		mounted = true;

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const storedTheme = window.localStorage.getItem(storageKey);
		const initialTheme: Theme =
			storedTheme === 'light' || storedTheme === 'dark'
				? storedTheme
				: mediaQuery.matches
					? 'dark'
					: 'light';

		applyTheme(initialTheme);

		const handleChange = (event: MediaQueryListEvent) => {
			if (window.localStorage.getItem(storageKey) === 'light') return;
			if (window.localStorage.getItem(storageKey) === 'dark') return;
			applyTheme(event.matches ? 'dark' : 'light');
		};

		mediaQuery.addEventListener('change', handleChange);

		return () => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	});
</script>

<button
	type="button"
	onclick={toggleTheme}
	class="icon-button fixed top-4 right-4 z-50 h-11 w-11 backdrop-blur transition-[transform,background-color,border-color,color] duration-200 hover:-translate-y-px"
	aria-label="Toggle color theme"
	aria-pressed={mounted ? theme === 'dark' : undefined}
	title="Toggle color theme"
>
	{#if mounted}
		{#if theme === 'dark'}
			<Sun size={18} />
		{:else}
			<Moon size={18} />
		{/if}
	{:else}
		<SunMoon size={18} />
	{/if}
</button>
