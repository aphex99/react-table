import type {DOTS} from "@/shared/ui/pagination/consts.ts";

export interface UsePaginationParamsType {
  pageCount: number;
  currentPage: number;
}

export type PaginationItemType = number | typeof DOTS;

export interface PaginationPropsType {
  pageCount: number;
  currentPage: number;
  onChange: (page: number, countItems: number) => void;
}