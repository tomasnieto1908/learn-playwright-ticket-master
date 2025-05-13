import { test, expect } from "@playwright/test";

test("verifica que el evento Kreator + Sepultura esté visible", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const evento = page.getByText("Kreator + Sepultura - Latin America Attack 2025");
  await expect(evento.first()).toBeVisible();
});
