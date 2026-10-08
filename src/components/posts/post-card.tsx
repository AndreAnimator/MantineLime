import {
  Card,
  Container,
  Group,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { IconThumbDown, IconThumbUp } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router";

const PostCard: React.FC<{
  title: string;
  body: string;
  likes: number;
  dislikes: number;
  id: number;
}> = ({ title, body, likes, dislikes, id }) => (
  <Card padding="lg">
    <Stack>
      <UnstyledButton component={Link} to={`/app/posts/${id}`}>
        <Title>{title}</Title>
        <Text lineClamp={2}>{body}</Text>
      </UnstyledButton>
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
