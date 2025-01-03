import { Product } from "@api/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type CartStore = {
  products: Product[] | [];
  toggle: (newProduct: Product) => void;
};

export const useCartStore = create<CartStore>()(
  devtools(
    (set, get) => ({
      products: (() => {
        try {
          const cart = localStorage.getItem("cart");

          if (!cart) {
            localStorage.setItem("cart", JSON.stringify([]));
            return [];
          }

          return JSON.parse(cart) as Product[];
        } catch {
          localStorage.setItem("cart", JSON.stringify([]));
          return [];
        }
      })(),

      toggle(newProduct) {
        const { products } = get();
        let finalProducts = products;

        const productIndex = products.findIndex(
          (product) => product.id === newProduct.id
        );

        if (productIndex === -1) finalProducts = [...finalProducts, newProduct];
        else finalProducts.splice(productIndex, 1);

        set({ products: finalProducts });
        localStorage.setItem("cart", JSON.stringify(finalProducts));
      },
    }),
    { name: "cart" }
  )
);
