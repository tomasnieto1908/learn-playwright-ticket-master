import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(
    page.getByText("Kreator + Sepultura - Latin America Attack 2025")
  ).toBeVisible();
});
