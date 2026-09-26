import { z } from "zod";

export const PostSchema = z.object({
  _id: z.string(),
  title: z.string(),
  body: z.string(),
  tags: z.array(z.string()),
  reactions: z.object({
    likes: z.number(),
    dislikes: z.number(),
  }),
  views: z.number(),
  userId: z.number(),
});

export const PostFormSchema = PostSchema.omit({ _id: true });

export type Post = z.infer<typeof PostSchema>;
export type PostFormValues = z.infer<typeof PostFormSchema>;
