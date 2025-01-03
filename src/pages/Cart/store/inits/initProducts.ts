import { Product } from "@api/types";

export const initProducts = () => {
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
};
