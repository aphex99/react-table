export interface TableWrapperPropsType {
  searchQuery: string;
}

export type SortStateType = {
  field: 'Оценка' | 'Цена, ₽' | null;
  order: 'asc' | 'desc' | null;
}

export type SortFieldProductsType = 'Оценка' | 'Цена, ₽' | null

export interface HandleSortParametersType {
  field: SortFieldProductsType;
}