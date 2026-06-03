<script lang="ts">
	import { vercelImageUrl, vercelSrcset } from '$lib/image';
	import SocialLinks from '$lib/components/SocialLinks.svelte';

	const tileImageQuality = 82;
	const setupImageQuality = 82;

	function tileSizes(layout: string) {
		if (layout === 'wide' || layout === 'large') {
			return '(max-width: 36rem) calc(100vw - 2rem), (max-width: 62rem) calc(100vw - 2rem), min(50vw, 46rem)';
		}

		return '(max-width: 36rem) calc(100vw - 2rem), (max-width: 62rem) calc(50vw - 1rem), min(25vw, 23rem)';
	}

	const setups = [
		{
			id: 'main',
			title: 'main rack',
			image: '/home-server/main-rack-setup.jpeg',
			alt: 'Main home server rack with networking gear, NAS, and rackmount power protection',
			note: 'the full home setup',
			purchases: [
				{
					item: 'Firewalla Gold Pro',
					price: '$929.00',
					href: 'https://firewalla.com/collections/firewalla-gold/products/firewalla-gold-pro',
					image: '/home-server/firewalla-gold-pro.png',
					alt: 'Firewalla Gold Pro firewall with its front ports visible',
					layout: 'large'
				},
				{
					item: 'Cable Matters 24-Port Patch Panel',
					price: '$29.99',
					href: 'https://www.amazon.com/dp/B0072JVT02',
					image: '/home-server/cable-matters-patch-panel.jpg',
					alt: 'Cable Matters 24-port patch panel and cable management bar',
					layout: 'wide'
				},
				{
					item: 'Firewalla Gold Pro Rack Mount',
					price: '$82.00',
					href: 'https://firewalla.com/products/firewalla-gold-pro-rack-mount?variant=45741344948468',
					image: '/home-server/firewalla-gold-pro-rack-mount.png',
					alt: 'Firewalla Gold Pro installed in its rack mount',
					layout: 'wide'
				},
				{
					item: 'Synology E10G30-T1 Adapter',
					price: '$129.99',
					href: 'https://www.amazon.com/dp/B0GK2MHQQV',
					image: '/home-server/synology-10gb-adapter.jpg',
					alt: 'Synology E10G30-T1 single-port 10GbE adapter',
					layout: 'standard'
				},
				{
					item: '8311 XGSPON ONU Stick',
					price: '$135.00',
					href: 'https://www.amazon.com/dp/B0FT74L89Y',
					image: '/home-server/modem-spoofing-stick.jpg',
					alt: '8311 XGSPON ONU SFP+ stick with optical transceiver',
					layout: 'standard'
				},
				{
					item: 'Samsung 9100 PRO 1TB SSD',
					price: '$249.99 × 2',
					href: 'https://www.amazon.com/dp/B0DX2G349M',
					image: '/home-server/nas-cache-ssd.jpg',
					alt: 'Samsung 9100 PRO M.2 SSD',
					layout: 'wide'
				},
				{
					item: 'Seagate Exos 28TB Drives',
					price: '$610.00 × 3',
					href: 'https://shop.app/products/9776353509654/seagate-exos-st28000nm000c-28tb-7-2k-rpm-sata-6gb-s-512e-cmr-3?variantId=49428994588950',
					image: '/home-server/seagate-exos-28tb.png',
					alt: 'Seagate Exos 28TB enterprise hard drive',
					layout: 'portrait'
				},
				{
					item: 'ECHOGEAR 20U Open Frame Rack',
					price: '$229.99',
					href: 'https://www.amazon.com/dp/B07YYMSFP1',
					image: '/home-server/echogear-20u-rack.jpg',
					alt: 'ECHOGEAR 20U open frame server rack',
					layout: 'portrait'
				},
				{
					item: 'CyberPower CPS1215RMS Surge Protector',
					price: '$68.95',
					href: 'https://www.amazon.com/dp/B00077INZU',
					image: '/home-server/cyberpower-rack-surge-protector.jpg',
					alt: 'CyberPower CPS1215RMS 1U rackmount surge protector',
					layout: 'wide'
				},
				{
					item: 'NETGEAR MS510TXUP Managed Switch',
					price: '$689.99',
					href: 'https://www.amazon.com/dp/B08PPYV4SH',
					image: '/home-server/netgear-managed-10g-switch.jpg',
					alt: 'NETGEAR MS510TXUP managed multi-gigabit switch',
					layout: 'wide'
				},
				{
					item: 'eero Pro 7 Router',
					price: '$299.99',
					href: 'https://www.amazon.com/dp/B0C6RBS846',
					image: '/home-server/eero-pro-7.jpg',
					alt: 'White eero Pro 7 mesh Wi-Fi router',
					layout: 'portrait'
				},
				{
					item: 'Synology DS1825+',
					price: '$1,149.99',
					href: 'https://www.amazon.com/dp/B0C8SBXSTJ',
					image: '/home-server/synology-ds1825.jpg',
					alt: 'Synology DS1825+ eight-bay NAS enclosure',
					layout: 'wide'
				},
				{
					item: 'Mac mini',
					price: '$799.00',
					href: 'https://www.apple.com/shop/buy-mac/mac-mini',
					image: '/home-server/mac-mini.jpg',
					alt: 'Silver Mac mini viewed from the front',
					layout: 'standard'
				},
				{
					item: 'TP-Link TL-SX1008 Switch',
					price: '$274.00',
					href: 'https://www.amazon.com/TP-Link-TL-SX1008-Multi-Gig-Protection-Auto-Negotiation/dp/B0916BNNML',
					image: '/home-server/tp-link-10g-switch.jpg',
					alt: 'TP-Link TL-SX1008 eight-port 10G switch',
					layout: 'wide'
				}
			],
			breakdown: [
				{ category: 'networking & routing', total: '$2,439.97' },
				{ category: 'NAS & storage', total: '$3,609.96' },
				{ category: 'rack & power', total: '$298.94' },
				{ category: 'compute', total: '$799.00' }
			],
			total: '$7,147.87'
		},
		{
			id: 'parents',
			title: 'secondary rack',
			image: '/home-server/parents-rack-setup.jpeg',
			alt: 'Parents rack with a white mini rack, NAS, Firewalla Orange, eero routers, and surge protector',
			note: "smaller version at my parent's place",
			purchases: [
				{
					item: 'Firewalla Orange',
					price: '$389.00',
					href: 'https://firewalla.com/products/firewalla-orange',
					image: '/home-server/firewalla-orange.png',
					alt: 'Orange Firewalla Orange firewall with its front ports visible',
					layout: 'large'
				},
				{
					item: 'eero 7 Routers (2 Pack)',
					price: '$279.99',
					href: 'https://www.amazon.com/dp/B0D9555PBN',
					image: '/home-server/eero-7-2-pack.jpg',
					alt: 'Pair of white eero 7 mesh Wi-Fi routers',
					layout: 'portrait'
				},
				{
					item: 'NETGEAR MS308 2.5G Switch',
					price: '$129.99',
					href: 'https://www.amazon.com/dp/B0D54STHFZ',
					image: '/home-server/netgear-ms308.jpg',
					alt: 'NETGEAR MS308 eight-port 2.5G switch',
					layout: 'wide'
				},
				{
					item: 'Synology DS225+',
					price: '$339.99',
					href: 'https://www.amazon.com/dp/B0FB7KQLR1',
					image: '/home-server/synology-ds225.jpg',
					alt: 'Synology DS225+ two-bay NAS enclosure',
					layout: 'portrait'
				},
				{
					item: 'Seagate Exos 26TB Drives',
					price: '$575.00 × 2',
					href: 'https://serverpartdeals.com/products/seagate-exos-st26000nm000c-26tb-7-2k-rpm-sata-6gb-s-512e-cmr-3-5-recertified-hard-drive',
					image: '/home-server/seagate-exos-26tb.png',
					alt: 'Seagate Exos 26TB enterprise hard drive',
					layout: 'standard'
				},
				{
					item: 'Tecmojo 6U Mini Rack',
					price: '$69.99',
					href: 'https://www.amazon.com/dp/B0F4JZ9YJW',
					image: '/home-server/tecmojo-6u-rack.jpg',
					alt: 'White Tecmojo 6U mini server rack',
					layout: 'standard'
				},
				{
					item: 'CABNEER Cat8 Cables (5 Pack)',
					price: '$30.12',
					href: 'https://www.amazon.com/dp/B0DD7Q1KRK',
					image: '/home-server/cabneer-cat8-cables.jpg',
					alt: 'Five blue braided CABNEER Cat8 Ethernet cables',
					layout: 'standard'
				},
				{
					item: 'Belkin 12-Outlet Surge Protector',
					price: '$28.99',
					href: 'https://www.amazon.com/dp/B0C6S6TPRH',
					image: '/home-server/belkin-surge-protector.jpg',
					alt: 'Belkin 12-outlet surge protector power strip',
					layout: 'standard'
				}
			],
			breakdown: [
				{ category: 'networking & routing', total: '$829.10' },
				{ category: 'NAS & storage', total: '$1,489.99' },
				{ category: 'rack & power', total: '$98.98' }
			],
			total: '$2,418.07'
		}
	] as const;
