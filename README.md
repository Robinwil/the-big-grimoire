# The Big Grimoire

The Big Grimoire is a small, dark-fantasy field guide to magic items, monsters, and the stories between
them. It keeps the atmosphere of an old compendium while making the archive fast to search and pleasant
to explore on a phone or a wide screen.

## What is here?

- A responsive home page with a living archive feel.
- Searchable magic-item and monster catalogues.
- Detail pages for every entry, with field marks and provenance.
- Field notes, archive/about information, and plain-language privacy notes.
- A local-first UI with no runtime CSS or icon CDN dependencies.

## Develop

The project uses Svelte 5, SvelteKit 2, Vite 8, and Bun 1.4.2.

```bash
bun install
bun run dev
```

Open `http://localhost:5173` to explore the archive.

If Bun is not available, the checked-in npm lockfile works too:

```bash
npm install
npm run dev
```

## Validate

```bash
bun run lint
bun run check
bun run build
bun run test
bun run audit
```

The Playwright test command builds and serves the production app automatically. `npm run ...` can be used
instead of `bun run ...` with the npm workflow.

## Project map

```text
src/
├── app.css                         # Design tokens and shared visual language
├── lib/
│   ├── components/                 # Reusable entry cards and detail views
│   └── grimoire.js                 # The catalogue data
└── routes/
    ├── +layout.svelte              # Shared accessible app shell
    ├── magic-items/                # Relic catalogue and detail pages
    ├── monsters/                   # Bestiary and detail pages
    ├── search/                     # Cross-catalogue search
    └── (front-page)/               # Home, about, contact, and privacy pages
```

The content is intentionally easy to extend: add a record to `src/lib/grimoire.js` and the catalogue,
search, and detail views will use it automatically.
