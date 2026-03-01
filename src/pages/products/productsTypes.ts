import type {ProductFields} from "@/pages/products/ui/table/tableTypes.ts";

export interface ProductsResponseType {
  products: ProductType[];
  total: number;
}

export interface ProductType {
  id: number;
  title: string;
  category: string;
  price: number;
  sku: string;
  brand: string;
  rating: number;
}

export interface ProductsRequestType {
  searchQuery: string;
  limit: number;
  skip: number;
  sortName?: ProductFields | null;
  sortOrder?: 'asc' | 'desc' | null;
}