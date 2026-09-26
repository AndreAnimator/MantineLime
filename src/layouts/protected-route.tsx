import React from "react";
import { Navigate, Outlet } from "react-router";

export const ProtectedRoute: React.FC = () => {
  const token = localStorage.getItem("token");
  const isAuthenticated = Boolean(token);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
