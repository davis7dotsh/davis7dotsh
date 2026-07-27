<script lang="ts">
	import { renderAiArticle } from '$lib/ai/article-entities';
	import { latestAiArticle } from '$lib/ai/articles';
	import article from './article.md?raw';

	const articleHtml = renderAiArticle(article);
</script>

<svelte:head>
	<title>{latestAiArticle.title} · State of AI</title>
	<meta name="description" content={latestAiArticle.description} />
	<link rel="canonical" href="https://www.davis7.sh/ai/{latestAiArticle.slug}" />
</svelte:head>

<main class="article-page">
	<a class="back-link" href="/">← Ben Davis</a>

	<article class="article-sheet content-sheet">
		<header class="article-header">
			<p class="article-kicker">State of AI · <time datetime="2026-07-26">July 26, 2026</time></p>
			<h1>The AI tools I’m using</h1>
			<p class="article-byline">By Ben Davis</p>
		</header>

		<div class="article-body">
			{@html articleHtml}
		</div>

		<footer class="article-history">
			<p>Previous snapshots</p>
			<nav aria-label="Previous State of AI snapshots">
				<a class="brand-link" href="/ai/may-5-2026">May 5, 2026</a>
				<a class="brand-link" href="/ai/march-25-2026">March 25, 2026</a>
			</nav>
		</footer>
	</article>
</main>

