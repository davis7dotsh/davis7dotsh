<script lang="ts">
	import { tr } from '$lib/i18n';
	import { onMount } from 'svelte';
	import Icon from '$lib/components/Icon.svelte';

	type Theme = 'light' | 'dark';

	const storageKey = 'theme-preference';

	let theme = $state<Theme>();

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
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		function syncTheme() {
			let preference: string | null = null;
			try {
				preference = localStorage.getItem(storageKey);
			} catch {
				// Storage can be unavailable in restricted browser contexts.
			}
			applyTheme(
				preference === 'light' || preference === 'dark'
					? preference
					: mediaQuery.matches
						? 'dark'
						: 'light'
			);
		}

		syncTheme();
		mediaQuery.addEventListener('change', syncTheme);

		return () => {
			mediaQuery.removeEventListener('change', syncTheme);
		};
	});
</script>

<button
	type="button"
	onclick={toggleTheme}
	class="icon-button fixed top-4 right-4 z-50 h-11 w-11 backdrop-blur transition-[transform,background-color,border-color,color] duration-200 hover:-translate-y-px"
	aria-label={tr('Toggle color theme')}
	aria-pressed={theme ? theme === 'dark' : undefined}
	title={tr('Toggle color theme')}
>
	<Icon name={theme === 'dark' ? 'sun' : theme === 'light' ? 'moon' : 'sun-moon'} size={18} />
</button>
