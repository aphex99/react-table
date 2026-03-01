import Search from "@/pages/products/ui/search/Search.tsx";
import TableWrapper from "@/pages/products/ui/table-wrapper/TableWrapper.tsx";
import ProgressBar from "@/shared/ui/progress-bar/ProgressBar.tsx";
import {useIsFetching} from "@tanstack/react-query";
import {useState} from "react";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const isFetching = useIsFetching({queryKey: ["products"]});

  return (
    <div>
      {!!isFetching && <ProgressBar isLoading={!!isFetching}/>}
      <Search value={searchQuery} onChangeValue={setSearchQuery}/>
      <TableWrapper searchQuery={searchQuery}/>
    </div>
  );
};

export default Products;