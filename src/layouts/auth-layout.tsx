import React from "react";
import { Outlet } from "react-router";
import { Container, Box } from "@mantine/core";

export const AuthLayout: React.FC = () => {
  return (
    <Box
      bg="gray.1"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container size="xs" w="100%">
        <Outlet />
      </Container>
    </Box>
  );
};
