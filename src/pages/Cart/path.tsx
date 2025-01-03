import Cart from "./Cart";

export const CART = {
  id: crypto.randomUUID(),
  path: "carrito",
  to: "/carrito",
  display: "Carrito",
  element: <Cart />,
};
