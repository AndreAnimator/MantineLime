import { test, expect } from "@playwright/test";

test.describe("Fluxo de autenticação e Login", () => {
  test("deve realizar login com sucesso informando credenciais válidas", async ({
    page,
  }) => {
    await page.goto("/login");

    await page.fill('input[type="text"]', "emilys");
    await page.fill('input[type="password"]', "emilyspass");
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL(/\/app/);
    await expect(
      page.getByRole("heading", { name: "MantineLime" }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Timeline" })).toBeVisible();
  });

  test("deve exibir notificação de erro ao informar senha inocrreta", async ({
    page,
  }) => {
    await page.goto("/login");

    await page.fill('input[type="text"]', "emilys");
    await page.fill('input[type="password"]', "senhaerrada");
    await page.click('button[type="submit"]');

    await expect(page.getByText("Invalid credentials")).toBeVisible();
    await expect(page).toHaveURL(/\/login/);

    await page.screenshot({
      path: "e2e/screenshots/login-invalido.png",
      fullPage: true,
    });
  });

  test("deve permitir realizar logout e retornar para a página de login", async ({
    page,
  }) => {
    await page.goto("/login");
    await page.fill('input[type="text"]', "emilys");
    await page.fill('input[type="password"]', "emilyspass");
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/\/app/);

    await page.getByRole("button", { name: "Sair" }).click();

    await expect(page).toHaveURL(/\/login/);
    await expect(
      page.getByRole("heading", { name: "MantineLime" }),
    ).toBeVisible();
  });
});
