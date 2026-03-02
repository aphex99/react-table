import type {ProductType} from "@/entities/product/model/types.ts";
import type {ProductFields} from "../model/types.ts";

export interface ProductsResponseType {
  products: ProductType[];
  total: number;
}

export interface ProductsRequestType {
  searchQuery: string;
  limit: number;
  skip: number;
  sortName?: ProductFields | null;
  sortOrder?: 'asc' | 'desc' | null;
}