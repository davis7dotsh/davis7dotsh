<script lang="ts">
	import { marked } from 'marked';
	import { getAiUpdate } from '$lib/ai/data.remote';
	import type { RatingEntry } from '$lib/ai/ratings';

	let { params } = $props();
	const data = $derived(await getAiUpdate(params.slug));

	const logos: Record<string, string> = {
		'gpt-5-4': '/logos/openai_dark.svg',
		'gpt-5-4-mini': '/logos/openai_dark.svg',
		'opus-4-6': '/logos/claude-ai-icon.svg',
		'sonnet-4-6': '/logos/claude-ai-icon.svg',
		'gemini-3-1-pro': '/logos/gemini.svg',
		'composer-2': '/logos/cursor_dark.svg',
		codex: '/logos/codex_dark.svg',
		'codex-200': '/logos/codex_dark.svg',
		't3-code': '/logos/t3-light.svg',
		'claude-code': '/logos/claude-ai-icon.svg',
		'claude-max': '/logos/claude-ai-icon.svg',
		cursor: '/logos/cursor_dark.svg',
		'cursor-ultra': '/logos/cursor_dark.svg',
		opencode: '/logos/opencode-dark.svg',
		'opencode-black': '/logos/opencode-dark.svg',
		pi: '/logos/pi_dark.svg',
		'gemini-sub-antigravity': '/logos/gemini.svg'
	};

	const asOfDate = $derived.by(() => {
		const [year, month, day] = data.snapshot.asOf.split('-').map(Number);
		return new Date(year, month - 1, day);
	});

	const asOfIso = $derived(data.snapshot.asOf);
	const asOfLabel = $derived(
		asOfDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
	);

	const heroSubtitle = $derived(`${asOfIso} edition`);

	function md(src: string): string {
		return marked.parse(src.trim(), { async: false }) as string;
	}

	type Section = { key: string; label: string; entries: RatingEntry[] };
	const sections: Section[] = $derived([
		{ key: 'models', label: 'models', entries: data.snapshot.models },
		{ key: 'harnesses', label: 'harnesses', entries: data.snapshot.harnesses },
		{ key: 'subscriptions', label: 'subscriptions', entries: data.snapshot.subs }
	]);

	const allSnapshots = $derived(data.index.snapshots);

	function snapshotShort(label: string) {
		return label.toLowerCase();
	}

	function tldr(entries: RatingEntry[]) {
		const recs = entries.filter((entry) => entry.recommended).map((entry) => entry.name);
		return recs.length ? recs.join(' · ') : 'none this round';
	}
</script>

<svelte:head>
	<title>{data.index.title} — {data.snapshot.label}</title>
	<meta name="description" content="{data.snapshot.subtitle} — {data.snapshot.label}." />
	<link rel="canonical" href="https://davis7.sh/ai/{data.snapshot.slug}" />
</svelte:head>

