import {useIsFetching} from "@tanstack/react-query";
import {useState} from "react";

import ProgressBar from "@/shared/ui/progress-bar/ProgressBar.tsx";

import SearchWrapper from "./search-wrapper/SearchWrapper.tsx";
import TableWrapper from "./table-wrapper/TableWrapper.tsx";

import styles from './Products.module.scss';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const isFetching = useIsFetching({queryKey: ["products"], exact: false});

  return (
    <>
      {isFetching > 0 && <ProgressBar isLoading={!!isFetching}/>}
      <div className={styles.container}>
        <SearchWrapper searchQuery={searchQuery} onChangeSearchQuery={setSearchQuery}/>
        <TableWrapper searchQuery={searchQuery}/>
      </div>
    </>
  );
};

export default Products;