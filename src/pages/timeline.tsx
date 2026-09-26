import React from "react";
import Posts from "../components/posts/posts";
import { Stack, Title } from "@mantine/core";

export const Timeline: React.FC = () => {
  return (
    <Stack>
      <Title>Timeline</Title>
      <Posts></Posts>
    </Stack>
  );
};
