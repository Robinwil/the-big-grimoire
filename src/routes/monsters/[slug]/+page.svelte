<script>
	import EntryDetail from '$lib/components/EntryDetail.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.entry.name} — Monsters — The Big Grimoire</title>
	<meta name="description" content={data.entry.summary} />
</svelte:head>

<EntryDetail entry={data.entry} />
