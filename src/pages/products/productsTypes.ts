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
  searchQuery: string;
  limit: number;
  skip: number;
  sortName?: 'rating' | 'price' | null;
  sortOrder?: 'asc' | 'desc' | null;
}