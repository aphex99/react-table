import type {TableHeaderType} from "@/pages/products/ui/table/tableTypes.ts";

export const ITEMS_ON_PAGE = 5;

export const _TABLE_HEADERS = ['Наименование', 'Вендор', 'Артикул', 'Оценка', 'Цена, ₽'];

export const TABLE_HEADERS: TableHeaderType[] = [
  {label: 'Наименование', sortKey: 'title'},
  {label: 'Вендор', sortKey: 'brand'},
  {label: 'Артикул', sortKey: 'sku'},
  {label: 'Оценка', sortKey: 'rating'},
  {label: 'Цена, ₽', sortKey: 'price'}
];