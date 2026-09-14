<script>
	import { page } from '$app/stores';
	import EntryCard from '$lib/components/EntryCard.svelte';
	import { allEntries } from '$lib/grimoire.js';

	$: query = $page.url.searchParams.get('q')?.trim() ?? '';
	$: normalizedQuery = query.toLowerCase();
	$: results = normalizedQuery
		? allEntries.filter((entry) =>
				`${entry.name} ${entry.category ?? ''} ${entry.habitat ?? ''} ${entry.summary}`
					.toLowerCase()
					.includes(normalizedQuery)
			)
		: allEntries;
</script>

<svelte:head>
	<title>Search the archive — The Big Grimoire</title>
	<meta name="description" content="Search every magic item and monster in The Big Grimoire." />
</svelte:head>

<section class="search-page section">
	<div class="page-width">
		<p class="eyebrow">The index</p>
		<h1>{query ? `Results for “${query}”` : 'Search the archive'}</h1>
		<p class="lead">
			{query
				? `${results.length} ${results.length === 1 ? 'entry' : 'entries'} answer the call.`
				: 'Search by name, place, or the trouble an entry tends to bring.'}
		</p>

		<form class="archive-search" action="/search" method="get" role="search">
			<label for="archive-search-input">Search entries</label>
			<div>
				<input
					id="archive-search-input"
					name="q"
					type="search"
					value={query}
					placeholder="Try “moon”, “forest”, or “rare”"
					autocomplete="off"
				/>
				<button class="button" type="submit">Search</button>
			</div>
		</form>

		{#if results.length}
			<div class="entry-grid">
				{#each results as entry (entry.slug)}
					<EntryCard {entry} />
				{/each}
			</div>
		{:else}
			<div class="empty-state">
				<h2>The shelves are silent</h2>
				<p>Try a broader word, or search for a place like “forest” or “moors”.</p>
			</div>
		{/if}
	</div>
</section>

<style>
	.search-page {
		min-height: 44rem;
		background:
			linear-gradient(90deg, rgba(23, 21, 26, 0.97), rgba(23, 21, 26, 0.82)),
			url('/ancient-parchment.webp') center / cover;
	}

	.search-page h1 {
		margin-bottom: 1rem;
	}

	.archive-search {
		max-width: 52rem;
		margin: 2.5rem 0;
	}

	.archive-search label {
		display: block;
		margin-bottom: 0.45rem;
		color: var(--gold-bright);
		font-size: 0.8rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.archive-search > div {
		display: flex;
		gap: 0.6rem;
	}

	.archive-search input {
		flex: 1;
		min-width: 0;
		padding: 0.8rem 0.9rem;
		border: 1px solid var(--line);
		border-radius: 0.4rem;
		background: var(--ink-raised);
		color: var(--parchment);
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

	@media (max-width: 500px) {
		.archive-search > div {
			align-items: stretch;
			flex-direction: column;
		}
	}
</style>
