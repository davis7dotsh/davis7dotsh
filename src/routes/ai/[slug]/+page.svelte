<script lang="ts">
	import { onMount } from 'svelte';
	import { marked } from 'marked';
	import Logo from '$lib/ai/Logo.svelte';
	import { getAiUpdate } from '$lib/ai/data.remote';
	import { tagColors, type RatingEntry } from '$lib/ai/ratings';

	let { params } = $props();
	let previousDropdown = $state<HTMLDetailsElement>();
	let previousOpen = $state(false);
	const data = $derived(await getAiUpdate(params.slug));

	const asOfDate = $derived.by(() => {
		const [year, month, day] = data.snapshot.asOf.split('-').map(Number);
		return new Date(year, month - 1, day);
	});

	const asOfLabel = $derived(
		asOfDate.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	);

	const heroTitle = $derived(
		`${asOfDate.toLocaleDateString('en-US', {
			month: 'numeric',
			day: 'numeric',
			year: '2-digit'
		})} - The AI Tools I'm Using`
	);

	function md(src: string) {
		return marked.parse(src, { async: false }) as string;
	}

	const sections: { title: string; num: string; entries: RatingEntry[] }[] = $derived([
		{ title: 'Models', num: '01', entries: data.snapshot.models },
		{ title: 'Harnesses', num: '02', entries: data.snapshot.harnesses },
		{ title: 'Subscriptions', num: '03', entries: data.snapshot.subs }
	]);

	const previousSnapshots = $derived(
		data.index.snapshots.filter((snapshot) => snapshot.slug !== data.snapshot.slug)
	);

	onMount(() => {
		function handleClick(event: MouseEvent) {
			if (!previousDropdown?.contains(event.target as Node)) previousOpen = false;
		}

		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick);
	});
</script>

<svelte:head>
	<title>{data.index.title} — {data.snapshot.label}</title>
	<meta name="description" content="{data.snapshot.subtitle} — {data.snapshot.label}." />
	<link rel="canonical" href="https://davis7.sh/ai/{data.snapshot.slug}" />
</svelte:head>

