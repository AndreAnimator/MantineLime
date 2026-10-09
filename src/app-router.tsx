import type React from "react";
import { Route, Routes } from "react-router";
import { Home } from "./pages/home";
import { AuthLayout } from "./layouts/auth-layout";
import { RootLayout } from "./layouts/root-layout";
import { Login } from "./pages/login";
import { ProtectedRoute } from "./layouts/protected-route";
import { Timeline } from "./pages/timeline";
import { PostDetails } from "./pages/post-details";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route path="/login" element={<AuthLayout />}>
        <Route index element={<Login />} />
      </Route>

      <Route path="/app" element={<ProtectedRoute />}>
        <Route element={<RootLayout />}>
          <Route index element={<Timeline />} />
          <Route path="posts/:id" element={<PostDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};
