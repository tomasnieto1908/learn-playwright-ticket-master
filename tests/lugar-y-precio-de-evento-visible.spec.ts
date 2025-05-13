import { test, expect } from '@playwright/test';

test('lugar y precio del evento disponible', async ({ page }) => {
  // Ir a la página de inicio
  await page.goto('http://localhost:3000/');

  // Verificar que el lugar del evento sea visible
  await expect(page.getByText('Estadio Obras Sanitarias, CABA')).toBeVisible();

  // Verificar que el precio del evento sea visible
  await expect(page.getByText('11000')).toBeVisible(); // Precio del evento según la base de datos
});
