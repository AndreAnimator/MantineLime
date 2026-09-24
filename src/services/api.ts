import axios from "axios";
import { notifications } from "@mantine/notifications";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error?.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      localStorage.removeItem("token");
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }

    const errorMessage =
      error?.response?.data?.message ||
      "Ocorreu um erro ao se ocmunicar com o servidor.";

    notifications.show({
      title: "Erro na requisição",
      message: errorMessage,
      color: "red",
    });

    return Promise.reject(error);
  },
);
