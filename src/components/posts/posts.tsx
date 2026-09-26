import React from "react";
import { usePosts } from "../../hooks/use-posts";
import PostCard from "./post-card";
import { Container, Stack } from "@mantine/core";

type Post = {
  id: number;
  title: string;
  body: string;
  tags: [string];
  reactions: { likes: number; dislikes: number };
  views: number;
  userId: number;
};

const ITEMS_PER_PAGE = 6;

const Posts: React.FC = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [hasMore, setHasMore] = React.useState(true);
  const [page, setPage] = React.useState(0);

  const fetchPosts = React.useCallback(async () => {
    const response = await fetch(
      `https://dummyjson.com/posts?limit=${ITEMS_PER_PAGE}&skip=${page * ITEMS_PER_PAGE}`,
    );
    const data = await response.json();
    console.log("O que que veio de resposta");
    console.log(data);

    if (data.posts.length === 0) {
      setHasMore(false);
    } else {
      setPosts((prevPosts) => [...prevPosts, ...data.posts]);
      setPage((prevPage) => prevPage + 1);
    }
  }, [page]);

  const { loadMoreRef } = usePosts(fetchPosts, hasMore);

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
          />
        ))}
      </Stack>

      {hasMore && <div ref={loadMoreRef}>Load More...</div>}
    </Container>
  );
};

export default Posts;
