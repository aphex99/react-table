import TableWrapper from "@/pages/products/ui/table-wrapper/TableWrapper.tsx";
import ProgressBar from "@/shared/ui/progress-bar/ProgressBar.tsx";
import {useIsFetching} from "@tanstack/react-query";

const Products = () => {

  const isFetching = useIsFetching({queryKey: ["products"]});

  return (
    <div>
      {!!isFetching && <ProgressBar isLoading={!!isFetching}/>}
      <TableWrapper/>
    </div>
  );
};

export default Products;