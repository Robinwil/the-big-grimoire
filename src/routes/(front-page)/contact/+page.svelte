<svelte:head>
	<title>Contact the scribe — The Big Grimoire</title>
	<meta name="description" content="Share a correction, a story hook, or a bright idea for The Big Grimoire." />
</svelte:head>

<section class="contact-page section">
	<div class="page-width contact-grid">
		<div>
			<p class="eyebrow">Send a raven</p>
			<h1>Contact the scribe.</h1>
			<p class="lead">
				Found a crooked detail, a broken link, or a creature that deserves a page? The archive is
				better when curious people leave notes in the margin.
			</p>
		</div>
		<div class="contact-card">
			<h2>Choose your trail</h2>
			<p>Public corrections and ideas are easiest to follow where the work already lives.</p>
			<div class="button-row">
				<a class="button" href="https://github.com/Robinwil/the-big-grimoire/issues">Open an issue</a>
				<a class="button secondary" href="https://github.com/Robinwil/the-big-grimoire">View the repository</a>
			</div>
			<p class="contact-note">Please avoid sharing private or sensitive information in public issues.</p>
		</div>
	</div>
</section>

<style>
	.contact-page {
		min-height: 38rem;
		background:
			linear-gradient(90deg, rgba(23, 21, 26, 0.96), rgba(23, 21, 26, 0.75)),
			url('/ancient-parchment.webp') center / cover;
	}

	.contact-grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr);
		gap: clamp(2rem, 8vw, 8rem);
		align-items: center;
	}

	.contact-page h1 {
		margin-bottom: 1rem;
	}

	.contact-card {
		padding: clamp(1.5rem, 4vw, 2.5rem);
		border: 1px solid var(--line);
		border-radius: 0.7rem;
		background: rgba(42, 37, 45, 0.9);
		box-shadow: var(--shadow);
	}

	.contact-card h2 {
		margin-bottom: 0.7rem;
		font-size: 1.8rem;
	}

	.contact-card p {
		color: var(--parchment-muted);
	}

	.contact-note {
		margin: 1.5rem 0 0;
		font-size: 0.8rem;
	}

	@media (max-width: 720px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
