<script lang="ts">
	import { vercelImageUrl, vercelSrcset } from '$lib/image';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';

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
			title: 'Main Rack',
			image: '/home-server/main-rack-setup.jpeg',
			alt: 'Main home server rack with networking gear, NAS, and rackmount power protection',
			note: 'The full home setup, built for 10Gb networking',
			diagram: {
				image: '/home-server/main-network-diagram.png',
				width: 2462,
				height: 1526,
				alt: 'Main network topology showing AT&T and Firewalla on VLAN 20, with an eero access point, switches, NAS, and Mac mini separated across VLANs 10, 30, and 40'
			},
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
					href: 'https://davis7.link/cable-matters-patch-panel',
					image: '/home-server/cable-matters-patch-panel.jpg',
					alt: 'Cable Matters 24-port patch panel and cable management bar',
					layout: 'wide'
				},
				{
					item: 'VCE CAT6A Keystone Couplers (25 Pack)',
					price: '$24.99',
					href: 'https://davis7.link/vce-cat6a-couplers',
					image: '/home-server/vce-cat6a-couplers.jpg',
					alt: 'Blue VCE CAT6A keystone couplers arranged beside one enlarged coupler',
					layout: 'standard'
				},
				{
					item: 'CABNEER Cat8 Cables (1 ft, 10 Pack)',
					price: '$16.19',
					href: 'https://davis7.link/cabneer-cat8-1ft-10-pack',
					image: '/home-server/cabneer-cat8-1ft-10-pack.jpg',
					alt: 'Ten short black and blue braided CABNEER Cat8 Ethernet cables',
					layout: 'standard'
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
					href: 'https://davis7.link/synology-10gbe-adapter',
					image: '/home-server/synology-10gb-adapter.jpg',
					alt: 'Synology E10G30-T1 single-port 10GbE adapter',
					layout: 'standard'
				},
				{
					item: '8311 XGSPON ONU Stick',
					price: '$135.00',
					href: 'https://davis7.link/xgspon-onu-stick',
					image: '/home-server/modem-spoofing-stick.jpg',
					alt: '8311 XGSPON ONU SFP+ stick with optical transceiver',
					layout: 'standard'
				},
				{
					item: 'Samsung 9100 PRO 1TB SSD',
					price: '$249.99 × 2',
					href: 'https://davis7.link/samsung-9100-pro-1tb',
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
					href: 'https://davis7.link/echogear-20u-rack',
					image: '/home-server/echogear-20u-rack.jpg',
					alt: 'ECHOGEAR 20U open frame server rack',
					layout: 'portrait'
				},
				{
					item: 'CyberPower CPS1215RMS Surge Protector',
					price: '$68.95',
					href: 'https://davis7.link/cyberpower-rack-surge',
					image: '/home-server/cyberpower-rack-surge-protector.jpg',
					alt: 'CyberPower CPS1215RMS 1U rackmount surge protector',
					layout: 'wide'
				},
				{
					item: 'NETGEAR MS510TXUP Managed Switch',
					price: '$689.99',
					href: 'https://davis7.link/netgear-ms510txup',
					image: '/home-server/netgear-managed-10g-switch.jpg',
					alt: 'NETGEAR MS510TXUP managed multi-gigabit switch',
					layout: 'wide'
				},
				{
					item: 'eero Pro 7 Router',
					price: '$299.99',
					href: 'https://davis7.link/eero-pro-7',
					image: '/home-server/eero-pro-7.jpg',
					alt: 'White eero Pro 7 mesh Wi-Fi router',
					layout: 'portrait'
				},
				{
					item: 'Synology DS1825+',
					price: '$1,149.99',
					href: 'https://davis7.link/synology-ds1825',
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
					href: 'https://davis7.link/tp-link-tl-sx1008',
					image: '/home-server/tp-link-10g-switch.jpg',
					alt: 'TP-Link TL-SX1008 eight-port 10G switch',
					layout: 'wide'
				},
				{
					item: 'Framework Desktop (Ryzen AI Max+ 395, 64GB)',
					price: '$1,599.00',
					href: 'https://frame.work/desktop',
					image: '/home-server/framework-desktop.jpg',
					alt: 'Black Framework Desktop with a checkered front panel',
					layout: 'portrait'
				},
				{
					item: 'GMKtec K8 Plus Mini PC',
					price: '$809.99',
					href: 'https://amzn.to/4b98JKD',
					image: '/home-server/gmktec-k8-plus.jpg',
					alt: 'Two black GMKtec K8 Plus mini PCs showing front and rear ports',
					layout: 'standard'
				},
				{
					item: 'MINISFORUM DEG1 eGPU Dock',
					price: '$109.00',
					href: 'https://www.amazon.com/dp/B0DCZLPWXK',
					image: '/home-server/minisforum-deg1-egpu-dock.jpg',
					alt: 'MINISFORUM DEG1 external GPU dock with OCuLink connector',
					layout: 'wide'
				},
				{
					item: 'MSI MAG A550BN 550W PSU',
					price: '$47.99',
					href: 'https://amzn.to/4eYkdlo',
					image: '/home-server/msi-mag-a550bn-psu.jpg',
					alt: 'MSI MAG A550BN 550W power supply next to its box',
					layout: 'wide'
				},
				{
					item: 'GL.iNet Comet Pro Remote KVM',
					price: '$179.99',
					href: 'https://amzn.to/4eRoOqR',
					image: '/home-server/glinet-comet-pro-kvm.jpg',
					alt: 'GL.iNet Comet Pro remote KVM with its touchscreen showing an IP address',
					layout: 'standard'
				}
			],
			breakdown: [
				{ category: 'Networking & routing', total: '$2,661.14' },
				{ category: 'NAS & storage', total: '$3,609.96' },
				{ category: 'Rack & power', total: '$346.93' },
				{ category: 'Compute', total: '$3,316.99' }
			],
			total: '$9,935.02'
		},
		{
			id: 'parents',
			title: 'Secondary Rack',
			image: '/home-server/parents-rack-setup.jpeg',
			alt: 'Parents rack with a white mini rack, NAS, Firewalla Orange, eero routers, and surge protector',
			note: "Smaller version at my parent's place, built for 2.5Gb networking",
			diagram: {
				image: '/home-server/secondary-network-diagram.png',
				width: 1848,
				height: 1500,
				alt: 'Secondary network topology showing AT&T connected through Firewalla to a switch, eero access point, and NAS'
			},
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
					href: 'https://davis7.link/eero-7-2-pack',
					image: '/home-server/eero-7-2-pack.jpg',
					alt: 'Pair of white eero 7 mesh Wi-Fi routers',
					layout: 'portrait'
				},
				{
					item: 'NETGEAR MS308 2.5G Switch',
					price: '$129.99',
					href: 'https://davis7.link/netgear-ms308',
					image: '/home-server/netgear-ms308.jpg',
					alt: 'NETGEAR MS308 eight-port 2.5G switch',
					layout: 'wide'
				},
				{
					item: 'Synology DS225+',
					price: '$339.99',
					href: 'https://davis7.link/synology-ds225',
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
					href: 'https://davis7.link/tecmojo-6u-rack',
					image: '/home-server/tecmojo-6u-rack.jpg',
					alt: 'White Tecmojo 6U mini server rack',
					layout: 'standard'
				},
				{
					item: 'CABNEER Cat8 Cables (5 Pack)',
					price: '$30.12',
					href: 'https://davis7.link/cabneer-cat8-5-pack',
					image: '/home-server/cabneer-cat8-cables.jpg',
					alt: 'Five blue braided CABNEER Cat8 Ethernet cables',
					layout: 'standard'
				},
				{
					item: 'Belkin 12-Outlet Surge Protector',
					price: '$28.99',
					href: 'https://davis7.link/belkin-surge-protector',
					image: '/home-server/belkin-surge-protector.jpg',
					alt: 'Belkin 12-outlet surge protector power strip',
					layout: 'standard'
				},
				{
					item: 'Jueraori WiFi Router Storage Cabinet',
					price: '$123.99',
					href: 'https://davis7.link/router-storage-cabinet',
					image: '/home-server/router-storage-cabinet.jpg',
					alt: 'Walnut Jueraori WiFi router storage cabinet with its rattan doors open',
					layout: 'wide'
				}
			],
			breakdown: [
				{ category: 'Networking & routing', total: '$829.10' },
				{ category: 'NAS & storage', total: '$1,489.99' },
				{ category: 'Rack & power', total: '$222.97' }
			],
			total: '$2,542.06'
		}
	] as const;
