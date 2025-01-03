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
    }),
    { name: "cart" }
  )
);

export type CartStore = {
  products: Product[] | [];
  toggle: (newProduct: Product) => void;
};

export type SetCartStore = (store: CartStore) => void;
export type GetCartStore = () => CartStore;
