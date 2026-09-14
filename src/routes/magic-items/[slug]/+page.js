import { error } from '@sveltejs/kit';
import { magicItems } from '$lib/grimoire.js';

export function load({ params }) {
	const entry = magicItems.find((item) => item.slug === params.slug);

	if (!entry) {
		error(404, 'That relic has not been catalogued.');
	}

	return { entry };
}
