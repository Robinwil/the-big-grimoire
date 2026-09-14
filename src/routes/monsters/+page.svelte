<script>
	import EntryCard from '$lib/components/EntryCard.svelte';
	import { monsters } from '$lib/grimoire.js';

	let search = '';
	let habitat = 'All';
	const habitatOptions = ['All', ...new Set(monsters.map((entry) => entry.habitat))];

	$: normalizedSearch = search.trim().toLowerCase();
	$: filteredMonsters = monsters.filter((entry) => {
		const matchesSearch =
			!normalizedSearch ||
			`${entry.name} ${entry.habitat} ${entry.summary}`.toLowerCase().includes(normalizedSearch);
		const matchesHabitat = habitat === 'All' || entry.habitat === habitat;

		return matchesSearch && matchesHabitat;
	});
</script>

<svelte:head>
	<title>Monsters — The Big Grimoire</title>
	<meta name="description" content="Meet the strange beasts, patient giants, and wandering spirits in the archive." />
</svelte:head>

<section class="catalog-hero">
	<div class="page-width">
		<p class="eyebrow">The bestiary</p>
		<h1>Monsters</h1>
		<p class="lead">
			Not every monster wants a fight. Learn the signs, respect the habitat, and read the field notes
			before you draw a sword.
		</p>
	</div>
</section>

<section class="section catalog-section" aria-labelledby="monsters-heading">
	<div class="page-width">
		<div class="catalog-toolbar">
			<div>
				<label for="monster-search">Search monsters</label>
				<input id="monster-search" type="search" bind:value={search} placeholder="Try “forest”" />
			</div>
			<div>
				<label for="monster-habitat">Habitat</label>
				<select id="monster-habitat" bind:value={habitat}>
					{#each habitatOptions as option}
						<option value={option}>{option}</option>
					{/each}
				</select>
			</div>
			<p class="result-count" aria-live="polite">
				{filteredMonsters.length} {filteredMonsters.length === 1 ? 'entry' : 'entries'}
			</p>
		</div>

		<h2 id="monsters-heading" class="sr-only">Monster entries</h2>
		{#if filteredMonsters.length}
			<div class="entry-grid">
				{#each filteredMonsters as entry}
					<EntryCard {entry} />
				{/each}
			</div>
		{:else}
			<div class="empty-state">
				<h2>No sightings found</h2>
				<p>Try a different name or return the habitat filter to “All”.</p>
			</div>
		{/if}
	</div>
</section>

<style>
	.catalog-hero {
		padding-block: clamp(3.5rem, 8vw, 6rem);
		background:
			linear-gradient(90deg, rgba(23, 21, 26, 0.97), rgba(23, 21, 26, 0.7)),
			url('/fearsome-creature.webp') center / cover;
	}

	.catalog-hero h1 {
		margin-bottom: 1rem;
	}

	.catalog-section {
		padding-top: 2.5rem;
	}

	.catalog-toolbar {
		display: flex;
		align-items: end;
		gap: 1rem;
		padding: 1rem;
		border: 1px solid rgba(215, 173, 74, 0.2);
		border-radius: 0.6rem;
		margin-bottom: 2rem;
		background: var(--ink-soft);
	}

	.catalog-toolbar > div {
		flex: 1;
	}

	.catalog-toolbar label {
		display: block;
		margin-bottom: 0.35rem;
		color: var(--gold-bright);
		font-size: 0.78rem;
		font-weight: 800;
		letter-spacing: 0.05em;
	}

	.catalog-toolbar input,
	.catalog-toolbar select {
		width: 100%;
		padding: 0.7rem 0.75rem;
		border: 1px solid rgba(215, 173, 74, 0.3);
		border-radius: 0.35rem;
		background: var(--ink-raised);
		color: var(--parchment);
	}

	.result-count {
		flex: 0 0 auto;
		margin: 0 0 0.7rem;
		color: var(--parchment-muted);
		font-size: 0.85rem;
		white-space: nowrap;
	}

	.empty-state {
		padding: 3rem 1rem;
		border: 1px dashed var(--line);
		border-radius: 0.6rem;
		text-align: center;
	}

	.empty-state h2 {
		margin-bottom: 0.5rem;
		font-size: 1.8rem;
	}

	.empty-state p {
		margin-bottom: 0;
		color: var(--parchment-muted);
	}

	@media (max-width: 620px) {
		.catalog-toolbar {
			align-items: stretch;
			flex-direction: column;
		}

		.result-count {
			margin: 0;
		}
	}
</style>
