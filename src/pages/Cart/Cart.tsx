import Layout from "@layouts/Layout/Layout";
import { CART } from "./path";

export default function Cart() {
  return (
    <Layout title={CART.display}>
      <main>
        <h1>Carrito</h1>
      </main>
    </Layout>
  );
}
