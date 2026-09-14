<script>
	import { resolve } from '$app/paths';

	export let entry;

	$: collectionPath = entry.kind === 'item' ? 'magic-items' : 'monsters';
	$: descriptor =
		entry.kind === 'item'
			? `${entry.category} · ${entry.rarity}`
			: `${entry.habitat} · ${entry.threat} threat`;
</script>

<article class="entry-card">
	<a class="entry-card__link" href={resolve(`/${collectionPath}/${entry.slug}`)}>
		<div class="entry-card__image">
			<img src={entry.image} alt={entry.imageAlt} loading="lazy" width="640" height="400" />
		</div>
		<div class="entry-card__content">
			<p class="eyebrow">{descriptor}</p>
			<h3>{entry.name}</h3>
			<p>{entry.summary}</p>
			<span class="text-link">Open entry <span aria-hidden="true">→</span></span>
		</div>
	</a>
</article>
