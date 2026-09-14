import { expect, test } from '@playwright/test';

test('home page introduces the grimoire and its collections', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Leave room for wonder.' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Explore magic items' })).toHaveAttribute('href', '/magic-items');
	await expect(page.getByRole('link', { name: 'Meet the monsters' })).toHaveAttribute('href', '/monsters');
});

test('magic item search narrows the catalogue', async ({ page }) => {
	await page.goto('/magic-items');
	await page.getByLabel('Search magic items').fill('lantern');

	await expect(page.getByRole('heading', { name: 'Starfall Lantern' })).toBeVisible();
	await expect(page.getByRole('article')).toHaveCount(1);
});

test('monster entries have useful detail pages', async ({ page }) => {
	await page.goto('/monsters');
	await page.getByRole('link', { name: /Mossback Colossus/ }).click();

	await expect(page).toHaveURL(/\/monsters\/mossback-colossus/);
	await expect(page.getByRole('heading', { name: 'Mossback Colossus' })).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Field marks' })).toBeVisible();
});

test('search works from a query URL', async ({ page }) => {
	await page.goto('/search?q=forest');

	await expect(page.getByRole('heading', { name: 'Results for “forest”' })).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Mossback Colossus' })).toBeVisible();
});

test('mobile navigation can be opened with the keyboard-friendly toggle', async ({ page }) => {
	await page.setViewportSize({ width: 390, height: 844 });
	await page.goto('/');

	const menuToggle = page.getByRole('button', { name: 'Toggle navigation' });
	await expect(menuToggle).toHaveAttribute('aria-expanded', 'false');
	await menuToggle.click();
	await expect(menuToggle).toHaveAttribute('aria-expanded', 'true');
	await expect(page.getByRole('link', { name: 'Field notes' })).toBeVisible();
});
