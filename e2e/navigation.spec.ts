import { test, expect } from "@playwright/test";

test.describe("Fluxo de Navegação e Proteção de Rotas", () => {
  test("deve navegadr da landing page pública para a página de login", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "MantineLime" }),
    ).toBeVisible();
    await expect(
      page.getByText("Rede social dinâmica e inovadora"),
    ).toBeVisible();

    await page.getByRole("link", { name: "Acesse sua conta" }).click();

    await expect(page).toHaveURL(/\/login/);
  });

  test("deve proteger rotas restritas e redirecionar usuário não autenticado para /login", async ({
    page,
  }) => {
    await page.goto("/app");
    await expect(page).toHaveURL(/\/login/);

    await page.goto("/app/posts/1");
    await expect(page).toHaveURL(/\/login/);
  });

  // não tem outra página de navegação pra testar a navbar com os navlinks

  test("deve exibir a página 404 ao acessar uma rota inexistente", async ({
    page,
  }) => {
    await page.goto("/rota-inexistente");
    await expect(page.getByText("Página não encontrada")).toBeVisible();
  });
});
