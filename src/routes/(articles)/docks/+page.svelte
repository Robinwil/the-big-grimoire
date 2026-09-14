<svelte:head>
	<title>Field notes — The Big Grimoire</title>
	<meta name="description" content="Notes from the margins of The Big Grimoire." />
</svelte:head>

<section class="notes-page section">
	<div class="page-width notes-layout">
		<div>
			<p class="eyebrow">The scribe's dock</p>
			<h1>Field notes</h1>
			<p class="lead">
				A place for unfinished thoughts, practical prompts, and the small observations that make a
				world feel lived in.
			</p>
		</div>

		<div class="notes-list">
			<article>
				<p class="eyebrow">Note 001 · On beginnings</p>
				<h2>Start with the detail that refuses to leave you alone.</h2>
				<p>
					A good entry rarely starts with a complete biography. It starts with a sound beneath the
					floorboards, a ring that is warm in winter, or a path that only appears when you stop
					looking for it.
				</p>
			</article>
			<article>
				<p class="eyebrow">Note 002 · On encounters</p>
				<h2>Not every monster is an obstacle.</h2>
				<p>
					Before deciding what a creature guards, ask what it is protecting. A change in question
					can turn a battle scene into a bargain, a rescue, or the beginning of an unlikely
					friendship.
				</p>
			</article>
			<article>
				<p class="eyebrow">Note 003 · On the margins</p>
				<h2>Leave one blank line for the next traveller.</h2>
				<p>
					The archive grows through curiosity. Bring your own interpretation, mark what does not
					fit, and let the unfinished edges remain invitations rather than errors.
				</p>
			</article>
		</div>
	</div>
</section>

<style>
	.notes-page {
		background:
			linear-gradient(90deg, rgba(23, 21, 26, 0.96), rgba(23, 21, 26, 0.8)),
			url('/ancient-parchment.webp') center / cover;
	}

	.notes-layout {
		display: grid;
		grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
		gap: clamp(2rem, 8vw, 8rem);
	}

	.notes-layout h1 {
		margin-bottom: 1rem;
	}

	.notes-list {
		display: grid;
		gap: 1rem;
	}

	.notes-list article {
		padding: clamp(1.5rem, 4vw, 2.25rem);
		border-left: 2px solid var(--gold);
		background: rgba(42, 37, 45, 0.85);
	}

	.notes-list h2 {
		margin-bottom: 0.75rem;
		font-size: clamp(1.5rem, 3vw, 2.2rem);
	}

	.notes-list article > p:last-child {
		margin-bottom: 0;
		color: var(--parchment-muted);
	}

	@media (max-width: 760px) {
		.notes-layout {
			grid-template-columns: 1fr;
		}
	}
</style>
