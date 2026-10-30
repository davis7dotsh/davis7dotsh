export const setups = [
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
				item: 'NVIDIA DGX Spark (×2)',
				price: '$4,649.99 × 2',
				href: 'https://amzn.to/4bxgOco',
				image: '/home-server/nvidia-dgx-spark.jpg',
				alt: 'Two gold NVIDIA DGX Spark personal AI supercomputers stacked together',
				layout: 'wide'
			},
			{
				item: 'ASUS 400G QSFP112 DAC Cable',
				price: '$175.99',
				href: 'https://amzn.to/4yZoDBH',
				image: '/home-server/asus-400g-qsfp112-dac-cable.png',
				alt: 'Short black braided ASUS 400G QSFP112 cable with silver connectors',
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
				layout: 'portrait'
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
				layout: 'wide'
			}
		],
		breakdown: [
			{ category: 'Networking & routing', total: '$2,661.14' },
			{ category: 'NAS & storage', total: '$3,609.96' },
			{ category: 'Rack & power', total: '$346.93' },
			{ category: 'Compute & interconnect', total: '$12,792.96' }
		],
		total: '$19,410.99'
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
