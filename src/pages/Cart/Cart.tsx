import css from "./Cart.module.css";
import Layout from "@layouts/Layout/Layout";
import { CART } from "./path";
import { useCartStore } from "./store/useCartStore";
import CartCard from "./CartCard/CartCard";
import { toCOP } from "@utils/toCOP";
import Btn from "@components/buttons/Btn/Btn";

export default function Cart() {
  const cart = useCartStore((store) => store.products);

  let total = 0;
  const cards = cart.map((product) => {
    total += product.price;
    return <CartCard key={product.id} product={product} />;
  });

  return (
    <Layout title={CART.display}>
      <main className={css.cart}>
        <div className={css.wrapper1}>
          <section className={css.cards}>{cards}</section>
          <div className={css.total}>Total: {toCOP(total)}</div>
          <Btn>Comprar</Btn>
        </div>
      </main>
    </Layout>
  );
}
