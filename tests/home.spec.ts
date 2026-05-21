import { test, expect } from '@playwright/test';

test('home page loads', async ({
  page,
}) => {
  await page.goto('http://localhost:5173');

  await expect(
    page.locator('body')
  ).toBeVisible();
});

test('cart page opens', async ({
  page,
}) => {
  await page.goto(
    'http://localhost:5173/cart'
  );

  await expect(page).toHaveURL(
    /cart/
  );
});