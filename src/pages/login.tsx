import React from "react";
import { useLogin } from "../hooks/use-login";
import { LoginForm } from "../components/auth/login-form";

export const Login: React.FC = () => {
  const { form, loading, handleLogin, handleNavigateHome } = useLogin();

  return (
    <LoginForm
      form={form}
      loading={loading}
      onSubmit={handleLogin}
      onNavigateHome={handleNavigateHome}
    />
  );
};
