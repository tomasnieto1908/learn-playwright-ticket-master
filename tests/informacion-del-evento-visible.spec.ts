import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: /^\$85\.99Ver detalles$/ }).getByRole('link').click();
  await expect(page.locator('div').filter({ hasText: /^14 de diciembre de 2023$/ })).toBeVisible();
  await expect(page.getByText(':00')).toBeVisible();
  await expect(page.getByText('Estadio Nacional, Ciudad de M')).toBeVisible();
  await expect(page.getByText('Rock', { exact: true })).toBeVisible();
  await expect(page.getByText('Disponibles: 500 entradas')).toBeVisible();
});