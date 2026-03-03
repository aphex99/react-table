import type {ProductType} from "@/entities/product/model/types.ts";

export type ProductFields = 'price' | 'title' | 'sku' | 'brand' | 'rating';

export type SortStateType = {
  field: ProductFields | null;
  order: 'asc' | 'desc' | null;
}

export type SortFieldProductsType = ProductFields | null

export interface HandleSortParametersType {
  field: SortFieldProductsType;
}

export interface UseProductsTableParamsType {
  searchQuery: string;
}

export type UseProductsTableReturnType = {
  products: ProductType[];
  total: number;
  isLoading: boolean;
  isError: boolean;
  currentPage: number;
  onChangePage: (page: number) => void;
  handleSort: (field: HandleSortParametersType) => void;
  sort: SortStateType
};