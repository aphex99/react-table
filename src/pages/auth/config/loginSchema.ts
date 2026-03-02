import {z} from 'zod';

export const loginSchema = z.object({
  username: z.string().min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required'),
  remember: z.boolean().optional(),
});

export type LoginFormSchemaType = z.infer<typeof loginSchema>;