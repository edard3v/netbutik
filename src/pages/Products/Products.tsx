import Layout from "@layouts/Layout/Layout";
import { PRODUCTS } from "./config";

export default function Products() {
  return (
    <Layout title={PRODUCTS.display}>
      <main>productos</main>
    </Layout>
  );
}
