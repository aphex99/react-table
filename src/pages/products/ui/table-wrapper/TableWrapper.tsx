import {productsApi} from "@/pages/products/api/products.api.ts";
import {ITEMS_ON_PAGE} from "@/pages/products/ui/table-wrapper/config/consts.ts";
import Table from "@/pages/products/ui/table/Table.tsx";
import Pagination from "@/shared/ui/pagination/Pagination.tsx";
import {useQuery} from "@tanstack/react-query";
import {useState} from "react";

const TableWrapper = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const skip = (currentPage - 1) * ITEMS_ON_PAGE;
  // const [sortName, setSortName] = useState(null);
  // const [sortOrder, setSortOrder] = useState(undefined);

  const {data} = useQuery({
    queryKey: ['products', currentPage],
    queryFn: () => productsApi.getProducts({
      limit: ITEMS_ON_PAGE, skip,
      // sortName, sortOrder
    })
  });

  if (!data?.data) return null;
  const {products, total} = data.data;

  const pageCount = Math.ceil(total / ITEMS_ON_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Table products={products}/>
      <Pagination pageCount={pageCount} currentPage={currentPage} onChange={handlePageChange}/>
    </div>
  );
};

export default TableWrapper;