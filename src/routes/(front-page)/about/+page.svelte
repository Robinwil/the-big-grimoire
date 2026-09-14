<script>
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>About the archive — The Big Grimoire</title>
	<meta
		name="description"
		content="Learn why The Big Grimoire is a small, useful, and open-ended field guide to magic and mystery."
	/>
</svelte:head>

<section class="about-hero">
	<div class="page-width about-hero-grid">
		<div>
			<p class="eyebrow">About the archive</p>
			<h1>A grimoire for the road ahead.</h1>
			<p class="lead">
				The Big Grimoire keeps the spirit of an old fantasy compendium while making its pages easy
				to search, share, and add to.
			</p>
		</div>
		<img
			src="/grimwore-illustration.webp"
			alt="An illustrated page from the Grimwore"
			width="900"
			height="700"
		/>
	</div>
</section>

<section class="section">
	<div class="page-width story-grid">
		<img
			src="/ancient-tome.webp"
			alt="An ancient tome open on a wooden desk"
			width="800"
			height="600"
		/>
		<div class="prose">
			<p class="eyebrow">A living record</p>
			<h2>Useful first. Enchanted always.</h2>
			<p>
				This archive began with a simple affection for magic items, strange creatures, and the
				feeling of finding a handwritten note in the margin of a well-loved book. Each entry aims to
				give you enough detail to spark a story without closing the door on your own imagination.
			</p>
			<p>
				The catalogue is deliberately growing. Some pages are polished, some are only field notes,
				and some are waiting for the right detail to arrive. That incompleteness is part of the
				charm: a grimoire should feel like it has travelled.
			</p>
		</div>
	</div>
</section>

<section class="section principles-section">
	<div class="page-width">
		<div class="section-heading">
			<div>
				<p class="eyebrow">The scribe's principles</p>
				<h2>Three promises for every page.</h2>
			</div>
		</div>
		<div class="principles-grid">
			<article>
				<span>01</span>
				<h3>Make it findable</h3>
				<p>
					Clear names, useful categories, and a search that gets out of the way when you know what
					you seek.
				</p>
			</article>
			<article>
				<span>02</span>
				<h3>Leave room to play</h3>
				<p>
					Descriptions offer hooks and possibilities rather than pretending there is only one true
					story.
				</p>
			</article>
			<article>
				<span>03</span>
				<h3>Keep the lantern lit</h3>
				<p>
					Fast pages, readable contrast, and thoughtful defaults make the archive welcoming to more
					travellers.
				</p>
			</article>
		</div>
	</div>
</section>

<section class="section about-cta">
	<div class="page-width cta-panel">
		<div>
			<p class="eyebrow">Begin anywhere</p>
			<h2>What will you find?</h2>
		</div>
		<div class="button-row">
			<a class="button" href={resolve('/magic-items')}>Browse relics</a>
			<a class="button secondary" href={resolve('/monsters')}>Browse creatures</a>
		</div>
	</div>
</section>

<style>
	.about-hero {
		padding-block: clamp(4rem, 9vw, 7rem);
		background:
			linear-gradient(90deg, rgba(23, 21, 26, 0.96), rgba(23, 21, 26, 0.7)),
			url('/ancient-parchment.webp') center / cover;
	}

	.about-hero-grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
		gap: clamp(2rem, 8vw, 8rem);
		align-items: center;
	}

	.about-hero h1 {
		max-width: 35rem;
		margin-bottom: 1.2rem;
	}

	.about-hero img {
		width: 100%;
		aspect-ratio: 9 / 7;
		border: 1px solid var(--line);
		border-radius: 0.7rem;
		box-shadow: var(--shadow);
		object-fit: cover;
	}

	.story-grid {
		display: grid;
		grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
		gap: clamp(2rem, 8vw, 8rem);
		align-items: center;
	}

	.story-grid > img {
		width: 100%;
		aspect-ratio: 4 / 3;
		border: 1px solid var(--line);
		border-radius: 0.7rem;
		object-fit: cover;
	}

	.principles-section {
		background: var(--ink-soft);
	}

	.principles-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1rem;
	}

	.principles-grid article {
		padding: 1.5rem;
		border-top: 2px solid var(--gold);
		background: rgba(255, 255, 255, 0.03);
	}

	.principles-grid span {
		color: var(--gold-bright);
		font-family: var(--font-display);
		font-size: 1.4rem;
	}

	.principles-grid h3 {
		margin: 1rem 0 0.6rem;
	}

	.principles-grid p {
		margin-bottom: 0;
		color: var(--parchment-muted);
	}

	.about-cta {
		padding-top: 0;
	}

	.cta-panel {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		padding: 2rem;
		border: 1px solid var(--line);
		border-radius: 0.7rem;
		background: var(--ink-raised);
	}

	.cta-panel h2 {
		margin-bottom: 0;
	}

	@media (max-width: 760px) {
		.about-hero-grid,
		.story-grid,
		.principles-grid {
			grid-template-columns: 1fr;
		}

		.about-hero img {
			max-width: 34rem;
		}

		.cta-panel {
			align-items: flex-start;
			flex-direction: column;
		}
	}
</style>
