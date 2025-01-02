import A04 from "@pages/404/404";
import { HOME } from "@pages/Home/path";
import { PRODUCT_DETAILS } from "@pages/ProductDetails/path";
import { PRODUCTS } from "@pages/Products/path";
import { createBrowserRouter, Outlet } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <A04 />,
    children: [HOME, PRODUCTS, PRODUCT_DETAILS],
  },
]);

export const NAVIGATION_PAGES = [HOME, PRODUCTS];
