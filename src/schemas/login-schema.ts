import { z } from "zod";

export const LoginSchema = z.object({
  username: z
    .string("Informe um nome de usuário válido")
    .min(1, "Nome de usuário é obrigatório"),
  password: z.string().min(1, "Senha é obrigatória"),
});

export type LoginSchema = z.infer<typeof LoginSchema>;
