import type { Product } from "./product.inteface";

export interface ProductsResponse {
  count: number;
  pages: number;
  products: Product[];
}
