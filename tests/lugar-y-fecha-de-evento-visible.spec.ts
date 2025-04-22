import { test, expect } from '@playwright/test';

test('lugar y hora del evento disponible', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByText('14 de diciembre de')).toBeVisible();
  await page.getByText('Estadio Nacional, Ciudad de M').click();
});