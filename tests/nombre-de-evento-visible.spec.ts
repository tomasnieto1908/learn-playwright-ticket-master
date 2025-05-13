import { test, expect } from '@playwright/test';

test('dado un concierto activo en la db, este es visible para el usuario', async ({ page }) => {
  // Navegar a la página principal
  await page.goto('http://localhost:3000/');
  
  // Verificar que el concierto "Kreator + Sepultura - Latin America Attack 2025" esté visible
   const evento = page.getByText("Kreator + Sepultura - Latin America Attack 2025");
  await expect(evento.first()).toBeVisible();

  // Verificar detalles adicionales, como la ubicación y el precio
  const ubicacion = await page.locator('text=Estadio Obras Sanitarias, CABA');
  const precio = await page.locator('text=$11000.00');

  await expect(ubicacion).toBeVisible();
  await expect(precio).toBeVisible();
});
