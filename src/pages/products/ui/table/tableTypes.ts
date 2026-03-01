import type {ProductType} from "@/pages/products/productsTypes.ts";
import type {
  HandleSortParametersType,
} from "@/pages/products/ui/table-wrapper/tableWrapperTypes.ts";

export interface TablePropsType {
  products: ProductType[];
  handleSort: (values: HandleSortParametersType) => void;
}