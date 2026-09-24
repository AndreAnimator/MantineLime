import type React from "react";
import { Route, Routes } from "react-router";
import { Home } from "./pages/home";
import { AuthLayout } from "./layouts/auth-layout";
import { Login } from "./pages/login";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route path="/login" element={<AuthLayout />}>
        <Route index element={<Login />} />
      </Route>
    </Routes>
  );
};
