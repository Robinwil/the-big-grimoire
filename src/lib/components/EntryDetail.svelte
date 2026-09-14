<script>
	export let entry;

	$: collectionPath = entry.kind === 'item' ? 'magic-items' : 'monsters';
	$: collectionName = entry.kind === 'item' ? 'Magic items' : 'Monsters';
	$: descriptor =
		entry.kind === 'item' ? `${entry.category} · ${entry.rarity}` : `${entry.habitat} · ${entry.threat} threat`;
</script>

<article class="detail page-width">
	<a class="back-link" href={`/${collectionPath}`}>← Back to {collectionName.toLowerCase()}</a>

	<div class="detail-grid">
		<figure class="detail-art">
			<img src={entry.image} alt={entry.imageAlt} width="900" height="600" />
			<figcaption>Plate from the travelling archive</figcaption>
		</figure>

		<div class="detail-copy">
			<p class="eyebrow">{descriptor}</p>
			<h1>{entry.name}</h1>
			<p class="lead">{entry.summary}</p>
			<p>{entry.description}</p>

			<dl class="metadata">
				<div>
					<dt>{entry.kind === 'item' ? 'Provenance' : 'Known range'}</dt>
					<dd>{entry.origin}</dd>
				</div>
				<div>
					<dt>{entry.kind === 'item' ? 'Field classification' : 'Approach'}</dt>
					<dd>{entry.kind === 'item' ? entry.rarity : entry.threat}</dd>
				</div>
			</dl>

			<h2>Field marks</h2>
			<ul class="traits">
				{#each entry.traits as trait}
					<li>{trait}</li>
				{/each}
			</ul>
		</div>
	</div>
</article>

<style>
	.detail {
		padding-block: clamp(3rem, 8vw, 7rem);
	}

	.back-link {
		display: inline-block;
		margin-bottom: 2rem;
		font-weight: 800;
		text-decoration: none;
	}

	.detail-grid {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
		gap: clamp(2rem, 7vw, 6rem);
		align-items: start;
	}

	.detail-art {
		position: sticky;
		top: 7rem;
		margin: 0;
	}

	.detail-art img {
		width: 100%;
		aspect-ratio: 3 / 2;
		border: 1px solid var(--line);
		border-radius: 0.7rem;
		box-shadow: var(--shadow);
		object-fit: cover;
	}

	.detail-art figcaption {
		margin-top: 0.65rem;
		color: #9b9180;
		font-size: 0.78rem;
		font-style: italic;
	}

	.detail-copy h1 {
		margin-bottom: 1rem;
	}

	.detail-copy > p:not(.eyebrow):not(.lead) {
		color: var(--parchment-muted);
		font-size: 1.05rem;
	}

	.metadata {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
		padding-block: 1.3rem;
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
		margin-block: 2rem;
	}

	.metadata div {
		min-width: 0;
	}

	dt {
		margin-bottom: 0.25rem;
		color: var(--gold-bright);
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	dd {
		margin: 0;
		color: var(--parchment);
	}

	.detail-copy h2 {
		margin-bottom: 0.8rem;
		font-size: 1.7rem;
	}

	.traits {
		display: flex;
		flex-wrap: wrap;
		gap: 0.55rem;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.traits li {
		padding: 0.45rem 0.65rem;
		border: 1px solid var(--line);
		border-radius: 999px;
		color: var(--parchment-muted);
		font-size: 0.88rem;
	}

	@media (max-width: 760px) {
		.detail-grid {
			grid-template-columns: 1fr;
		}

		.detail-art {
			position: static;
		}
	}

	@media (max-width: 460px) {
		.metadata {
			grid-template-columns: 1fr;
		}
	}
</style>
