import { getProducts, ProductFilters } from "./services/getProducts";

export class API {
  private static baseUrl = "https://netbutik-api.onrender.com";
  private static productsModule = `${this.baseUrl}/products`;
  private static getProductsRoute = `${this.productsModule}/get-products`;

  static async getProducts({ signal, filters }: GetProducts) {
    return await getProducts({
      url: this.getProductsRoute,
      signal,
      filters,
    });
  }
}

type GetProducts = { signal: AbortSignal; filters: ProductFilters };
