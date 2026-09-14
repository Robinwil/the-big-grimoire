# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test.js >> mobile navigation can be opened with the keyboard-friendly toggle
- Location: tests/test.js:40:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Field notes' })
Expected: visible
Error: strict mode violation: getByRole('link', { name: 'Field notes' }) resolved to 3 elements:
    1) <a href="/" class="brand svelte-jfirkk">…</a> aka getByRole('link', { name: 'The Big Grimoire Field notes' })
    2) <a href="/docks" class="svelte-jfirkk">Field notes</a> aka getByRole('link', { name: 'Field notes', exact: true })
    3) <a href="/docks" class="button rust">Read the field notes</a> aka getByRole('link', { name: 'Read the field notes' })

Call log:
  - Expect "toBeVisible" getByRole('link', { name: 'Field notes' }) with timeout 5000ms
  - waiting for getByRole('link', { name: 'Field notes' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - link "Skip to the grimoire" [ref=e3] [cursor=pointer]:
    - /url: "#main-content"
  - generic [ref=e4]:
    - banner [ref=e5]:
      - navigation "Primary navigation" [ref=e6]:
        - link "The Big Grimoire Field notes for the curious" [ref=e7] [cursor=pointer]:
          - /url: /
          - generic [ref=e8]:
            - strong [ref=e9]: The Big Grimoire
            - generic [ref=e10]: Field notes for the curious
        - button "Toggle navigation" [expanded] [active] [ref=e11] [cursor=pointer]: ×
        - generic [ref=e13]:
          - link "Magic items" [ref=e14] [cursor=pointer]:
            - /url: /magic-items
          - link "Monsters" [ref=e15] [cursor=pointer]:
            - /url: /monsters
          - link "About" [ref=e16] [cursor=pointer]:
            - /url: /about
          - link "Field notes" [ref=e17] [cursor=pointer]:
            - /url: /docks
        - search [ref=e18]:
          - generic [ref=e19]: Search the grimoire
          - searchbox "Search the grimoire" [ref=e20]
          - button "Search the grimoire" [ref=e21] [cursor=pointer]: ⌕
    - main [ref=e22]:
      - generic [ref=e24]:
        - generic [ref=e25]:
          - paragraph [ref=e26]: A field guide for the curious
          - heading "Leave room for wonder." [level=1] [ref=e27]
          - paragraph [ref=e28]: The Big Grimoire is a growing archive of magic items, monsters, and the stories that make them worth remembering.
          - generic [ref=e29]:
            - link "Explore magic items" [ref=e30] [cursor=pointer]:
              - /url: /magic-items
            - link "Meet the monsters" [ref=e31] [cursor=pointer]:
              - /url: /monsters
          - generic [ref=e32]:
            - generic [ref=e33]:
              - term [ref=e34]: "4"
              - definition [ref=e35]: relics catalogued
            - generic [ref=e36]:
              - term [ref=e37]: "4"
              - definition [ref=e38]: creatures observed
            - generic [ref=e39]:
              - term [ref=e40]: ∞
              - definition [ref=e41]: stories still unwritten
        - figure "Every good expedition begins with a page left blank." [ref=e42]:
          - img "An otherworldly landscape waiting to be explored" [ref=e43]
      - region [ref=e45]:
        - generic [ref=e46]:
          - generic [ref=e47]:
            - paragraph [ref=e48]: The scribe's invitation
            - heading "A useful grimoire, not a dusty one." [level=2] [ref=e49]
          - generic [ref=e50]:
            - paragraph [ref=e51]: Search by name, browse by category, or follow a curious detail into the next entry. The archive is intentionally small enough to wander and structured enough to be useful at the table, on the trail, or during a quiet night by the fire.
            - link "Learn how the archive is kept" [ref=e52] [cursor=pointer]:
              - /url: /about
              - text: Learn how the archive is kept
              - generic [aria-hidden] [ref=e53]: →
      - region [ref=e54]:
        - generic [ref=e55]:
          - generic [ref=e56]:
            - generic [ref=e57]:
              - paragraph [ref=e58]: Recently illuminated
              - heading "Turn a page" [level=2] [ref=e59]
            - link "Browse the whole archive" [ref=e60] [cursor=pointer]:
              - /url: /search
              - text: Browse the whole archive
              - generic [aria-hidden] [ref=e61]: →
          - generic [ref=e62]:
            - article [ref=e63]:
              - link [ref=e64] [cursor=pointer]:
                - /url: /magic-items/starfall-lantern
                - img "A lantern glowing in a dark, ancient landscape" [ref=e66]
                - generic [ref=e67]:
                  - paragraph [ref=e68]: Wayfinding relic · Rare
                  - heading "Starfall Lantern" [level=3] [ref=e69]
                  - paragraph [ref=e70]: A blue-flamed lantern that reveals the safest path through enchanted darkness.
                  - generic [ref=e71]:
                    - text: Open entry
                    - generic [aria-hidden] [ref=e72]: →
            - article [ref=e73]:
              - link [ref=e74] [cursor=pointer]:
                - /url: /magic-items/thornbound-grimoire
                - img "An ancient illustrated tome resting open" [ref=e76]
                - generic [ref=e77]:
                  - paragraph [ref=e78]: Living tome · Very rare
                  - heading "Thornbound Grimoire" [level=3] [ref=e79]
                  - paragraph [ref=e80]: A book of field magic that adds a new page whenever its reader survives a mistake.
                  - generic [ref=e81]:
                    - text: Open entry
                    - generic [aria-hidden] [ref=e82]: →
            - article [ref=e83]:
              - link [ref=e84] [cursor=pointer]:
                - /url: /monsters/mossback-colossus
                - img "A fearsome creature emerging from a shadowy forest" [ref=e86]
                - generic [ref=e87]:
                  - paragraph [ref=e88]: Old-growth forest · High threat
                  - heading "Mossback Colossus" [level=3] [ref=e89]
                  - paragraph [ref=e90]: A gentle giant until its grove is harmed, then a walking avalanche of root and stone.
                  - generic [ref=e91]:
                    - text: Open entry
                    - generic [aria-hidden] [ref=e92]: →
      - region [ref=e93]:
        - generic [ref=e94]:
          - generic [ref=e95]:
            - paragraph [ref=e96]: From the margins
            - heading "The best discoveries are rarely tidy." [level=2] [ref=e97]
            - paragraph [ref=e98]: Read the scribe's field notes for practical ways to use the archive, gentle warnings about unfinished lore, and an invitation to help shape what comes next.
          - link "Read the field notes" [ref=e99] [cursor=pointer]:
            - /url: /docks
    - contentinfo [ref=e100]:
      - generic [ref=e101]:
        - generic [ref=e102]:
          - paragraph [ref=e103]: Keep the lantern lit
          - paragraph [ref=e104]: The Big Grimoire
          - paragraph [ref=e105]: A small, growing archive for people who still leave room for wonder.
        - navigation "Footer navigation" [ref=e106]:
          - link "About the archive" [ref=e107] [cursor=pointer]:
            - /url: /about
          - link "Contact the scribe" [ref=e108] [cursor=pointer]:
            - /url: /contact
          - link "Privacy notes" [ref=e109] [cursor=pointer]:
            - /url: /privacy
        - generic [ref=e110]:
          - link "GitHub (opens in a new tab)" [ref=e111] [cursor=pointer]:
            - /url: https://github.com/Robinwil/the-big-grimoire
            - text: GitHub
            - generic [ref=e112]: (opens in a new tab)
          - link "Robinwil (opens in a new tab)" [ref=e113] [cursor=pointer]:
            - /url: https://robinwil.com
            - text: Robinwil
            - generic [ref=e114]: (opens in a new tab)
      - paragraph [ref=e115]: © 2026 The Big Grimoire. Made for curious minds.
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | 
  3  | test('home page introduces the grimoire and its collections', async ({ page }) => {
  4  | 	await page.goto('/');
  5  | 	await expect(page.getByRole('heading', { name: 'Leave room for wonder.' })).toBeVisible();
  6  | 	await expect(page.getByRole('link', { name: 'Explore magic items' })).toHaveAttribute(
  7  | 		'href',
  8  | 		'/magic-items'
  9  | 	);
  10 | 	await expect(page.getByRole('link', { name: 'Meet the monsters' })).toHaveAttribute(
  11 | 		'href',
  12 | 		'/monsters'
  13 | 	);
  14 | });
  15 | 
  16 | test('magic item search narrows the catalogue', async ({ page }) => {
  17 | 	await page.goto('/magic-items');
  18 | 	await page.getByLabel('Search magic items').fill('lantern');
  19 | 
  20 | 	await expect(page.getByRole('heading', { name: 'Starfall Lantern' })).toBeVisible();
  21 | 	await expect(page.getByRole('article')).toHaveCount(1);
  22 | });
  23 | 
  24 | test('monster entries have useful detail pages', async ({ page }) => {
  25 | 	await page.goto('/monsters');
  26 | 	await page.getByRole('link', { name: /Mossback Colossus/ }).click();
  27 | 
  28 | 	await expect(page).toHaveURL(/\/monsters\/mossback-colossus/);
  29 | 	await expect(page.getByRole('heading', { name: 'Mossback Colossus' })).toBeVisible();
  30 | 	await expect(page.getByRole('heading', { name: 'Field marks' })).toBeVisible();
  31 | });
  32 | 
  33 | test('search works from a query URL', async ({ page }) => {
  34 | 	await page.goto('/search?q=forest');
  35 | 
  36 | 	await expect(page.getByRole('heading', { name: 'Results for “forest”' })).toBeVisible();
  37 | 	await expect(page.getByRole('heading', { name: 'Mossback Colossus' })).toBeVisible();
  38 | });
  39 | 
  40 | test('mobile navigation can be opened with the keyboard-friendly toggle', async ({ page }) => {
  41 | 	await page.setViewportSize({ width: 390, height: 844 });
  42 | 	await page.goto('/');
  43 | 
  44 | 	const menuToggle = page.getByRole('button', { name: 'Toggle navigation' });
  45 | 	await expect(menuToggle).toHaveAttribute('aria-expanded', 'false');
  46 | 	await menuToggle.click();
  47 | 	await expect(menuToggle).toHaveAttribute('aria-expanded', 'true');
> 48 | 	await expect(page.getByRole('link', { name: 'Field notes' })).toBeVisible();
     |                                                                ^ Error: expect(locator).toBeVisible() failed
  49 | });
  50 | 
```