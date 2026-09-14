export const magicItems = [
	{
		kind: 'item',
		slug: 'starfall-lantern',
		name: 'Starfall Lantern',
		category: 'Wayfinding relic',
		rarity: 'Rare',
		summary: 'A blue-flamed lantern that reveals the safest path through enchanted darkness.',
		description:
			'The Starfall Lantern burns without oil and casts no ordinary shadow. When its bearer names a destination, the flame leans toward the nearest route that does not ask for a sacrifice.',
		image: '/hero-image.webp',
		imageAlt: 'A lantern glowing in a dark, ancient landscape',
		traits: ['Reveals hidden paths', 'Never needs fuel', 'Answers only sincere questions'],
		origin: 'The road-keepers of Vey'
	},
	{
		kind: 'item',
		slug: 'thornbound-grimoire',
		name: 'Thornbound Grimoire',
		category: 'Living tome',
		rarity: 'Very rare',
		summary: 'A book of field magic that adds a new page whenever its reader survives a mistake.',
		description:
			'Its leather cover is grown, not stitched, and the thorns loosen for a careful hand. The grimoire favours practical magic: warding circles, weather signs, and the names of things best left undisturbed.',
		image: '/ancient-tome.webp',
		imageAlt: 'An ancient illustrated tome resting open',
		traits: ['Records hard-won lessons', 'Scented with cedar smoke', 'Dislikes being rushed'],
		origin: 'The hedge schools of Briar March'
	},
	{
		kind: 'item',
		slug: 'moonwake-ring',
		name: 'Moonwake Ring',
		category: 'Memory charm',
		rarity: 'Uncommon',
		summary: 'A silver ring that lets a traveller revisit one forgotten detail each night.',
		description:
			'The ring is cool even beside a fire. Place it beneath your tongue before sleep and a single lost detail returns: a face, a turn in a corridor, or the promise you made before the story began.',
		image: '/grimwore-illustration.webp',
		imageAlt: 'A fantastical illustration from the Grimwore archive',
		traits: [
			'Recovers one memory nightly',
			'Cannot invent what was never known',
			'Glows under moonlight'
		],
		origin: 'The dream-collectors of Ilyra'
	},
	{
		kind: 'item',
		slug: 'emberwake-blade',
		name: 'Emberwake Blade',
		category: 'Sentient weapon',
		rarity: 'Legendary',
		summary: 'A patient sword whose edge warms when it is used to protect someone weaker.',
		description:
			'The Emberwake Blade has never accepted a crown, a title, or a boast. It remembers every hand that carried it and grows quiet when drawn for pride rather than protection.',
		image: '/ancient-parchment.webp',
		imageAlt: 'Weathered parchment with warm amber tones',
		traits: ['Kindles against true danger', 'Refuses needless cruelty', 'Carries old voices'],
		origin: 'The last forge beneath Mount Cinder'
	}
];

export const monsters = [
	{
		kind: 'monster',
		slug: 'mossback-colossus',
		name: 'Mossback Colossus',
		habitat: 'Old-growth forest',
		threat: 'High',
		summary:
			'A gentle giant until its grove is harmed, then a walking avalanche of root and stone.',
		description:
			'Mossback Colossi are older than the roads that cross their territories. They communicate through the slow creak of trees and will guide respectful travellers around danger. Leave an offering of clean water before attempting a conversation.',
		image: '/fearsome-creature.webp',
		imageAlt: 'A fearsome creature emerging from a shadowy forest',
		traits: ['Moves like a landslide', 'Protects ancient groves', 'Can sense wounded trees'],
		origin: 'The green places left off every map'
	},
	{
		kind: 'monster',
		slug: 'candle-eyed-wyrm',
		name: 'Candle-Eyed Wyrm',
		habitat: 'Ruined keeps',
		threat: 'Moderate',
		summary: 'A slender drake whose twin flames show the way to whatever a visitor most regrets.',
		description:
			'The Candle-Eyed Wyrm does not hoard gold. It collects unfinished goodbyes and stores them in the empty towers where it nests. Adventurers who follow its lights should travel in pairs and speak their names aloud.',
		image: '/hero-image.webp',
		imageAlt: 'A glowing fantasy landscape beneath a dark sky',
		traits: ['Bends light around itself', 'Feeds on unresolved grief', 'Avoids honest laughter'],
		origin: 'The bell towers of the drowned kingdom'
	},
	{
		kind: 'monster',
		slug: 'hollow-stag',
		name: 'Hollow Stag',
		habitat: 'Mist moors',
		threat: 'Unknown',
		summary: 'A silent antlered wanderer that appears wherever a promise has been broken.',
		description:
			'The Hollow Stag leaves no tracks, only pale mushrooms in the shape of commas. It is not known to attack, but those who follow it too far return with a different understanding of the word “home.”',
		image: '/grimwore-illustration.webp',
		imageAlt: 'A mythic creature rendered in the archive illustration style',
		traits: ['Crosses impossible distances', 'Drawn to broken vows', 'Never seen in full daylight'],
		origin: 'The mist moors beyond the ninth milestone'
	},
	{
		kind: 'monster',
		slug: 'ashen-mireling',
		name: 'Ashen Mireling',
		habitat: 'Volcanic wetlands',
		threat: 'Low',
		summary: 'A palm-sized marsh spirit that trades small favours for stories it has never heard.',
		description:
			'Ashen Mirelings are mischievous rather than malicious. Their grey footprints mark safe ground through a bog, provided the traveller has offered a new story in return. Repeated stories are met with dramatic, wet sulking.',
		image: '/ancient-parchment.webp',
		imageAlt: 'An aged parchment texture used in the field guide',
		traits: ['Marks safe ground', 'Collects stories', 'Can hide in a teacup'],
		origin: 'The warm marshes beneath the glass mountains'
	}
];

export const allEntries = [...magicItems, ...monsters];
