<script>
	import '../app.css';
	import Footer from './Footer.svelte';
	import Navbar from './Navbar.svelte';
</script>

<svelte:head>
	<meta
		name="description"
		content="The Big Grimoire is a living field guide to enchanted relics, strange beasts, and the lore between them."
	/>
	<meta name="theme-color" content="#17151a" />
</svelte:head>

<a class="skip-link" href="#main-content">Skip to the grimoire</a>

<div class="site-shell">
	<Navbar />
	<main id="main-content" class="site-main">
		<slot />
	</main>
	<Footer />
</div>

<style>
	.skip-link {
		position: fixed;
		top: 0.75rem;
		left: 0.75rem;
		z-index: 20;
		padding: 0.65rem 0.9rem;
		border-radius: 0.35rem;
		background: var(--gold);
		color: var(--ink);
		font-weight: 800;
		transform: translateY(-160%);
		transition: transform 160ms ease;
	}

	.skip-link:focus {
		transform: translateY(0);
	}
</style>
