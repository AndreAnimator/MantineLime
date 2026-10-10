import React from "react";
import { Link } from "react-router";
import { Container, Title, Text, Button, Stack, Card } from "@mantine/core";
import { IconAlertTriangle, IconHome } from "@tabler/icons-react";

export const NotFound: React.FC = () => {
  return (
    <Container size="sm" py="xl">
      <Card radius="md" p="xl" withBorder>
        <Stack align="center" gap="md">
          <IconAlertTriangle size={48} color="var(--mantine-color-red-6)" />

          <Title order={1} ta="center">
            Página não Encontrada
          </Title>

          <Text c="dimmed" ta="center">
            A página que você está procurando não existe ou foi movida.
          </Text>

          <Button
            component={Link}
            to="/"
            leftSection={<IconHome size={18} />}
            mt="md"
          >
            Voltar para o Início
          </Button>
        </Stack>
      </Card>
    </Container>
  );
};
