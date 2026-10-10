import { describe, it, expect, vi } from "vitest";
import { render, screen, renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MantineProvider } from "@mantine/core";
import { LoginForm } from "./login-form";
import { useForm } from "@mantine/form";
import { LoginSchema } from "../../schemas/login-schema";

const renderComponent = (props = {}) => {
  const { result } = renderHook(() =>
    useForm<LoginSchema>({
      initialValues: {
        username: "Cicrano",
        password: "Senha",
      },
    }),
  );

  const defaultProps = {
    form: result.current,
    loading: false,
    onSubmit: vi.fn(),
    onNavigateHome: vi.fn(),
    ...props,
  };

  return {
    ...render(
      <MantineProvider>
        <LoginForm {...defaultProps} />
      </MantineProvider>,
    ),
    props: defaultProps,
  };
};

describe("LoginForm", () => {
  it("deve renderizar o formulário e os campos com sucesso", () => {
    renderComponent();

    expect(screen.getByText("MantineLime")).toBeInTheDocument();
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Entrar no Sistema/i }),
    ).toBeInTheDocument();
  });

  it("deve disparar onNavigateHome ao clicar em Voltar para a página inicial", async () => {
    const user = userEvent.setup();
    const { props } = renderComponent();

    const homeLink = screen.getByText("Voltar para a página inicial");
    await user.click(homeLink);

    expect(props.onNavigateHome).toHaveBeenCalledTimes(1);
  });
});
