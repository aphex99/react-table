export interface UsePaginationParamsType {
  pageCount: number;
  currentPage: number;
}

export interface PaginationPropsType {
  pageCount: number;
  currentPage: number;
  onChange: (page: number) => void;
}