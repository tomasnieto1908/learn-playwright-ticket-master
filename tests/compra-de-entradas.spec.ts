import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('div').filter({ hasText: /^\$85\.99Ver detalles$/ }).getByRole('link').click();
  await page.getByRole('button').nth(1).dblclick();
  await page.getByRole('button', { name: 'Comprar entradas' }).click();
  await page.getByRole('textbox', { name: 'Nombre del titular' }).click();
  await page.getByRole('textbox', { name: 'Nombre del titular' }).fill('hola');
  await page.getByRole('textbox', { name: 'Número de tarjeta' }).click();
  await page.getByRole('textbox', { name: 'Número de tarjeta' }).fill('1234567891234567');
  await page.getByRole('combobox', { name: 'Mes' }).click();
  await page.getByRole('option', { name: '11' }).click();
  await page.getByRole('combobox', { name: 'Año' }).click();
  await page.getByRole('option', { name: '2032' }).click();
  await page.getByRole('textbox', { name: 'CVC' }).click();
  await page.getByRole('textbox', { name: 'CVC' }).fill('119');
  await page.getByRole('textbox', { name: 'Email para recibir las' }).click();
  await page.getByRole('textbox', { name: 'Email para recibir las' }).fill('hol');
  await page.getByRole('textbox', { name: 'Email para recibir las' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Email para recibir las' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Email para recibir las' }).fill('hola@gmail.com');
  await page.getByRole('button', { name: 'Completar compra' }).click();
});