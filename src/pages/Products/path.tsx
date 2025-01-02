import Products from "./Products";

export const PRODUCTS = {
  id: crypto.randomUUID(),
  path: "productos",
  to: "/productos",
  display: "Productos",
  element: <Products />,
};
