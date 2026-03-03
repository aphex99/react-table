import SearchWrapper from "@/pages/products/ui/search-wrapper/SearchWrapper.tsx";
import TableWrapper from "@/pages/products/ui/table-wrapper/TableWrapper.tsx";
import ProgressBar from "@/shared/ui/progress-bar/ProgressBar.tsx";
import {useIsFetching} from "@tanstack/react-query";
import {useState} from "react";

import styles from './Products.module.scss';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const isFetching = useIsFetching({queryKey: ["products"], exact: false});

  return (
    <div className={styles.wrapper}>
      {isFetching > 0 && <ProgressBar isLoading={!!isFetching}/>}
      <div className={styles.container}>
        <SearchWrapper searchQuery={searchQuery} onChangeSearchQuery={setSearchQuery}/>
        <TableWrapper searchQuery={searchQuery}/>
      </div>
    </div>
  );
};

export default Products;