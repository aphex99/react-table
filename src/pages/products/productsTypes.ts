export interface ProductsResponseType {
  products: ProductType[];
  total: number;
}

export interface ProductType {
  id: number;
  title: string;
  category: string;
  price: number;
  sku: string;
  brand: string;
  rating: number;
}

export interface ProductsRequestType {
  limit: number;
  skip: number;
  sortName?: string | null;
  sortOrder?: 'asc' | 'desc' | null;
}