import {z} from 'zod';

export const loginSchema = z.object({
  username: z.email('Valid email is required'),
  password: z.string().min(1, 'Password is required'),
  remember: z.boolean().optional(),
});

export type LoginFormSchemaType = z.infer<typeof loginSchema>;