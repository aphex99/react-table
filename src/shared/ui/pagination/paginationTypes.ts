export interface UsePaginationParamsType {
  pagesCount: number;
  currentPage: number;
}

export interface PaginationPropsType {
  pagesCount: number;
  currentPage: number;
  onChange: (page: number) => void;
}