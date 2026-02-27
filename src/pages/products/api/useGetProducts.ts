import {productsApi} from "@/pages/products/api/products.api.ts";
import {loaderDelay} from "@/shared/model/loaderDelay.ts";
import {useQuery} from "@tanstack/react-query";


export const useGetProducts = (setShowLoader: (value: boolean) => void) => {
  const {data, isPending} = useQuery({
    queryKey: ['products'], queryFn: async () => {
      setShowLoader(true);
      const start = Date.now();
      try {
        const response = await productsApi.getProducts();
        await loaderDelay(start);
        if (response) {
          return response.data.products;
        }
      } finally {
        setShowLoader(false);
      }
    }
  });
  return {data, isPending};
};