</script>

<svelte:head>
	<title>My Home Server(s) - Ben Davis</title>
	<meta name="description" content="The hardware and cost breakdowns for my home server setups." />
	<link rel="canonical" href="https://davis7.sh/home-server" />
</svelte:head>

<main class="z-10 px-3">
	<article class="server-sheet mb-8 text-left">
		<header class="page-heading">
			<a href="/" class="back-link">← Back to Home</a>
			<h1>My Home Server(s)</h1>
		</header>

		{#each setups as setup, setupIndex (setup.id)}
			<section class="setup" aria-labelledby={`${setup.id}-title`}>
				<div class="setup-intro">
					<header class="setup-heading">
						<p class="setup-index">0{setupIndex + 1}</p>
						<h2 id={`${setup.id}-title`}>{setup.title}</h2>
						<p class="setup-note">{setup.note}</p>
						<p class="setup-total">{setup.purchases.length} items · {setup.total}</p>
					</header>

					<figure class="setup-photo">
						<img
							src={vercelImageUrl(setup.image, 828, setupImageQuality)}
							srcset={vercelSrcset(setup.image, undefined, setupImageQuality)}
							sizes="(max-width: 36rem) calc(100vw - 2rem), min(36vw, 30rem)"
							alt={setup.alt}
							loading={setupIndex === 0 ? 'eager' : 'lazy'}
						/>
					</figure>
				</div>

				<div class="product-grid">
					{#each setup.purchases as purchase, purchaseIndex (purchase.item)}
						<a
							class={`product-tile ${purchase.layout}`}
							href={purchase.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${purchase.item}, ${purchase.price}. open product listing in a new tab`}
						>
							<img
								src={vercelImageUrl(purchase.image, 828, tileImageQuality)}
								srcset={vercelSrcset(purchase.image, undefined, tileImageQuality)}
								sizes={tileSizes(purchase.layout)}
								alt={purchase.alt}
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
						<h3>by category</h3>
						<dl class="receipt-list">
							{#each setup.breakdown as row (row.category)}
								<div>
									<dt>{row.category}</dt>
									<dd>{row.total}</dd>
								</div>
							{/each}
							<div class="total">
								<dt>total</dt>
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

	.page-heading {
		margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
	}

	.page-heading h1 {
		margin: 2rem 0 0;
		color: var(--color-text);
		font-size: clamp(2.4rem, 5vw, 4.8rem);
		font-weight: 700;
		letter-spacing: -0.065em;
		line-height: 0.95;
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
		transition:
			opacity 220ms ease,
			transform 420ms cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	.product-tile:hover img {
		opacity: 0.92;
		transform: scale(1.035);
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
		background: linear-gradient(to top, rgba(11, 13, 16, 0.92), rgba(11, 13, 16, 0));
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
		margin-left: auto;
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
