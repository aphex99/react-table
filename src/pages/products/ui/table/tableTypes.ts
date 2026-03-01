import type {ProductType} from "@/pages/products/productsTypes.ts";
import type {
  HandleSortParametersType,
} from "@/pages/products/ui/table-wrapper/tableWrapperTypes.ts";

export interface TablePropsType {
  products: ProductType[];
  handleSort: (field: HandleSortParametersType) => void;
}

export type ProductFields = 'price' | 'title' | 'sku' | 'brand' | 'rating';

export interface TableHeaderType {
  label: string;
  sortKey: ProductFields;
}