<main class="dispatch">
	<header class="dispatch-head">
		<p class="meta">
			<a class="back-link" href="/">ben davis</a>
			<span aria-hidden="true">·</span>
			<span>davis7.sh</span>
			<span aria-hidden="true">·</span>
			<time datetime={asOfIso}>{asOfIso}</time>
		</p>

		<h1 class="hero">
			the ai tools i'm using
			<span class="hero-sub">{heroSubtitle}</span>
		</h1>

		<p class="byline">
			by <a href="https://x.com/davis7" class="brand-link" target="_blank" rel="noopener noreferrer"
				>ben davis</a
			>, published {asOfLabel}.
		</p>

		<p class="disclaimer">
			disclaimer. this is all just my opinion, based on my experiences and what i've used. it is
			impossible to try everything at the level of depth i would like to, so i've decided to simply
			focus this site on the tools that i am using the most everyday.
		</p>

		{#if allSnapshots.length > 1}
			<p class="previous">
				<span class="previous-label">historical:</span>
				{#each allSnapshots as snapshot, i (snapshot.slug)}
					{#if snapshot.slug === data.snapshot.slug}
						<span class="snapshot-current" aria-current="page">{snapshotShort(snapshot.label)}</span
						>
					{:else}
						<a class="brand-link" href="/ai/{snapshot.slug}">{snapshotShort(snapshot.label)}</a>
					{/if}{#if i < allSnapshots.length - 1}<span aria-hidden="true">,</span>{/if}
				{/each}
			</p>
		{/if}
	</header>

	{#each sections as section (section.key)}
		<section class="section" id={section.key}>
			<h2 class="section-label">{section.label}</h2>
			<p class="tldr"><span class="tldr-arrow">tl;dr →</span> {tldr(section.entries)}</p>

			{#if section.entries.length === 0}
				<p class="empty">nothing this round.</p>
			{:else}
				<ol class="items">
					{#each section.entries as item, i (item.id)}
						<li class="item" class:item-rec={item.recommended}>
							<span class="item-rank" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
							<div class="item-body">
								<p class="item-head">
									{#if logos[item.logoId]}
										<span class="item-logo" aria-hidden="true">
											<img src={logos[item.logoId]} alt="" />
										</span>
									{/if}
									<a
										class="brand-link item-name"
										href={item.url}
										target="_blank"
										rel="noopener noreferrer external">{item.name}</a
									>
									{#if item.tags?.length}
										<span class="item-tags">
											{#each item.tags as tag, t (tag)}
												<span class="item-tag">{tag}</span>{#if t < item.tags.length - 1}<span
														aria-hidden="true"
													>
														·
													</span>{/if}
											{/each}
										</span>
									{/if}
									{#if item.recommended}
										<span class="item-rec-tail">→ recommended</span>
									{/if}
								</p>

								<div class="item-desc">
									{@html md(item.description)}
								</div>

								{#if item.pros?.length || item.cons?.length}
									<div class="item-notes">
										{#if item.pros?.length}
											<ul class="item-list item-list-pros" aria-label="pros">
												{#each item.pros as line (line)}
													<li><span class="glyph" aria-hidden="true">+</span> {line}</li>
												{/each}
											</ul>
										{/if}
										{#if item.cons?.length}
											<ul class="item-list item-list-cons" aria-label="cons">
												{#each item.cons as line (line)}
													<li><span class="glyph" aria-hidden="true">−</span> {line}</li>
												{/each}
											</ul>
										{/if}
									</div>
								{/if}
							</div>
						</li>
					{/each}
				</ol>
			{/if}
		</section>
	{/each}

	<footer class="dispatch-foot">
		<p>snapshot for this period · not a live ranking</p>
	</footer>
</main>

<style>
	.dispatch {
		width: 100%;
		max-width: 56rem;
		margin: 0 auto;
		padding: 0 0 4rem;
		color: var(--color-text-muted);
		font-family: var(--font-family-geist);
		font-size: 1rem;
		line-height: 1.6;
	}

	.dispatch-head {
		padding-block: 1rem 2.5rem;
		border-bottom: 1px solid var(--color-border);
	}

	.meta {
		margin: 0 0 2rem;
		font-family: var(--font-family-geist-mono);
		font-size: 0.75rem;
		color: var(--color-text-subtle);
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		align-items: baseline;
	}

	.meta time {
		font-variant-numeric: tabular-nums;
	}

	.hero {
		margin: 0;
		font-size: clamp(1.6rem, 4.6vw, 2.5rem);
		font-weight: 700;
		line-height: 1.1;
		letter-spacing: -0.02em;
		color: var(--color-text);
	}

	.hero-sub {
		display: block;
		margin-top: 0.4rem;
		font-family: var(--font-family-geist-mono);
		font-size: 0.875rem;
		font-weight: 400;
		letter-spacing: 0;
		color: var(--color-text-subtle);
	}

	.byline {
		margin: 1.25rem 0 0.75rem;
		font-size: 0.95rem;
	}

	.disclaimer {
		margin: 0 0 1.5rem;
		font-size: 0.95rem;
		color: var(--color-text-muted);
	}

	.previous {
		margin: 0;
		font-family: var(--font-family-geist-mono);
		font-size: 0.75rem;
		color: var(--color-text-subtle);
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		align-items: baseline;
	}

	.previous-label {
		color: var(--color-text-subtle);
	}

	.snapshot-current {
		color: var(--color-text);
		text-decoration: underline;
		text-decoration-color: var(--color-border-strong);
		text-underline-offset: 0.2em;
	}

	.section {
		padding-block: 2.5rem;
		border-bottom: 1px solid var(--color-border);
	}

	.section:last-of-type {
		border-bottom: none;
	}

	.section-label {
		margin: 0 0 0.75rem;
		font-size: 1rem;
		font-weight: 500;
		color: var(--color-text);
		letter-spacing: 0;
	}

	.tldr {
		margin: 0 0 2rem;
		font-family: var(--font-family-geist-mono);
		font-size: 0.8rem;
		color: var(--color-text-subtle);
		line-height: 1.6;
	}

	.tldr-arrow {
		color: var(--color-text-subtle);
		margin-right: 0.25rem;
	}

	.empty {
		margin: 0;
		font-family: var(--font-family-geist-mono);
		font-size: 0.8rem;
		color: var(--color-text-subtle);
	}

	.items {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
	}

	.item {
		position: relative;
		padding: 1.5rem 0 1.5rem 3rem;
		border-bottom: 1px solid var(--color-border);
	}

	.item:last-child {
		border-bottom: none;
	}

	.item-rank {
		position: absolute;
		left: 0;
		top: 1.55rem;
		width: 2.25rem;
		font-family: var(--font-family-geist-mono);
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-text-subtle);
		font-variant-numeric: tabular-nums;
		line-height: 1;
	}

	.item-head {
		margin: 0 0 0.5rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem 0.625rem;
		font-size: 1rem;
		line-height: 1.4;
	}

	.item-logo {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.5rem;
		height: 1.5rem;
		flex-shrink: 0;
	}

	.item-logo img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	:global(html[data-theme='light']) .item-logo {
		background: var(--color-ink);
		border: 1px solid var(--color-border);
		padding: 2px;
		width: 1.625rem;
		height: 1.625rem;
	}

	.item-name {
		font-size: 1.05rem;
		font-weight: 500;
		color: var(--color-text);
		letter-spacing: -0.005em;
	}

	.item-rec .item-name {
		font-weight: 700;
	}

	.item-tags {
		font-family: var(--font-family-geist-mono);
		font-size: 0.7rem;
		color: var(--color-text-subtle);
		line-height: 1;
		display: inline-flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		align-items: baseline;
	}

	.item-tag {
		display: inline;
	}

	.item-rec-tail {
		font-family: var(--font-family-geist-mono);
		font-size: 0.7rem;
		color: var(--color-text-subtle);
		letter-spacing: 0.02em;
	}

	.item-desc {
		font-size: 0.95rem;
		color: var(--color-text-muted);
		line-height: 1.65;
		max-width: 65ch;
	}

	.item-desc :global(p) {
		margin: 0 0 0.5rem;
	}

	.item-desc :global(p:last-child) {
		margin-bottom: 0;
	}

	.item-desc :global(strong) {
		color: var(--color-text);
		font-weight: 600;
	}

	.item-desc :global(a) {
		color: var(--color-link);
		text-decoration: none;
		border-bottom: 1px solid var(--color-border-strong);
		transition:
			color 160ms ease,
			border-color 160ms ease;
	}

	.item-desc :global(a:hover) {
		color: var(--color-link-hover);
		border-bottom-color: var(--color-link-hover);
	}

	.item-desc :global(code) {
		font-family: var(--font-family-geist-mono);
		font-size: 0.85em;
		color: var(--color-text);
		background-color: color-mix(in srgb, var(--color-surface-elevated) 70%, transparent);
		border: 1px solid var(--color-border);
		padding: 0.05rem 0.3rem;
	}

	.item-notes {
		margin-top: 0.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		font-family: var(--font-family-geist-mono);
		font-size: 0.78rem;
		line-height: 1.7;
		color: var(--color-text-muted);
		max-width: 70ch;
	}

	.item-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.item-list li {
		display: grid;
		grid-template-columns: 1.25rem 1fr;
		align-items: baseline;
	}

	.item-list .glyph {
		color: var(--color-text-subtle);
		font-weight: 500;
	}

	.dispatch-foot {
		margin-top: 3.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--color-border);
		font-family: var(--font-family-geist-mono);
		font-size: 0.7rem;
		color: var(--color-text-subtle);
		text-align: center;
		letter-spacing: 0.02em;
	}

	.dispatch-foot p {
		margin: 0;
	}

	@media (max-width: 480px) {
		.item {
			padding-left: 2.5rem;
		}

		.item-rank {
			width: 1.75rem;
		}

		.hero {
			letter-spacing: -0.015em;
		}
	}
</style>
