import React from "react";
import { NavLink as RouterNavLink, Outlet, useNavigate } from "react-router";
import {
  AppShell,
  Burger,
  Container,
  Title,
  Button,
  Stack,
  NavLink as MantineNavLink,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { IconDashboard, IconLogout, IconFeather } from "@tabler/icons-react";

export const RootLayout: React.FC = () => {
  const [opened, { toggle, close }] = useDisclosure();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    notifications.show({
      title: "Sessão encerrada",
      message: "Você saiu do sistema com sucesso.",
      color: "blue",
    });
    navigate("/login");
  };

  return (
    <AppShell
      navbar={{
        width: 260,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
      bg="gay.0"
    >
      <AppShell.Header>
        <Stack w="100%" px="md" justify="center">
          <Stack>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
          </Stack>
        </Stack>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <AppShell.Section>
          <Stack w="100%" px="md" justify="center">
            <Stack>
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
              />
              <Stack
                gap="xs"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/app")}
              >
                <IconFeather size={26} color="var(--matine-color-green-6)" />
                <Title order={3}> MantineLime</Title>
              </Stack>
            </Stack>
          </Stack>
          <Button
            variant="outline"
            color="red"
            size="xs"
            leftSection={<IconLogout size={16} />}
            onClick={handleLogout}
          >
            Sair
          </Button>
          <Stack gap="xs">
            <RouterNavLink
              to="/app"
              end
              style={{ textDecoration: "none" }}
              onClick={close}
            >
              {({ isActive }) => (
                <MantineNavLink
                  component="div"
                  label="Timeline"
                  leftSection={<IconDashboard size={20} />}
                  active={isActive}
                  variant="filled"
                  style={{ borderRadius: "var(--mantine-radius-md" }}
                />
              )}
            </RouterNavLink>
          </Stack>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <Container size="lg" py="md">
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};
