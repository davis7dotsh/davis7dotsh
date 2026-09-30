(() => {
	const storageKey = 'theme-preference';
	const root = document.documentElement;

	try {
		const storedTheme = localStorage.getItem(storageKey);
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const theme =
			storedTheme === 'light' || storedTheme === 'dark'
				? storedTheme
				: prefersDark
					? 'dark'
					: 'light';

		root.dataset.theme = theme;
		root.style.colorScheme = theme;
	} catch {
		root.dataset.theme = 'dark';
		root.style.colorScheme = 'dark';
	}
})();
