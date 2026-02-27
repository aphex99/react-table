import type {ProductsResponseType} from "@/pages/products/productsTypes.ts";
import {axiosInstance} from "@/shared/config/axios/axios.ts";

export const productsApi = {
  getProducts: () => {
    return axiosInstance.get<ProductsResponseType>("/products?select=id,title,category,price,rating,sku,");
  }
};