<div class="v2-root">
	<div class="v2-page">
		<header class="v2-header">
			<div class="v2-header-row">
				<a class="v2-home" href="/">Ben Davis</a>
				{#if previousSnapshots.length}
					<details class="v2-previous" bind:this={previousDropdown} bind:open={previousOpen}>
						<summary>Previous</summary>
						<div class="v2-previous-menu">
							{#each previousSnapshots as snapshot (snapshot.slug)}
								<a href="/ai/{snapshot.slug}" onclick={() => (previousOpen = false)}
									>{snapshot.label}</a
								>
							{/each}
						</div>
					</details>
				{/if}
				<span class="v2-date">{asOfLabel}</span>
			</div>
			<h1 class="v2-hero">{heroTitle}</h1>
			<div class="v2-meta content-sheet">
				<p class="v2-by">
					by <a href="https://x.com/davis7" target="_blank" rel="noopener noreferrer">Ben Davis</a>
				</p>
				<p class="v2-note">
					DISCLAIMER — this is all just my opinion, based on my experiences and what i've used. it
					is impossible to try everything at the level of depth i would like to, so i've decided to
					simply focus this site on the tools that i am using the most everyday
				</p>
			</div>
		</header>

		{#each sections as section (section.title)}
			<section class="v2-section content-sheet">
				<div class="v2-section-header">
					<span class="v2-section-num">{section.num}</span>
					<h2 class="v2-section-title">{section.title}</h2>
				</div>

				<div class="v2-grid">
					{#each section.entries as item, i (item.id)}
						<article class="v2-card" class:v2-card--rec={item.recommended}>
							<div class="v2-card-top">
								<span class="v2-card-rank">{String(i + 1).padStart(2, '0')}</span>
								<div class="v2-card-logo"><Logo logoId={item.logoId} /></div>
								<div class="v2-card-info">
									<h3 class="v2-card-name">
										<a href={item.url} target="_blank" rel="noopener noreferrer external"
											>{item.name}</a
										>
									</h3>
									{#if item.tags?.length}
										<div class="v2-card-tags">
											{#each item.tags as tag (tag)}
												<span
													class="v2-card-tag {tagColors[tag] ??
														'border-neutral-400/20 text-neutral-400/70'}">{tag}</span
												>
											{/each}
										</div>
									{/if}
								</div>
								{#if item.recommended}<span class="v2-rec-dot" title="Recommended"></span>{/if}
							</div>

							<div class="v2-card-body">
								<div class="v2-card-desc">{@html md(item.description)}</div>
								{#if item.pros?.length || item.cons?.length}
									<div class="v2-card-details">
										{#if item.pros?.length}<div>
												<span class="v2-detail-label">+</span>
												<ul class="v2-detail-list">
													{#each item.pros as line}<li>{line}</li>{/each}
												</ul>
											</div>{/if}
										{#if item.cons?.length}<div>
												<span class="v2-detail-label">&minus;</span>
												<ul class="v2-detail-list">
													{#each item.cons as line}<li>{line}</li>{/each}
												</ul>
											</div>{/if}
									</div>
								{/if}
							</div>
						</article>
					{/each}
				</div>
			</section>
		{/each}

		<footer class="v2-footer"><p>Snapshot for this period, not a live ranking.</p></footer>
	</div>
</div>

<style>
	.v2-root {
		min-height: 100vh;
		color: #e5e5e5;
		font-family: 'Geist', system-ui, sans-serif;
	}
	.v2-page {
		max-width: 1040px;
		margin: 0 auto;
		padding: 2rem 0 4rem;
	}
	.v2-header {
		margin-bottom: 3rem;
	}
	.v2-header-row {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		border-bottom: 1px solid #333;
		padding-bottom: 0.75rem;
		margin-bottom: 2rem;
	}
	.v2-home,
	.v2-date,
	.v2-previous summary {
		font-size: 0.72rem;
		color: #9ca3af;
		text-decoration: none;
	}
	.v2-previous {
		position: relative;
		justify-self: center;
	}
	.v2-previous summary {
		cursor: pointer;
		list-style: none;
	}
	.v2-previous summary::-webkit-details-marker {
		display: none;
	}
	.v2-previous summary::after {
		content: '↓';
		margin-left: 0.35rem;
		color: #6b7280;
	}
	.v2-previous-menu {
		position: absolute;
		top: calc(100% + 0.5rem);
		left: 50%;
		z-index: 20;
		min-width: 10rem;
		transform: translateX(-50%);
		border: 1px solid #2b313a;
		background: #0b0d10;
		box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35);
	}
	.v2-previous-menu a {
		display: block;
		padding: 0.65rem 0.8rem;
		font-size: 0.78rem;
		color: #d1d5db;
		text-decoration: none;
		white-space: nowrap;
	}
	.v2-previous-menu a:hover {
		background: #14171c;
		color: #fff;
	}
	.v2-date {
		text-align: right;
	}
	.v2-hero {
		font-weight: 700;
		font-size: clamp(1.8rem, 4.2vw, 3.25rem);
		line-height: 1;
		letter-spacing: -0.04em;
		color: #fff;
		white-space: nowrap;
	}
	.v2-meta {
		margin-top: 1.25rem;
		margin-left: 0;
		max-width: 680px;
		padding: 1.25rem;
	}
	.v2-by {
		font-size: 0.9rem;
		color: #d1d5db;
		font-style: italic;
	}
	.v2-by a,
	.v2-card-name a {
		color: #e5e5e5;
		text-decoration: none;
		border-bottom: 1px solid #444;
	}
	.v2-note {
		margin-top: 0.75rem;
		font-size: 0.78rem;
		line-height: 1.8;
		color: #aeb6c2;
	}
	.v2-section {
		margin-bottom: 4rem;
		max-width: 960px;
	}
	.v2-section-header {
		display: flex;
		align-items: baseline;
		gap: 0.75rem;
		border-bottom: 1px solid #222;
		padding-bottom: 0.5rem;
		margin-bottom: 1.25rem;
	}
	.v2-section-num {
		font-size: 0.65rem;
		color: #3b82f6;
		font-weight: 500;
	}
	.v2-section-title {
		font-size: 0.78rem;
		font-weight: 500;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: #c4cad3;
	}
	.v2-card {
		padding: 1.25rem 0;
		border-bottom: 1px solid #1a1a1a;
	}
	.v2-card--rec {
		border-left: 2px solid #34d399;
		padding-left: 1rem;
	}
	.v2-card-top {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
	.v2-card-rank {
		font-size: 0.65rem;
		color: #444;
		width: 1.5rem;
		text-align: right;
		flex-shrink: 0;
	}
	.v2-card-info {
		flex: 1;
		min-width: 0;
	}
	.v2-card-name {
		font-size: 1.05rem;
		font-weight: 500;
		letter-spacing: -0.01em;
	}
	.v2-card-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.3rem;
		margin-top: 0.3rem;
	}
	.v2-card-tag {
		font-size: 0.55rem;
		letter-spacing: 0.05em;
		padding: 0.1rem 0.4rem;
		border: 1px solid;
	}
	.v2-rec-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #34d399;
		box-shadow: 0 0 8px #34d39960;
		flex-shrink: 0;
	}
	.v2-card-body {
		margin-left: calc(1.5rem + 0.75rem + 44px + 0.75rem);
		margin-top: 0.5rem;
	}
	.v2-card-desc {
		font-size: 0.94rem;
		line-height: 1.75;
		color: #c6ccd5;
	}
	.v2-card-desc :global(p) {
		margin: 0.3rem 0;
	}
	.v2-card-desc :global(strong) {
		color: #e5e5e5;
		font-weight: 600;
	}
	.v2-card-details {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-top: 0.6rem;
	}
	.v2-detail-label {
		font-size: 0.7rem;
		font-weight: 500;
		color: #777;
		display: block;
		margin-bottom: 0.25rem;
	}
	.v2-detail-list {
		list-style: none;
		padding: 0;
		font-size: 0.86rem;
		line-height: 1.7;
		color: #b4bbc6;
	}
	.v2-detail-list li::before {
		content: '—';
		margin-right: 0.4rem;
		color: #555;
	}
	.v2-footer {
		margin-top: 5rem;
		font-size: 0.6rem;
		color: #666;
		text-align: center;
		letter-spacing: 0.08em;
	}
	@media (max-width: 639px) {
		.v2-card-body {
			margin-left: 0;
			margin-top: 0.75rem;
		}
		.v2-header-row {
			grid-template-columns: 1fr;
			gap: 0.5rem;
		}
		.v2-date {
			text-align: left;
		}
		.v2-previous {
			justify-self: start;
		}
		.v2-previous-menu {
			left: 0;
			transform: none;
		}
	}
</style>
