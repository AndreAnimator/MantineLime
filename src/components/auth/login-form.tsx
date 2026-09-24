import React from "react";
import {
  Card,
  Title,
  Text,
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Group,
  Anchor,
} from "@mantine/core";
import {
  IconUser,
  IconLock,
  IconLogin,
  IconBuildingStore,
} from "@tabler/icons-react";
import type { UseLoginFormType } from "../../hooks/use-login";
import type { LoginSchema } from "../../schemas/login-schema";

interface LoginFormProps {
  form: UseLoginFormType;
  loading: boolean;
  onSubmit: (values: LoginSchema) => void;
  onNavigateHome: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  form,
  loading,
  onSubmit,
  onNavigateHome,
}) => {
  return (
    <Card>
      <Group
        justify="center"
        gap="xs"
        mb="xs"
        color="var(--mantine-color-blue-6)"
      >
        <IconBuildingStore size={32} color="var(--mantine-color-blue-6)" />
        <Title order={2}>MantineLime</Title>
      </Group>

      <Text c="dimmed" size="sm" ta="center" mb="lg">
        Digite suas credenciais para acessar o painel
      </Text>

      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack>
          <TextInput
            label="Username"
            placeholder="Seu nome de usuário"
            leftSection={<IconUser size={18} />}
            type="text"
            autoComplete="username"
            {...form.getInputProps("username")}
          />

          <PasswordInput
            label="Senha"
            placeholder="Sua senha"
            leftSection={<IconLock size={18} />}
            autoComplete="current-password"
            {...form.getInputProps("password")}
          />

          <Button
            type="submit"
            variant="filled"
            fullWidth
            loading={loading}
            leftSection={<IconLogin size={18} />}
            mt="sm"
          >
            Entrar no Sistema
          </Button>

          <Group justify="center">
            <Anchor
              component="button"
              type="button"
              c="dimmed"
              size="xs"
              onClick={onNavigateHome}
            >
              Voltar para a página inicial
            </Anchor>
          </Group>
        </Stack>
      </form>
    </Card>
  );
};
