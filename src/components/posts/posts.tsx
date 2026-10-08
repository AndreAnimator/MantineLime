import React from "react";
import PostCard from "./post-card";
import { Container, Stack } from "@mantine/core";
import type { Post } from "../../schemas/posts-schema";

interface PostsProps {
  posts: Post[];
  loadMoreRef: React.RefObject<HTMLDivElement | null>;
  hasMore: boolean;
}

const Posts: React.FC<PostsProps> = ({ posts, loadMoreRef, hasMore }) => {
  return (
    <Container size={500}>
      <Stack>
        {posts.map(({ id, title, body, reactions }) => (
          <PostCard
            key={id}
            title={title}
            body={body}
            likes={reactions.likes}
            dislikes={reactions.dislikes}
            id={id}
          />
        ))}
      </Stack>

      {hasMore && <div ref={loadMoreRef}>Load More...</div>}
    </Container>
  );
};

export default Posts;
