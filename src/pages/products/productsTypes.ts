export type ProductsResponseType = ProductType[];

export interface ProductType {
  id: number;
  title: string;
  category: string;
  price: number;
  sku: string;
  brand: string;
}

export interface TablePropsType {
  products: ProductType[];
}