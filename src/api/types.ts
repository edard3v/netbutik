export interface GetProducts {
  limit: number;
  page: number;
  totalPages: number;
  records: Products[];
}

export interface Products {
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
