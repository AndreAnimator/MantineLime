import React from "react";
import Posts from "../components/posts/posts";
import { Stack, Title } from "@mantine/core";
import { usePosts } from "../hooks/use-posts";

export const Timeline: React.FC = () => {
  const { hasMore, posts, fetchPosts, useInfiniteScroll, loadMoreRef } =
    usePosts();

  useInfiniteScroll(fetchPosts, hasMore);

  return (
    <Stack>
      <Title>Timeline</Title>
      <Posts posts={posts} loadMoreRef={loadMoreRef} hasMore={hasMore}></Posts>
    </Stack>
  );
};
