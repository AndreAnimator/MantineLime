import type React from "react";
import { Route, Routes } from "react-router";
import { Home } from "./pages/home";
import { AuthLayout } from "./layouts/auth-layout";
import { Login } from "./pages/login";
import { ProtectedRoute } from "./layouts/protected-route";
import { Timeline } from "./pages/timeline";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route path="/login" element={<AuthLayout />}>
        <Route index element={<Login />} />
      </Route>

      <Route path="/app" element={<ProtectedRoute />}>
        <Route index element={<Timeline />} />
      </Route>
    </Routes>
  );
};
