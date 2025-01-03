import { Product } from "@api/types";
import { GetCartStore, SetCartStore } from "../useCartStore";

export const toggle = (
  newProduct: Product,
  set: SetCartStore,
  get: GetCartStore
) => {
  const { products, ...rest } = get();
  let finalProducts = products;

  const productIndex = products.findIndex(
    (product) => product.id === newProduct.id
  );

  if (productIndex === -1) finalProducts = [...finalProducts, newProduct];
  else finalProducts.splice(productIndex, 1);

  set({ ...rest, products: finalProducts });
  localStorage.setItem("cart", JSON.stringify(finalProducts));
};