<style>
	.article-page {
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		padding: 0 0 5rem;
	}

	.article-page > .back-link {
		margin: 0.25rem 0 1.5rem;
	}

	.article-sheet {
		max-width: min(52rem, 100%);
	}

	.article-header {
		max-width: 42rem;
		margin: 0 auto;
		padding-bottom: clamp(2.5rem, 7vw, 4.5rem);
		border-bottom: 1px solid var(--color-border);
	}

	.article-kicker,
	.article-byline,
	.article-history {
		font-family: var(--font-family-geist-mono);
		font-size: 0.75rem;
		line-height: 1.6;
		color: var(--color-text-subtle);
	}

	.article-kicker {
		margin: 0 0 2rem;
		font-variant-numeric: tabular-nums;
	}

	h1 {
		max-width: 11ch;
		margin: 0;
		color: var(--color-text);
		font-size: clamp(2.5rem, 8vw, 5.25rem);
		font-weight: 700;
		line-height: 0.96;
		letter-spacing: -0.045em;
		text-wrap: balance;
	}

	.article-byline {
		margin: 2rem 0 0;
	}

	.article-body {
		max-width: 42rem;
		margin: 0 auto;
		padding-top: clamp(2.5rem, 7vw, 4.5rem);
		color: var(--color-text-muted);
		font-size: 1.0625rem;
		line-height: 1.72;
	}

	.article-body :global(p) {
		margin: 0 0 1.35em;
		text-wrap: pretty;
	}

	.article-body :global(h2) {
		margin: 4.5rem 0 1.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--color-border);
		color: var(--color-text);
		font-size: clamp(1.6rem, 4vw, 2.1rem);
		font-weight: 650;
		line-height: 1.15;
		letter-spacing: -0.025em;
		text-wrap: balance;
	}

	.article-body :global(h3) {
		margin: 3rem 0 1rem;
		color: var(--color-text);
		font-size: 1.125rem;
		font-weight: 650;
		line-height: 1.35;
		letter-spacing: -0.01em;
	}

	.article-body :global(ul),
	.article-body :global(ol) {
		margin: 0 0 1.5rem;
		padding-left: 1.4rem;
	}

	.article-body :global(ul) {
		list-style-type: disc;
	}

	.article-body :global(ol) {
		list-style-type: decimal;
	}

	.article-body :global(li) {
		margin-bottom: 0.55rem;
		padding-left: 0.25rem;
	}

	.article-body :global(li::marker) {
		color: var(--color-text-subtle);
		font-family: var(--font-family-geist-mono);
		font-size: 0.85em;
	}

	.article-body :global(strong) {
		color: var(--color-text);
		font-weight: 620;
	}

	.article-body :global(em) {
		color: var(--color-text);
	}

	.article-body :global(a) {
		color: var(--color-link);
		text-decoration: none;
		border-bottom: 1px solid var(--color-border-strong);
		transition:
			border-color 160ms ease,
			color 160ms ease;
	}

	.article-body :global(a:hover) {
		color: var(--color-link-hover);
		border-bottom-color: var(--color-link-hover);
	}

	.article-body :global(a:focus-visible) {
		outline: 1px solid var(--color-focus);
		outline-offset: 3px;
	}

	.article-body :global(a.article-entity-link) {
		display: inline-flex;
		align-items: baseline;
		gap: 0.28em;
		border-bottom: 0;
		color: var(--color-text);
		font-weight: 650;
		line-height: 1;
		text-decoration: underline;
		text-decoration-color: transparent;
		text-decoration-thickness: 1px;
		text-underline-offset: 0.2em;
		transition:
			color 160ms ease,
			text-decoration-color 160ms ease;
		white-space: nowrap;
	}

	.article-body :global(a.article-entity-link:hover) {
		border-bottom: 0;
		color: var(--color-link-hover);
		cursor: pointer;
		text-decoration-color: currentColor;
	}

	.article-body :global(.article-entity-icon) {
		width: 1.2em;
		height: 1.2em;
		flex: 0 0 auto;
		align-self: center;
		object-fit: contain;
	}

	.article-body :global(.article-entity-monogram) {
		display: inline-grid;
		place-items: center;
		color: var(--color-text);
		font-family: var(--font-family-geist-mono);
		font-size: 0.56em;
		font-weight: 700;
		letter-spacing: -0.06em;
	}

	.article-body :global(code) {
		padding: 0.1rem 0.3rem;
		border: 1px solid var(--color-border);
		background: color-mix(in srgb, var(--color-surface-elevated) 70%, transparent);
		color: var(--color-text);
		font-family: var(--font-family-geist-mono);
		font-size: 0.84em;
	}

	.article-body :global(blockquote) {
		margin: 2.5rem 0;
		padding: 0.25rem 0 0.25rem 1.25rem;
		border-left: 1px solid var(--color-border-strong);
		color: var(--color-text);
		font-size: 1.15rem;
		line-height: 1.6;
	}

	.article-body :global(blockquote p:last-child) {
		margin-bottom: 0;
	}

	.article-body :global(.article-receipt) {
		margin: 2.25rem 0 2.5rem;
		border: 1px solid var(--color-border);
		background: color-mix(in srgb, var(--color-surface) 58%, transparent);
		box-shadow: var(--shadow-surface);
		font-family: var(--font-family-geist-mono);
	}

	.article-body :global(.article-receipt figcaption) {
		padding: 0.8rem 1rem;
		border-bottom: 1px solid var(--color-border);
		color: var(--color-text-subtle);
		font-size: 0.72rem;
	}

	.article-body :global(.article-receipt div) {
		display: grid;
		grid-template-columns: minmax(4.5rem, 0.32fr) 1fr;
		gap: 1rem;
		padding: 0.8rem 1rem;
		border-bottom: 1px solid var(--color-border);
		font-size: 0.78rem;
		line-height: 1.5;
	}

	.article-body :global(.article-receipt div:last-child) {
		border-bottom: 0;
	}

	.article-body :global(.article-receipt span) {
		color: var(--color-text-subtle);
	}

	.article-body :global(.article-receipt strong) {
		font-weight: 500;
	}

	.article-history {
		max-width: 42rem;
		margin: 5rem auto 0;
		padding-top: 1.5rem;
		border-top: 1px solid var(--color-border);
	}

	.article-history p {
		margin: 0 0 0.75rem;
	}

	.article-history nav {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem 1.25rem;
	}

	@media (max-width: 520px) {
		.article-page {
			padding-bottom: 2rem;
		}

		.article-page > .back-link {
			margin-left: 0.25rem;
		}

		.article-body {
			font-size: 1rem;
			line-height: 1.68;
		}

		.article-body :global(h2) {
			margin-top: 3.5rem;
		}

		.article-body :global(.article-receipt div) {
			grid-template-columns: 4rem 1fr;
			gap: 0.75rem;
		}
	}
</style>
