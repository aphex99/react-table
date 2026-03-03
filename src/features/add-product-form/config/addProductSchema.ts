import {z} from 'zod';

export const addProductSchema = z.object({
  title: z.string().min(1, 'Поле наименование обязательно к заполнению'),
  brand: z.string().min(1, 'Поле вендор обязательно к заполнению'),
  sku: z.string().min(1, 'Поле артикул обязательно к заполнению'),
  price: z.coerce.number<number>().min(1, 'Поле цена обязательно к заполнению'),
});

export type AddProductSchemaType = z.infer<typeof addProductSchema>;