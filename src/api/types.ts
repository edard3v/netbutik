export interface GetProducts {
  limit: number;
  page: number;
  totalPages: number;
  records: Product[];
}

export interface Product {
  id: string;
  name: string;
  stock: number;
  price: number;
  img: string;
  description: string;
  categories: Category[];
}

export interface Category {
  id: string;
  name: string;
}