</script>

<svelte:head>
	<title>My Home Servers - Ben Davis</title>
	<meta name="description" content="The hardware and cost breakdowns for my home server setups." />
	<link rel="canonical" href="https://www.davis7.sh/home-server" />
</svelte:head>

<main class="z-10 px-3">
	<article class="server-sheet mb-8 text-left">
		<PageHeader title="My Home Servers" />

		<div class="intro">
			<p>
				These are the two home server setups I have. My main setup is overkill for most people. The
				main reason I have it is because I do YouTube for a living, so 10Gb networking is worth it.
				For most people, the secondary setup is a great fit. The Firewalla is the best part. I
				highly recommend getting one.
			</p>
			<p class="affiliate-disclaimer">Note: Some links on this page are Amazon affiliate links.</p>
		</div>

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

				<figure class="setup-diagram">
					<img
						src={vercelImageUrl(setup.diagram.image, 1920, setupImageQuality)}
						srcset={vercelSrcset(setup.diagram.image, undefined, setupImageQuality)}
						sizes="(max-width: 36rem) calc(100vw - 2rem), min(94vw, 88rem)"
						width={setup.diagram.width}
						height={setup.diagram.height}
						alt={setup.diagram.alt}
						loading="lazy"
					/>
					<figcaption>
						<span class="diagram-label">network map</span>
						<span
							>tip: <a href={setup.diagram.image} target="_blank" rel="noopener noreferrer"
								>open the full-size image</a
							>, then copy or paste it into GPT or Claude for a deeper walkthrough, or to adapt it
							to your own setup.</span
						>
					</figcaption>
				</figure>

				<div class="product-grid">
					{#each setup.purchases as purchase, purchaseIndex (purchase.item)}
						<a
							class={`product-tile ${purchase.layout}`}
							href={purchase.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${purchase.item}, ${purchase.price}. Open product listing in a new tab`}
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
						<h3>By Category</h3>
						<dl class="receipt-list">
							{#each setup.breakdown as row (row.category)}
								<div>
									<dt>{row.category}</dt>
									<dd>{row.total}</dd>
								</div>
							{/each}
							<div class="total">
								<dt>Total</dt>
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

	.setup-diagram figcaption a {
		color: var(--color-text);
		text-decoration: underline;
		text-decoration-color: var(--color-border-strong);
		text-underline-offset: 0.18em;
		transition:
			color 160ms ease,
			text-decoration-color 160ms ease;
	}

	.setup-diagram figcaption a:hover {
		color: var(--color-link-hover);
		text-decoration-color: var(--color-link-hover);
	}

	.setup-diagram figcaption a:focus-visible {
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
