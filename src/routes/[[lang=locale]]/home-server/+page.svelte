<script lang="ts">
	import { tr } from '$lib/i18n';
	import { vercelImageUrl, vercelSrcset } from '$lib/image';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import RichText from '$lib/components/RichText.svelte';
	import { setups } from './inventory';

	const imageQuality = 82;

	function tileSizes(layout: string) {
		if (layout === 'wide' || layout === 'large') {
			return '(max-width: 36rem) calc(100vw - 2rem), (max-width: 62rem) calc(100vw - 2rem), min(50vw, 46rem)';
		}

		return '(max-width: 36rem) calc(100vw - 2rem), (max-width: 62rem) calc(50vw - 1rem), min(25vw, 23rem)';
	}
</script>

<svelte:head>
	<title>{tr('My Home Servers - Ben Davis')}</title>
	<meta
		name="description"
		content={tr('The hardware and cost breakdowns for my home server setups.')}
	/>
</svelte:head>

<main class="z-10 px-3">
	<article class="server-sheet mb-8 text-left">
		<PageHeader title={tr('My Home Servers')} />

		<div class="intro">
			<p>
				{tr(
					'These are the two home server setups I have. My main setup is overkill for most people. The main reason I have it is because I do YouTube for a living, so 10Gb networking is worth it. For most people, the secondary setup is a great fit. The Firewalla is the best part. I highly recommend getting one.'
				)}
			</p>
			<p class="affiliate-disclaimer">
				{tr('Note: Some links on this page are Amazon affiliate links.')}
			</p>
		</div>

		{#each setups as setup, setupIndex (setup.id)}
			<section class="setup" aria-labelledby={`${setup.id}-title`}>
				<div class="setup-intro">
					<header class="setup-heading">
						<p class="setup-index">0{setupIndex + 1}</p>
						<h2 id={`${setup.id}-title`}>{tr(setup.title)}</h2>
						<p class="setup-note">{tr(setup.note)}</p>
						<p class="setup-total">
							{tr('{count} items · {total}', { count: setup.purchases.length, total: setup.total })}
						</p>
					</header>

					<figure class="setup-photo">
						<img
							src={vercelImageUrl(setup.image, 828, imageQuality)}
							srcset={vercelSrcset(setup.image, imageQuality)}
							sizes="(max-width: 36rem) calc(100vw - 2rem), min(36vw, 30rem)"
							alt={tr(setup.alt)}
							loading={setupIndex === 0 ? 'eager' : 'lazy'}
						/>
					</figure>
				</div>

				<figure class="setup-diagram">
					<img
						src={vercelImageUrl(setup.diagram.image, 1920, imageQuality)}
						srcset={vercelSrcset(setup.diagram.image, imageQuality)}
						sizes="(max-width: 36rem) calc(100vw - 2rem), min(94vw, 88rem)"
						width={setup.diagram.width}
						height={setup.diagram.height}
						alt={tr(setup.diagram.alt)}
						loading="lazy"
					/>
					<figcaption>
						<span class="diagram-label">{tr('network map')}</span>
						<span>
							<RichText
								message="tip: <s0>open the full-size image</s0>, then copy or paste it into GPT or Claude for a deeper walkthrough, or to adapt it to your own setup."
								elements={[
									{
										tag: 'a',
										localize: false,
										attributes: {
											href: setup.diagram.image,
											target: '_blank',
											rel: 'noopener noreferrer'
										}
									}
								]}
							/>
						</span>
					</figcaption>
				</figure>

				<div class="product-grid">
					{#each setup.purchases as purchase, purchaseIndex (purchase.item)}
						<a
							class={`product-tile ${purchase.layout}`}
							href={purchase.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${purchase.item}, ${purchase.price}. ${tr('Open product listing in a new tab')}`}
						>
							<img
								src={vercelImageUrl(purchase.image, 828, imageQuality)}
								srcset={vercelSrcset(purchase.image, imageQuality)}
								sizes={tileSizes(purchase.layout)}
								alt={tr(purchase.alt)}
								loading={setupIndex === 0 && purchaseIndex < 4 ? 'eager' : 'lazy'}
							/>
							<span class="product-overlay">
								<span class="product-name">{purchase.item}</span>
								<span class="product-price">{purchase.price}</span>
							</span>
						</a>
					{/each}
				</div>

				<div class="receipt">
					<div>
						<h3>{tr('By Category')}</h3>
						<dl class="receipt-list">
							{#each setup.breakdown as row (row.category)}
								<div>
									<dt>{tr(row.category)}</dt>
									<dd>{row.total}</dd>
								</div>
							{/each}
							<div class="total">
								<dt>{tr('Total')}</dt>
								<dd>{setup.total}</dd>
							</div>
						</dl>
					</div>
				</div>
			</section>
		{/each}
	</article>

	<SocialLinks />
</main>

<style lang="postcss">
	.server-sheet {
		box-sizing: border-box;
		margin-right: auto;
		margin-left: auto;
		max-width: min(94rem, 100%);
		padding: clamp(1.25rem, 3vw, 2.5rem);
	}

	.intro {
		max-width: 65ch;
		margin-bottom: clamp(2rem, 4vw, 3.5rem);
		color: var(--color-text-muted);
	}

	.intro p {
		margin: 0;
	}

	.affiliate-disclaimer {
		margin-top: 0.75rem !important;
		color: var(--color-text-subtle);
		font-family: var(--font-family-geist-mono);
		font-size: 0.75rem;
	}

	.setup + .setup {
		margin-top: clamp(5rem, 10vw, 9rem);
		padding-top: clamp(3rem, 6vw, 5rem);
		border-top: 1px solid var(--color-border);
	}

	.setup-heading {
		align-self: center;
		padding: clamp(1.4rem, 4vw, 3.5rem);
	}

	.setup-index,
	.setup-total {
		margin: 0;
		color: var(--color-text-subtle);
		font-family: var(--font-family-geist-mono);
		font-size: 0.75rem;
		font-variant-numeric: tabular-nums;
	}

	.setup-index {
		margin-bottom: 0.35rem;
	}

	h2,
	h3 {
		margin: 0;
		color: var(--color-text);
		font-weight: 500;
		letter-spacing: -0.02em;
	}

	h2 {
		font-size: clamp(1.45rem, 2vw, 2rem);
	}

	h3 {
		margin-bottom: 0.8rem;
		font-size: 0.875rem;
	}

	.setup-intro {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(16rem, 30rem);
		gap: 1px;
		margin-bottom: 1px;
		background: var(--color-border);
		border: 1px solid var(--color-border);
	}

	.setup-note {
		max-width: 26rem;
		margin: 1rem 0 0;
		color: var(--color-text-muted);
		font-size: 0.95rem;
		line-height: 1.55;
	}

	.setup-total {
		margin-top: clamp(2.5rem, 6vw, 5rem);
	}

	.setup-photo {
		margin: 0;
		overflow: hidden;
		background: var(--color-surface);
	}

	.setup-photo img {
		display: block;
		width: 100%;
		height: 100%;
		aspect-ratio: 3 / 4;
		object-fit: cover;
	}

	.setup-diagram {
		margin: 0 0 1px;
		background: var(--color-surface);
		border: 1px solid var(--color-border);
	}

	.setup-diagram img {
		display: block;
		width: 100%;
		height: auto;
	}

	.setup-diagram figcaption {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 2rem;
		padding: 0.85rem 1rem;
		border-top: 1px solid var(--color-border);
		color: var(--color-text-muted);
		font-size: 0.875rem;
		line-height: 1.5;
	}

	.diagram-label {
		flex-shrink: 0;
		color: var(--color-text-subtle);
		font-family: var(--font-family-geist-mono);
		font-size: 0.75rem;
	}

	.setup-diagram figcaption :global(a) {
		color: var(--color-text);
		text-decoration: underline;
		text-decoration-color: var(--color-border-strong);
		text-underline-offset: 0.18em;
		transition:
			color 160ms ease,
			text-decoration-color 160ms ease;
	}

	.setup-diagram figcaption :global(a):hover {
		color: var(--color-link-hover);
		text-decoration-color: var(--color-link-hover);
	}

	.setup-diagram figcaption :global(a):focus-visible {
		outline: 1px solid var(--color-focus);
		outline-offset: 3px;
	}

	.product-grid {
		display: grid;
		grid-auto-flow: dense;
		grid-auto-rows: 8.5rem;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		gap: 1px;
		background: var(--color-border);
		border: 1px solid var(--color-border);
	}

	.product-tile {
		position: relative;
		grid-column: span 3;
		grid-row: span 2;
		min-width: 0;
		overflow: hidden;
		background: var(--color-surface);
		color: var(--color-paper);
		isolation: isolate;
		text-decoration: none;
	}

	.product-tile::after {
		position: absolute;
		inset: 0;
		z-index: 2;
		border: 1px solid transparent;
		content: '';
		pointer-events: none;
		transition: border-color 180ms ease;
	}

	.product-tile:hover::after,
	.product-tile:focus-visible::after {
		border-color: var(--color-link-hover);
	}

	.product-tile:focus-visible {
		outline: 1px solid var(--color-focus);
		outline-offset: 3px;
	}

	.product-tile.wide {
		grid-column: span 6;
	}

	.product-tile.large {
		grid-column: span 6;
		grid-row: span 3;
	}

	.product-tile.portrait {
		grid-row: span 3;
	}

	.product-tile img {
		display: block;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		object-fit: contain;
		padding: clamp(1rem, 2.5vw, 2.25rem);
		background: color-mix(in srgb, var(--color-surface) 86%, var(--color-bg));
		transition: opacity 220ms ease;
	}

	.product-tile:hover img {
		opacity: 0.92;
	}

	.product-overlay {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1rem;
		padding: 3.5rem 0.85rem 0.85rem;
		background: linear-gradient(
			to top,
			color-mix(in srgb, var(--color-ink) 92%, transparent),
			transparent
		);
	}

	.product-name {
		max-width: 20rem;
		color: var(--color-paper);
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1.25;
	}

	.product-price {
		flex-shrink: 0;
		color: var(--color-cloud);
		font-family: var(--font-family-geist-mono);
		font-size: 0.75rem;
		font-variant-numeric: tabular-nums;
		white-space: nowrap;
	}

	.receipt {
		max-width: 24rem;
		margin-top: clamp(2.5rem, 5vw, 4.5rem);
	}

	.receipt-list {
		margin: 0;
		border-top: 1px solid var(--color-border);
	}

	.receipt-list div {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.7rem 0;
		border-bottom: 1px solid var(--color-border);
	}

	.receipt-list dt {
		color: var(--color-text-muted);
		font-size: 0.875rem;
	}

	.receipt-list dd {
		flex-shrink: 0;
		margin: 0;
		color: var(--color-text);
		font-family: var(--font-family-geist-mono);
		font-size: 0.75rem;
		font-variant-numeric: tabular-nums;
		white-space: nowrap;
	}

	.receipt-list .total {
		font-weight: 600;
	}

	@media (max-width: 62rem) {
		.setup-intro {
			grid-template-columns: minmax(0, 1fr) minmax(14rem, 22rem);
		}

		.product-grid {
			grid-template-columns: repeat(6, minmax(0, 1fr));
		}
	}

	@media (max-width: 36rem) {
		.setup-heading {
			padding: 1.25rem;
		}

		.setup-intro {
			grid-template-columns: 1fr;
		}

		.setup-photo img {
			height: auto;
		}

		.setup-diagram figcaption {
			display: grid;
			gap: 0.4rem;
			padding: 0.8rem;
		}

		.product-grid {
			grid-auto-rows: 13rem;
			grid-template-columns: 1fr;
		}

		.product-tile,
		.product-tile.wide,
		.product-tile.large,
		.product-tile.portrait {
			grid-column: span 1;
			grid-row: span 1;
		}

		.product-overlay {
			padding-right: 0.75rem;
			padding-left: 0.75rem;
		}
	}
</style>
