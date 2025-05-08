import { test, expect } from "@playwright/test";

test.skip("selección de 2 entradas para Kreator + Sepultura", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");
  const recital = page.locator(
    'div:has-text("Kreator + Sepultura - Latin America Attack 2025")'
  );
  await recital.getByRole("link", { name: "Ver detalles" }).click();
  await page.getByRole("button", { name: "+" }).click(); // suma 1 entrada más
  await expect(page.getByRole("spinbutton")).toBeVisible();
  await expect(page.getByText("$22000")).toBeVisible(); // 11000 x 2
});
