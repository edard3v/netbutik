import Layout from "@layouts/Layout/Layout";
import { CART } from "./path";
import { useCartStore } from "./useCartStore";

export default function Cart() {
  const products = useCartStore((store) => store.products);
  console.log(products);
  return (
    <Layout title={CART.display}>
      <main>
        <h1>Carrito</h1>
      </main>
    </Layout>
  );
}
