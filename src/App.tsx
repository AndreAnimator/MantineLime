import React from "react";
import { BrowserRouter } from "react-router";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/charts/styles.css";
import { AppRouter } from "./app-router";
import { mantineTheme } from "./theme/mantine-theme";

function App() {
  return (
    <>
      <React.StrictMode>
        <MantineProvider theme={mantineTheme}>
          <ModalsProvider>
            <Notifications />
            <BrowserRouter basename={import.meta.env.BASE_URL}>
              <AppRouter />
            </BrowserRouter>
          </ModalsProvider>
        </MantineProvider>
      </React.StrictMode>
    </>
  );
}

export default App;
