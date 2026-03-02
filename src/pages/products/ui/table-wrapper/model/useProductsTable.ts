import {productsApi} from "@/pages/products/api/products.api.ts";
import {ITEMS_ON_PAGE} from "@/pages/products/config/tableHeaders.ts";
import {useTableSort} from "@/pages/products/ui/table-wrapper/model/useTableSort.ts";
import type {
  UseProductsTableParamsType,
  UseProductsTableReturnType
} from "@/pages/products/ui/table-wrapper/tableWrapperTypes.ts";
import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {useState} from "react";

export const useProductsTable = ({searchQuery}: UseProductsTableParamsType): UseProductsTableReturnType => {
  const [currentPage, setCurrentPage] = useState(1);
  const {sort, handleSort} = useTableSort();
  const skip = (currentPage - 1) * ITEMS_ON_PAGE;

  const {data, isLoading, isError} = useQuery({
    queryKey: ['products', currentPage, sort.field, sort.order, searchQuery],
    queryFn: () => productsApi.getProducts({
      searchQuery,
      limit: ITEMS_ON_PAGE,
      skip,
      sortName: sort.field,
      sortOrder: sort.order
    }),
    select: (response) => response.data,
    placeholderData: keepPreviousData
  });

  return {
    products: data?.products ?? [],
    total: data?.total ?? 0,
    isLoading,
    isError,
    currentPage,
    onChangePage: setCurrentPage,
    handleSort
  };
};