import {ITEMS_ON_PAGE} from "@/pages/products/config/tableHeaders.ts";
import TableHeader from "@/pages/products/ui/table-header/TableHeader.tsx";
import {useProductsTable} from "@/pages/products/ui/table-wrapper/model/useProductsTable.ts";
import Table from "@/pages/products/ui/table/Table.tsx";
import Pagination from "@/shared/ui/pagination/Pagination.tsx";
import {useEffect} from "react";

import styles from './TableWrapper.module.scss';

export interface TableWrapperPropsType {
  searchQuery: string;
}

const TableWrapper = ({searchQuery}: TableWrapperPropsType) => {
  const {products, total, isLoading, currentPage, onChangePage, handleSort, sort} = useProductsTable({searchQuery});
  const pagesCount = Math.ceil(total / ITEMS_ON_PAGE);

  useEffect(() => {
    onChangePage(1);
  }, [searchQuery, onChangePage]);

  if (isLoading && !products.length) return 'Skeleton...';

  if (!products.length) return 'Products not found';

  return (
    <div className={styles.wrapper}>
      <TableHeader/>
      <Table products={products} handleSort={handleSort} sortState={sort}/>
      <Pagination pagesCount={pagesCount} currentPage={currentPage} onChange={(page: number) => onChangePage(page)}/>
    </div>
  );
};

export default TableWrapper;