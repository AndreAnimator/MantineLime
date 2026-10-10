import react from "@vitejs/plugin-react";
import { defineConfig, mergeConfig } from "vite";
import { defineConfig as defineVitestConfig } from "vitest/config";

// https://vite.dev/config/
export default mergeConfig(
  defineVitestConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.ts",
      include: ["src/**/*.test.{ts,tsx}"],
      exclude: ["node_modules", "dist", "backend", "e2e"],
    },
  }),
  defineConfig({
    plugins: [react()],
  }),
);
