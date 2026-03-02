import type {ProductFields} from "../model/types.ts";

export interface TableHeaderType {
  label: string;
  sortKey: ProductFields;
}

export const ITEMS_ON_PAGE = 5;

export const TABLE_HEADERS: TableHeaderType[] = [
  {label: 'Наименование', sortKey: 'title'},
  {label: 'Вендор', sortKey: 'brand'},
  {label: 'Артикул', sortKey: 'sku'},
  {label: 'Оценка', sortKey: 'rating'},
  {label: 'Цена, ₽', sortKey: 'price'}
];