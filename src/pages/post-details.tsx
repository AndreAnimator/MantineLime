import React from "react";
import { Link } from "react-router";
import { Container, Button, Alert, LoadingOverlay } from "@mantine/core";
import { IconArrowLeft, IconAlertCircle } from "@tabler/icons-react";
import { usePostDetails } from "../hooks/use-post-details";
import { PostDetailsCard } from "../components/posts/post-details-card";

export const PostDetails: React.FC = () => {
  const { id, post, loading, error } = usePostDetails();

  if (loading) {
    return (
      <LoadingOverlay
        visible
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "blue", type: "dots" }}
      />
    );
  }

  if (error || !post) {
    return (
      <Container size="sm" py="sl">
        <Alert
          color="red"
          title="Post não encontrado"
          icon={<IconAlertCircle size={20} />}
          mb="lg"
        >
          {error ||
            `Nenhum produto foi encontrado no sistema com o ID "${id}".`}
        </Alert>
        <Button
          component={Link}
          to="/app"
          variant="outline"
          leftSection={<IconArrowLeft size={18} />}
        >
          Voltar para a timeline
        </Button>
      </Container>
    );
  }

  return (
    <Container size="sm" py="xl">
      <Button
        component={Link}
        to="/app"
        variant="subtle"
        leftSection={<IconArrowLeft size={18} />}
      >
        Voltar para a timelina
      </Button>

      <PostDetailsCard post={post} />
    </Container>
  );
};
