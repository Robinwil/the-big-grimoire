<script>
	import EntryCard from '$lib/components/EntryCard.svelte';
	import { magicItems } from '$lib/grimoire.js';

	let search = '';
	let rarity = 'All';
	const rarityOptions = ['All', ...new Set(magicItems.map((entry) => entry.rarity))];

	$: normalizedSearch = search.trim().toLowerCase();
	$: filteredItems = magicItems.filter((entry) => {
		const matchesSearch =
			!normalizedSearch ||
			`${entry.name} ${entry.category} ${entry.summary}`.toLowerCase().includes(normalizedSearch);
		const matchesRarity = rarity === 'All' || entry.rarity === rarity;

		return matchesSearch && matchesRarity;
	});
</script>

<svelte:head>
	<title>Magic items — The Big Grimoire</title>
	<meta name="description" content="Browse enchanted relics, living tomes, charms, and weapons from the archive." />
</svelte:head>

<section class="catalog-hero">
	<div class="page-width">
		<p class="eyebrow">The relic shelves</p>
		<h1>Magic items</h1>
		<p class="lead">
			Tools, treasures, and trouble with a little enchantment left in them. Search the shelves or filter
			by the scribe's field classification.
		</p>
	</div>
</section>

<section class="section catalog-section" aria-labelledby="items-heading">
	<div class="page-width">
		<div class="catalog-toolbar">
			<div>
				<label for="item-search">Search magic items</label>
				<input id="item-search" type="search" bind:value={search} placeholder="Try “lantern”" />
			</div>
			<div>
				<label for="item-rarity">Rarity</label>
				<select id="item-rarity" bind:value={rarity}>
					{#each rarityOptions as option}
						<option value={option}>{option}</option>
					{/each}
				</select>
			</div>
			<p class="result-count" aria-live="polite">
				{filteredItems.length} {filteredItems.length === 1 ? 'entry' : 'entries'}
			</p>
		</div>

		<h2 id="items-heading" class="sr-only">Magic item entries</h2>
		{#if filteredItems.length}
			<div class="entry-grid">
				{#each filteredItems as entry}
					<EntryCard {entry} />
				{/each}
			</div>
		{:else}
			<div class="empty-state">
				<h2>No relics found</h2>
				<p>Try a different name or return the rarity filter to “All”.</p>
			</div>
		{/if}
	</div>
</section>

<style>
	.catalog-hero {
		padding-block: clamp(3.5rem, 8vw, 6rem);
		background:
			linear-gradient(90deg, rgba(23, 21, 26, 0.97), rgba(23, 21, 26, 0.7)),
			url('/ancient-tome.webp') center / cover;
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
