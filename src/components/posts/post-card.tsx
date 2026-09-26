import { Card, Container, Group, Stack, Text, Title } from "@mantine/core";
import { IconThumbDown, IconThumbUp } from "@tabler/icons-react";
import React from "react";

const PostCard: React.FC<{
  title: string;
  body: string;
  likes: number;
  dislikes: number;
}> = ({ title, body, likes, dislikes }) => (
  <Card padding="lg">
    <Stack>
      <Title>{title}</Title>
      <Text lineClamp={2}>{body}</Text>
      <Group>
        <Container>
          <IconThumbUp></IconThumbUp>
          <Text>{likes}</Text>
        </Container>
        <Container>
          <IconThumbDown></IconThumbDown>
          <Text>{dislikes}</Text>
        </Container>
      </Group>
    </Stack>
  </Card>
);

export default PostCard;
