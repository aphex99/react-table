import {z} from 'zod';

export const loginSchema = z.object({
  username: z.string().min(1, 'Напишите ваш логин'),
  password: z.string().min(1, 'Напишите ваш пароль'),
  remember: z.boolean().optional(),
});

export type LoginFormSchemaType = z.infer<typeof loginSchema>;