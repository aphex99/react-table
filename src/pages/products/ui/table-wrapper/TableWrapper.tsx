import {useEffect} from "react";

import EmptyData from "@/shared/ui/empty-page/EmptyData.tsx";
import Pagination from "@/shared/ui/pagination/Pagination.tsx";
import Skeleton from "@/shared/ui/skeleton/Skeleton.tsx";

import {ITEMS_ON_PAGE} from "../../config/tableHeaders.ts";
import TableHeader from "../table-header/TableHeader.tsx";
import Table from "../table/Table.tsx";

import {useProductsTable} from "./model/useProductsTable.ts";

import styles from './TableWrapper.module.scss';

export interface TableWrapperPropsType {
  searchQuery: string;
}

const TableWrapper = ({searchQuery}: TableWrapperPropsType) => {

  const {products, total, isLoading, currentPage, onChangePage, handleSort, sort} = useProductsTable({searchQuery});

  useEffect(() => {
    onChangePage(1);
  }, [searchQuery]);

  if (isLoading && !products.length)
    return <Skeleton count={7} skeletonClassName={styles.skeleton}
                     wrapperClassName={styles.skeleton_wrapper}/>;

  if (!products.length) return <EmptyData/>;

  return (
    <div className={styles.wrapper}>
      <TableHeader/>
      <Table products={products} handleSort={handleSort} sortState={sort}/>
      <Pagination totalCount={total}
                  currentPage={currentPage}
                  itemsPerPage={ITEMS_ON_PAGE}
                  onChange={(page: number) => onChangePage(page)}/>
    </div>
  );
};

export default TableWrapper;