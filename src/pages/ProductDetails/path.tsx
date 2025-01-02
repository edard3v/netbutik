import ProductDetails from "./ProductDetails";

export const PRODUCT_DETAILS = {
  id: crypto.randomUUID(),
  path: "producto/:id",
  to: "/producto",
  display: "Producto",
  element: <ProductDetails />,
};
