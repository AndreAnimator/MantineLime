import React from "react";
import { Link } from "react-router";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Card,
} from "@mantine/core";
import { IconFeather, IconLogin } from "@tabler/icons-react";

export const Home: React.FC = () => {
  return (
    <Container size="sm" py="xl">
      <Card radius="md" p="x1" withBorder>
        <Stack align="center" gap="md">
          <IconFeather size={48} color="var(--mantine-color-green-6)" />

          <Title order={1} ta="center">
            MantineLime
          </Title>

          <Text c="dimmed" ta="center" size="lg">
            Rede social dinâmica e inovadora!
          </Text>

          <Group justify="center" mt="md">
            <Button
              component={Link}
              to="/login"
              size="md"
              leftSection={<IconLogin size={20} />}
            >
              Acesse sua conta
            </Button>
            <Text>Ou crie sua conta</Text>
          </Group>
        </Stack>
      </Card>
    </Container>
  );
};
