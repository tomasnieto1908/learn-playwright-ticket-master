import { test, expect } from '@playwright/test';

test('se selecionaron 2 entradas para un evento y espero que valgan', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: /^\$85\.99Ver detalles$/ }).getByRole('link').click();
  await page.getByRole('button').nth(1).click();
  await expect(page.getByRole('spinbutton')).toBeVisible();
  await expect(page.getByText('$171.98')).toBeVisible();
});