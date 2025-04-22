import { test, expect } from '@playwright/test';

test('dado un concierto ativo en la db, este es visible para el usuario', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('heading', { name: 'Rock en Vivo' })).toBeVisible();
});