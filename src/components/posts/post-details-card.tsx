import React from "react";
import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowLeft, IconThumbDown, IconThumbUp } from "@tabler/icons-react";
import type { Post } from "../../schemas/posts-schema";

interface PostDetailsCardProps {
  post: Post;
  onDelete: () => void;
  onNavigateBack: () => void;
}

export const PostDetailsCard: React.FC<PostDetailsCardProps> = ({
  post,
  onNavigateBack,
}) => {
  return (
    <Card>
      <Group justify="space-between" align="flex-start">
        <Button
          variant="outline"
          leftSection={<IconArrowLeft size={18} />}
          onClick={onNavigateBack}
        >
          Voltar
        </Button>
        <div>
          <Badge variant="light" color="green" mb="xs">
            Postagem de {post.userId}
          </Badge>
          <Title order={2}>{post.title}</Title>
        </div>
      </Group>

      <Group>
        {post.tags.map((tag) => (
          <Badge>{tag}</Badge>
        ))}
      </Group>

      <Text size="md" mt={4}>
        {post.body}
      </Text>
      <Group>
        <Container>
          <IconThumbUp></IconThumbUp>
          <Text>{post.reactions.likes}</Text>
        </Container>
        <Container>
          <IconThumbDown></IconThumbDown>
          <Text>{post.reactions.dislikes}</Text>
        </Container>
      </Group>
    </Card>
  );
};
