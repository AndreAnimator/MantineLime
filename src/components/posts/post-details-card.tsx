import React from "react";
import { Badge, Card, Container, Group, Text, Title } from "@mantine/core";
import { IconThumbDown, IconThumbUp } from "@tabler/icons-react";
import type { Post } from "../../schemas/posts-schema";

interface PostDetailsCardProps {
  post: Post;
}

export const PostDetailsCard: React.FC<PostDetailsCardProps> = ({ post }) => {
  return (
    <Card>
      <Group justify="center" align="flex-start">
        <div>
          <Badge variant="light" color="green" mb="xs">
            Postagem de {post.userId}
          </Badge>
          <Title order={2}>{post.title}</Title>
        </div>
      </Group>

      <Group justify="center">
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
