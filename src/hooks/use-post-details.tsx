import { useNavigate, useParams } from "react-router";
import { api } from "../services/api";
import { useAsyncData } from "./use-async-data";
import { PostSchema } from "../schemas/posts-schema";

export function usePostDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: post,
    loading,
    error,
  } = useAsyncData(async () => {
    if (!id) throw new Error("ID da postagem não informado.");
    const response = await api.get(`/posts/${id}`);
    return PostSchema.parse(response.data);
  }, [id]);

  const handleNavigateBack = () => {
    navigate("app/");
  };

  return {
    id,
    post,
    loading,
    error,
    handleNavigateBack,
  };
}
