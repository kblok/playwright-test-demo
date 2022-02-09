import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const backToTop = page.locator('.clean-btn');
  await expect(backToTop).toBeVisible({ timeout: 1000 });
});