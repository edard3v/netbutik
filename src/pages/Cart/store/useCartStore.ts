import { Product } from "@api/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { toggle } from "./actions/toggle";
import { initProducts } from "./inits/initProducts";

export const useCartStore = create<CartStore>()(
  devtools(
    (set, get) => ({
      products: initProducts(),
      // actions
      toggle(newProduct) {
        toggle(newProduct, set, get);
      },
      isInCart(productId) {
        const { products } = get();
        return !!products.find((product) => product.id === productId);
      },
    }),
    { name: "cart" }
  )
);

export type CartStore = {
  products: Product[] | [];
  isInCart: (productId: string) => boolean;
  toggle: (newProduct: Product) => void;
};

export type SetCartStore = (store: CartStore) => void;
export type GetCartStore = () => CartStore;
