import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm, type UseFormReturnType } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { notifications } from "@mantine/notifications";
import { api } from "../services/api";
import { LoginSchema } from "../schemas/login-schema";

export function useLogin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const form = useForm<LoginSchema>({
    initialValues: {
      username: "Cicrano",
      password: "Senha",
    },
    validateInputOnBlur: true,
    validate: zodResolver(LoginSchema),
  });

  const handleLogin = async (values: LoginSchema) => {
    setLoading(true);
    try {
      const response = await api.post("/user/login", {
        username: values.username,
        password: values.password,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
      }

      notifications.show({
        title: "Login realizado",
        message:
          response.data.message ||
          `Bem-vindo ao MantineLime ${values.username}`,
        color: "green",
      });
      navigate("/app");
    } catch {
      // notificação de erro tratada no interceptor do Axios
    } finally {
      setLoading(false);
    }
  };

  const handleNavigateHome = () => {
    navigate("/");
  };

  return {
    form,
    loading,
    handleLogin,
    handleNavigateHome,
  };
}

export type UseLoginFormType = UseFormReturnType<LoginSchema>;
