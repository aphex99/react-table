import {productsApi} from "@/pages/products/api/products.api.ts";
import {ITEMS_ON_PAGE} from "@/pages/products/ui/table-wrapper/config/consts.ts";
import type {
  HandleSortParametersType, SortStateType, TableWrapperPropsType
} from "@/pages/products/ui/table-wrapper/tableWrapperTypes.ts";
import Table from "@/pages/products/ui/table/Table.tsx";
import Pagination from "@/shared/ui/pagination/Pagination.tsx";
import {useQuery} from "@tanstack/react-query";
import {useState} from "react";

const TableWrapper = ({searchQuery}: TableWrapperPropsType) => {
  const [currentPage, setCurrentPage] = useState(1);
  const skip = (currentPage - 1) * ITEMS_ON_PAGE;

  const [sort, setSort] = useState<SortStateType>({field: null, order: null});

  const {data} = useQuery({
    queryKey: ['products', currentPage, sort.field, sort.order, searchQuery],
    queryFn: () => productsApi.getProducts({
      searchQuery,
      limit: ITEMS_ON_PAGE,
      skip,
      sortName: sort.field === 'Оценка' ? 'rating' : sort.field === 'Цена, ₽' ? 'price' : null,
      sortOrder: sort.order
    })
  });

  if (!data?.data) return null;
  const {products, total} = data.data;

  const pageCount = Math.ceil(total / ITEMS_ON_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSort = ({field}: HandleSortParametersType) => {
    setSort(prev => {
      if (prev.field !== field) {
        return {field, order: 'asc'};
      }
      if (sort.order === 'asc') return {field, order: 'desc'};
      return {field: null, order: null};
    });
  };

  return (
    <div>
      <Table products={products} handleSort={handleSort}/>
      <Pagination pageCount={pageCount} currentPage={currentPage} onChange={handlePageChange}/>
    </div>
  );
};

export default TableWrapper;