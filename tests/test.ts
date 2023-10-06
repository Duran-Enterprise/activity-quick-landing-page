// will do tests here
import { test, expect } from '@playwright/test';

test('Check for h1 element on /', async ({ page }) => {
	await page.goto('/');

	const h1Element = await page.$('h1');
	expect(h1Element).toBeTruthy();
});
