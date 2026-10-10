import { test, expect } from "playwright/test";

test.setTimeout(120_000);
test.describe("Fluxo de navegação de postagens", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
    await page.fill('input[type="text"]', "emilys");
    await page.fill('input[type="password"]', "emilyspass");
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/\/app/);
  });

  test("deve listar postagens na timeline", async ({ page }) => {
    await page.goto("/app");

    // Asserções visuais da página de catálogo
    await expect(page.getByRole("heading", { name: "Timeline" })).toBeVisible();
  });

  test("Deve permitir acessar detalhes de um post.", async ({ page }) => {
    await page.goto("/app");
    const responsePromise = page.waitForResponse(
      (response) =>
        response.url().includes("https://dummyjson.com/posts") &&
        response.request().method() === "GET" &&
        response.status() === 200,
    );
    await expect(page.getByText("Load More...")).toBeVisible();
    const response = await responsePromise;
    expect(response.ok()).toBeTruthy();
    await page.getByText("His mother had always taught him not to").click();
    await expect(page).toHaveURL(/\/posts\/\d+/);
  });
});
