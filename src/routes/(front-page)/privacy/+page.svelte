<svelte:head>
	<title>Privacy notes — The Big Grimoire</title>
	<meta name="description" content="A plain-language overview of what The Big Grimoire does and does not collect." />
</svelte:head>

<section class="privacy-hero">
	<div class="page-width">
		<p class="eyebrow">The quiet page</p>
		<h1>Privacy notes</h1>
		<p class="lead">No riddles, no fine-print maze: here is how this little archive handles information.</p>
	</div>
</section>

<section class="section">
	<div class="page-width privacy-grid">
		<article class="privacy-card">
			<p class="eyebrow">01</p>
			<h2>No account required</h2>
			<p>
				You can browse the catalogue, use search, and follow links without creating an account or
				handing over personal details.
			</p>
		</article>
		<article class="privacy-card">
			<p class="eyebrow">02</p>
			<h2>No tracking by default</h2>
			<p>
				The application does not set advertising cookies or include an analytics tracker. Search terms
				are used to show results and are not saved by the app.
			</p>
		</article>
		<article class="privacy-card">
			<p class="eyebrow">03</p>
			<h2>Hosting still matters</h2>
			<p>
				The service that hosts a deployed copy may keep routine technical logs such as an IP address,
				timestamp, or browser user agent. Check that provider's policy for its own details.
			</p>
		</article>
		<article class="privacy-card">
			<p class="eyebrow">04</p>
			<h2>Links leave the archive</h2>
			<p>
				Links to GitHub or other sites take you to services with their own practices. We do not control
				what happens after you follow one.
			</p>
		</article>
	</div>
</section>

<section class="section privacy-footer">
	<div class="page-width prose">
		<h2>Questions or corrections?</h2>
		<p>
			If the archive changes how it handles information, this page will change with it. For questions,
			<a href="/contact">contact the scribe</a>.
		</p>
	</div>
</section>

<style>
	.privacy-hero {
		padding-block: clamp(4rem, 9vw, 7rem);
		background:
			linear-gradient(90deg, rgba(23, 21, 26, 0.96), rgba(23, 21, 26, 0.76)),
			url('/ancient-parchment.webp') center / cover;
	}

	.privacy-hero h1 {
		margin-bottom: 1rem;
	}

	.privacy-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
	}

	.privacy-card {
		min-height: 14rem;
		padding: clamp(1.5rem, 4vw, 2.5rem);
		border: 1px solid rgba(215, 173, 74, 0.2);
		border-radius: 0.65rem;
		background: var(--ink-raised);
	}

	.privacy-card h2 {
		margin-bottom: 0.75rem;
		font-size: 1.7rem;
	}

	.privacy-card p:last-child {
		margin-bottom: 0;
		color: var(--parchment-muted);
	}

	.privacy-footer {
		padding-top: 0;
	}

	@media (max-width: 680px) {
		.privacy-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
