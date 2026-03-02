import type {ProductType} from "@/pages/products/productsTypes.ts";
import type {ProductFields} from "@/pages/products/ui/table/tableTypes.ts";

export interface TableWrapperPropsType {
  searchQuery: string;
}

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
};