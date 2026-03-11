<script lang="ts">
	import logo from '$lib/svg/my-logo.svg';
</script>

<svelte:head>
	<title>OG Image - Ben Davis</title>
	<style>
		body,
		html {
			margin: 0;
			padding: 0;
			overflow: hidden;
			background: #000;
		}
		/* override the site layout to center the card */
		body > div > div {
			all: unset;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100vw;
			height: 100vh;
		}
	</style>
</svelte:head>

<!-- 1200x630 OG card, self-contained -->
<div class="og-card">
	<!-- grid pattern layer, masked to fade diagonally from bottom-right -->
	<div class="og-grid"></div>

	<!-- content -->
	<div class="og-content">
		<!-- top-left: logo + name -->
		<div class="og-top">
			<img src={logo} alt="Ben Davis logo" class="og-logo" />
			<div class="og-text">
				<h1 class="og-name">Ben Davis</h1>
				<p class="og-tagline">developer, youtuber, and theo's manager</p>
			</div>
		</div>

		<!-- bottom-right: subtle domain -->
		<div class="og-bottom">
			<span class="og-domain">davis7.sh</span>
		</div>
	</div>
</div>

<style>
	.og-card {
		width: 1200px;
		height: 630px;
		background: #0a0a0a;
		position: relative;
		overflow: hidden;
		font-family:
			'Geist',
			system-ui,
			-apple-system,
			sans-serif;
	}

	.og-grid {
		position: absolute;
		inset: 0;
		background-image: url('/grid.svg');
		background-repeat: repeat;
		background-size: 24px 24px;
		/* diagonal fade: transparent top-left, visible bottom-right */
		mask-image: linear-gradient(
			135deg,
			transparent 20%,
			rgba(0, 0, 0, 0.15) 40%,
			rgba(0, 0, 0, 0.6) 70%,
			rgba(0, 0, 0, 1) 100%
		);
		-webkit-mask-image: linear-gradient(
			135deg,
			transparent 20%,
			rgba(0, 0, 0, 0.15) 40%,
			rgba(0, 0, 0, 0.6) 70%,
			rgba(0, 0, 0, 1) 100%
		);
		opacity: 1;
	}

	/* subtle radial glow in bottom-right to warm the grid area */
	.og-card::before {
		content: '';
		position: absolute;
		bottom: -80px;
		right: -80px;
		width: 600px;
		height: 600px;
		background: radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 70%);
		pointer-events: none;
		z-index: 1;
	}

	.og-content {
		position: relative;
		z-index: 2;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 72px 80px;
		box-sizing: border-box;
	}

	.og-top {
		display: flex;
		align-items: flex-start;
		gap: 28px;
	}

	.og-logo {
		width: 72px;
		height: auto;
		flex-shrink: 0;
		margin-top: 2px;
	}

	.og-text {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.og-name {
		margin: 0;
		font-size: 52px;
		font-weight: 700;
		letter-spacing: -0.03em;
		color: #fafafa;
		line-height: 1.1;
	}

	.og-tagline {
		margin: 0;
		font-size: 22px;
		font-weight: 400;
		color: #737373;
		line-height: 1.4;
		letter-spacing: -0.01em;
	}

	.og-bottom {
		display: flex;
		justify-content: flex-end;
	}

	.og-domain {
		font-size: 18px;
		font-weight: 500;
		color: #404040;
		letter-spacing: 0.02em;
	}
</style>
