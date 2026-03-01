import type {
  ProductsRequestType,
  ProductsResponseType
} from "@/pages/products/productsTypes.ts";
import {axiosInstance} from "@/shared/config/axios/axios.ts";

export const productsApi = {
  getProducts: ({limit, skip = 0, sortName, sortOrder}: ProductsRequestType) => {
    return axiosInstance.get<ProductsResponseType>(`products?limit=${limit}&skip=${skip}&sortBy=${sortName}${sortOrder}&select=id,title,category,price,rating,brand,sku`);
  }
};