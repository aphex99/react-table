import type {
  ProductsRequestType,
  ProductsResponseType
} from "@/pages/products/productsTypes.ts";
import {axiosInstance} from "@/shared/config/axios/axios.ts";

export const productsApi = {
  getProducts: ({searchQuery, limit, skip = 0, sortName, sortOrder}: ProductsRequestType) => {
    return axiosInstance.get<ProductsResponseType>(`products/search`, {
      params: {
        q: searchQuery,
        limit,
        skip,
        sortBy: sortName,
        order: sortOrder,
        select: `id,title,category,price,rating,brand,sku`
      }
    });
  }
};