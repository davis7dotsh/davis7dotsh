<script lang="ts">
	import SocialLinks from '$lib/components/SocialLinks.svelte';

	const purchases = [
		{
			item: 'Firewalla Gold Pro',
			price: '$929.00',
			href: 'https://firewalla.com/collections/firewalla-gold/products/firewalla-gold-pro'
		},
		{
			item: 'Cable Router',
			price: '$29.99',
			href: 'https://www.amazon.com/dp/B0072JVT02'
		},
		{
			item: 'Firewalla Gold Pro Rack Mount',
			price: '$82.00',
			href: 'https://firewalla.com/products/firewalla-gold-pro-rack-mount?variant=45741344948468'
		},
		{
			item: 'Synology 10GB Adapter',
			price: '$129.99',
			href: 'https://www.amazon.com/dp/B0GK2MHQQV'
		},
		{
			item: 'Modem Spoofing Stick',
			price: '$135.00',
			href: 'https://www.amazon.com/dp/B0FT74L89Y'
		},
		{
			item: 'SSD for NAS Cache',
			price: '$249.99 × 2',
			href: 'https://www.amazon.com/dp/B0DX2G349M'
		},
		{
			item: 'Seagate 28TB Drives',
			price: '$610.00 × 3',
			href: 'https://shop.app/products/9776353509654/seagate-exos-st28000nm000c-28tb-7-2k-rpm-sata-6gb-s-512e-cmr-3?variantId=49428994588950'
		},
		{
			item: '20U Rack from Echogear',
			price: '$229.99',
			href: 'https://www.amazon.com/dp/B07YYMSFP1'
		},
		{
			item: 'Managed 10G Switch from Netgear',
			price: '$689.99',
			href: 'https://www.amazon.com/dp/B08PPYV4SH'
		},
		{
			item: 'Eero Pro 7 Router',
			price: '$299.99',
			href: 'https://www.amazon.com/dp/B0C6RBS846'
		},
		{
			item: 'Synology DS1825+',
			price: '$1,149.99',
			href: 'https://www.amazon.com/dp/B0C8SBXSTJ'
		},
		{
			item: 'Mac Mini Base Spec',
			price: '$799.00',
			href: 'https://www.apple.com/shop/buy-mac/mac-mini'
		},
		{
			item: '10G Unmanaged Switch',
			price: '$274.00',
			href: 'https://www.amazon.com/TP-Link-TL-SX1008-Multi-Gig-Protection-Auto-Negotiation/dp/B0916BNNML'
		}
	] as const;

	const breakdown = [
		{ category: 'networking & routing', total: '$2,439.97' },
		{ category: 'NAS & storage', total: '$3,609.96' },
		{ category: 'rack', total: '$229.99' },
		{ category: 'compute', total: '$799.00' }
	] as const;
</script>

<svelte:head>
	<title>My Home Server - Ben Davis</title>
	<meta name="description" content="The hardware and cost breakdown for my home server setup." />
</svelte:head>

<main class="z-10 px-3">
	<article class="content-sheet server-sheet mb-8 text-left">
		<a href="/" class="back-link mb-8">← Back to Home</a>

		<h1 class="mb-8 text-4xl font-bold tracking-tight">My Home Server</h1>

		<div class="table-shell overflow-x-auto">
			<table>
				<thead>
					<tr>
						<th>item</th>
						<th>price</th>
						<th>link</th>
					</tr>
				</thead>
				<tbody>
					{#each purchases as purchase}
						<tr>
							<td>{purchase.item}</td>
							<td class="price">{purchase.price}</td>
							<td
								><a href={purchase.href} target="_blank" rel="noopener noreferrer">view item</a></td
							>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<div class="breakdown mt-10">
			<h2 class="mb-4 text-lg font-medium">breakdown</h2>
			<dl>
				{#each breakdown as row}
					<div>
						<dt>{row.category}</dt>
						<dd>{row.total}</dd>
					</div>
				{/each}
				<div class="total">
					<dt>total</dt>
					<dd>$7,078.92</dd>
				</div>
			</dl>
		</div>
	</article>

	<SocialLinks />
</main>

<style lang="postcss">
	.server-sheet {
		max-width: min(72rem, 100%);
	}

	h1,
	h2 {
		color: var(--color-text);
	}

	.table-shell {
		border: 1px solid var(--color-border);
	}

	table {
		width: 100%;
		min-width: 42rem;
		border-collapse: collapse;
	}

	th,
	td {
		padding: 0.85rem 1rem;
		border-bottom: 1px solid var(--color-border);
		text-align: left;
	}

	th {
		background: var(--color-surface);
		color: var(--color-text-subtle);
		font-family: var(--font-family-geist-mono);
		font-size: 0.75rem;
		font-weight: 500;
	}

	td {
		color: var(--color-text-muted);
	}

	tbody tr:last-child td {
		border-bottom: 0;
	}

	.price,
	dd {
		font-family: var(--font-family-geist-mono);
		font-variant-numeric: tabular-nums;
		white-space: nowrap;
	}

	a:not(.back-link) {
		color: var(--color-link);
		border-bottom: 1px solid var(--color-border-strong);
		text-decoration: none;
		transition:
			border-color 160ms ease,
			color 160ms ease;
	}

	a:not(.back-link):hover {
		color: var(--color-link-hover);
		border-bottom-color: var(--color-link-hover);
	}

	dl {
		max-width: 28rem;
		border-top: 1px solid var(--color-border);
	}

	dl div {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.75rem 0;
		border-bottom: 1px solid var(--color-border);
	}

	dt {
		color: var(--color-text-muted);
	}

	dd {
		margin: 0;
		color: var(--color-text);
	}

	.total {
		font-weight: 600;
	}
</style>
