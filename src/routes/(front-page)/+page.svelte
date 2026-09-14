<script>
	import EntryCard from '$lib/components/EntryCard.svelte';
	import { magicItems, monsters } from '$lib/grimoire.js';

	const featuredEntries = [magicItems[0], magicItems[1], monsters[0]];
</script>

<svelte:head>
	<title>The Big Grimoire — Magic items and monsters</title>
	<meta
		name="description"
		content="Explore a living field guide to enchanted relics, strange beasts, and the lore between them."
	/>
</svelte:head>

<section class="home-hero">
	<div class="page-width hero-grid">
		<div class="hero-copy">
			<p class="eyebrow">A field guide for the curious</p>
			<h1>Leave room for wonder.</h1>
			<p class="lead">
				The Big Grimoire is a growing archive of magic items, monsters, and the stories that make them
				worth remembering.
			</p>
			<div class="button-row">
				<a class="button" href="/magic-items">Explore magic items</a>
				<a class="button secondary" href="/monsters">Meet the monsters</a>
			</div>
			<dl class="hero-stats">
				<div>
					<dt>{magicItems.length}</dt>
					<dd>relics catalogued</dd>
				</div>
				<div>
					<dt>{monsters.length}</dt>
					<dd>creatures observed</dd>
				</div>
				<div>
					<dt>∞</dt>
					<dd>stories still unwritten</dd>
				</div>
			</dl>
		</div>

		<figure class="hero-art">
			<img
				src="/hero-image.webp"
				alt="An otherworldly landscape waiting to be explored"
				width="900"
				height="700"
			/>
			<figcaption>Every good expedition begins with a page left blank.</figcaption>
		</figure>
	</div>
</section>

<section class="section welcome-section" aria-labelledby="welcome-heading">
	<div class="page-width welcome-grid">
		<div>
			<p class="eyebrow">The scribe's invitation</p>
			<h2 id="welcome-heading">A useful grimoire, not a dusty one.</h2>
		</div>
		<div class="welcome-copy">
			<p>
				Search by name, browse by category, or follow a curious detail into the next entry. The archive
				is intentionally small enough to wander and structured enough to be useful at the table, on the
				trail, or during a quiet night by the fire.
			</p>
			<a class="text-link" href="/about">Learn how the archive is kept <span aria-hidden="true">→</span></a>
		</div>
	</div>
</section>

<section class="section featured-section" aria-labelledby="featured-heading">
	<div class="page-width">
		<div class="section-heading">
			<div>
				<p class="eyebrow">Recently illuminated</p>
				<h2 id="featured-heading">Turn a page</h2>
			</div>
			<a class="text-link" href="/search?q=">Browse the whole archive <span aria-hidden="true">→</span></a>
		</div>

		<div class="entry-grid">
			{#each featuredEntries as entry}
				<EntryCard {entry} />
			{/each}
		</div>
	</div>
</section>

<section class="section notes-section" aria-labelledby="notes-heading">
	<div class="page-width notes-panel">
		<div>
			<p class="eyebrow">From the margins</p>
			<h2 id="notes-heading">The best discoveries are rarely tidy.</h2>
			<p>
				Read the scribe's field notes for practical ways to use the archive, gentle warnings about
				unfinished lore, and an invitation to help shape what comes next.
			</p>
		</div>
		<a class="button rust" href="/docks">Read the field notes</a>
	</div>
</section>

<style>
	.home-hero {
		position: relative;
		overflow: hidden;
		padding-block: clamp(4rem, 10vw, 8rem);
		background:
			linear-gradient(90deg, rgba(23, 21, 26, 0.98) 0%, rgba(23, 21, 26, 0.88) 45%, rgba(23, 21, 26, 0.35)),
			url('/ancient-parchment.webp') center / cover;
	}

	.hero-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
		gap: clamp(2.5rem, 7vw, 7rem);
		align-items: center;
	}

	.hero-copy h1 {
		max-width: 38rem;
		margin-bottom: 1.25rem;
		color: var(--parchment);
	}

	.hero-copy .lead {
		margin-bottom: 2rem;
	}

	.hero-stats {
		display: flex;
		flex-wrap: wrap;
		gap: 1.8rem;
		padding-top: 2.5rem;
		margin: 0;
	}

	.hero-stats div {
		display: grid;
		gap: 0.1rem;
	}

	.hero-stats dt {
		color: var(--gold-bright);
		font-family: var(--font-display);
		font-size: 1.8rem;
	}

	.hero-stats dd {
		margin: 0;
		color: var(--parchment-muted);
		font-size: 0.75rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.hero-art {
		position: relative;
		margin: 0;
		transform: rotate(1.5deg);
	}

	.hero-art::before {
		position: absolute;
		inset: -0.8rem;
		z-index: -1;
		border: 1px solid var(--line);
		border-radius: 0.8rem;
		content: '';
		transform: rotate(-3deg);
	}

	.hero-art img {
		width: 100%;
		aspect-ratio: 9 / 7;
		border: 1px solid rgba(243, 234, 213, 0.24);
		border-radius: 0.7rem;
		box-shadow: var(--shadow);
		object-fit: cover;
	}

	.hero-art figcaption {
		padding-top: 0.8rem;
		color: var(--parchment-muted);
		font-size: 0.82rem;
		font-style: italic;
		text-align: center;
	}

	.welcome-section {
		background: var(--ink-soft);
	}

	.welcome-grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: clamp(2rem, 7vw, 7rem);
		align-items: end;
	}

	.welcome-grid h2 {
		max-width: 28rem;
		margin-bottom: 0;
	}

	.welcome-copy {
		max-width: 34rem;
		color: var(--parchment-muted);
	}

	.welcome-copy p {
		margin-bottom: 1.2rem;
	}

	.featured-section {
		background: var(--ink);
	}

	.section-heading {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.section-heading h2 {
		margin-bottom: 0;
	}

	.notes-section {
		padding-top: 0;
		background: var(--ink);
	}

	.notes-panel {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		padding: clamp(2rem, 5vw, 4rem);
		border: 1px solid var(--line);
		border-radius: 0.8rem;
		background:
			linear-gradient(120deg, rgba(215, 173, 74, 0.13), transparent 55%),
			var(--ink-raised);
	}

	.notes-panel h2 {
		max-width: 36rem;
		margin-bottom: 0.8rem;
	}

	.notes-panel p:not(.eyebrow) {
		max-width: 38rem;
		margin-bottom: 0;
		color: var(--parchment-muted);
	}

	@media (max-width: 760px) {
		.hero-grid,
		.welcome-grid {
			grid-template-columns: 1fr;
		}

		.hero-art {
			max-width: 36rem;
			margin-inline: auto;
		}

		.notes-panel {
			align-items: flex-start;
			flex-direction: column;
		}
	}

	@media (max-width: 520px) {
		.section-heading {
			align-items: flex-start;
			flex-direction: column;
		}
	}
</style>
