import Table from "./ui/table/Table.tsx";
import {useState} from "react";
import {useGetProducts} from "./api/useGetProducts.ts";
import {SpinnerLoader} from "@/shared/ui/spinner-loader/SpinnerLoader.tsx";

const Products = () => {
  const [showLoader, setShowLoader] = useState(false);
  const {data} = useGetProducts(setShowLoader);

  if (!data) return <div>Products didn't receive</div>;

  return (
    <div>
      <Table products={data}/>
      {showLoader && <SpinnerLoader/>}
    </div>
  );
};

export default Products;