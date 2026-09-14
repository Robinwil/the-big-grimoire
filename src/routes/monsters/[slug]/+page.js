import { error } from '@sveltejs/kit';
import { monsters } from '$lib/grimoire.js';

export function load({ params }) {
	const entry = monsters.find((monster) => monster.slug === params.slug);

	if (!entry) {
		error(404, 'That creature has not been sighted in the archive.');
	}

	return { entry };
}
