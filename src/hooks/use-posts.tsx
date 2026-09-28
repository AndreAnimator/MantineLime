// ../helpers/post-utils
import React from "react";
import { api } from "../services/api";
import { PostSchema, type Post } from "../schemas/posts-schema";

export function usePosts() {
  const ITEMS_PER_PAGE = 6;
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [hasMore, setHasMore] = React.useState(true);
  const [page, setPage] = React.useState(0);

  const fetchPosts = React.useCallback(async () => {
    const response = await api.get(
      `posts?limit=${ITEMS_PER_PAGE}&skip=${page * ITEMS_PER_PAGE}`,
    );

    if (response.data.posts.length === 0) {
      setHasMore(false);
    } else {
      setPosts((prevPosts) => [
        ...prevPosts,
        ...PostSchema.array().parse(response.data.posts),
      ]);
      setPage((prevPage) => prevPage + 1);
    }
  }, [page]);

  const loadMoreRef = React.useRef<HTMLDivElement | null>(null);

  const useInfiniteScroll = (fetchData: () => void, hasMore: boolean) => {
    const handleIntersection = React.useCallback(
      (entries: IntersectionObserverEntry[]) => {
        const isIntersecting = entries[0]?.isIntersecting;
        if (isIntersecting && hasMore) {
          fetchData();
        }
      },
      [fetchData, hasMore],
    );

    React.useEffect(() => {
      const observer = new IntersectionObserver(handleIntersection);

      if (loadMoreRef.current) {
        observer.observe(loadMoreRef.current);
      }

      return () => observer.disconnect();
    }, [handleIntersection]);
  };

  return {
    posts,
    hasMore,
    page,
    ITEMS_PER_PAGE,
    fetchPosts,
    useInfiniteScroll,
    loadMoreRef,
  };
}
