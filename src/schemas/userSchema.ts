import { z } from 'zod';

export const createUserSchema = z.object({
  body: z.object({
    nome: z.string().min(2, { message: 'O nome precisa ter no minimo 3 caracteres' }).max(100),
    email: z.email({ message: 'O email precisa ser válido' }),
    senha: z.string().min(6, { message: 'A senha precisa ter no minimo 6 caracteres' }).max(100),
    role: z.enum(['USER', 'MANAGER']).optional(),
    cod_unidade: z.coerce.number().int().positive().optional(),
  }),
});

export const authUserSchema = z.object({
  body: z.object({
    email: z.email({ message: 'Precisa ser um email valido' }),
    senha: z.string({ message: 'A senha é obrigatória' }).min(1, { message: 'A senha é obrigatória' }),
  }),
});
