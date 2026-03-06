import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {useState} from "react";

import {productsApi} from "../../../api/products.api.ts";
import {ITEMS_ON_PAGE} from "../../../config/tableHeaders.ts";
import type {UseProductsTableParamsType, UseProductsTableReturnType} from "../../../model/types.ts";
import {useTableSort} from "../../table-wrapper/model/useTableSort.ts";

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
    handleSort,
    sort
  };
};