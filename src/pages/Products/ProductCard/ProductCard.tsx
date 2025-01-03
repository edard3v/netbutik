import { toCOP } from "@utils/toCOP";
import css from "./ProductCard.module.css";
import { Product } from "@api/types";
import { PRODUCT_DETAILS } from "@pages/ProductDetails/path";
import { Link } from "react-router-dom";
import { useCartStore } from "@pages/Cart/store/useCartStore";

export default function ProductCard(props: Props) {
  const { product } = props;
  const { name, img, description, price } = product;

  useCartStore((store) => store.products);
  const toggle = useCartStore((store) => store.toggle);
  const isInCart = useCartStore((store) => store.isInCart);

  return (
    <article className={css.card}>
      <Link to={`${to}/${product.id}`}>
        <img src={img} alt={name} loading="lazy" />
      </Link>
      <h6 className={css.name}>
        {name}{" "}
        <button className={css.cart} onClick={() => toggle(product)}>
          {isInCart(product.id) ? "📌" : "🛒"}
        </button>
      </h6>
      <div>{toCOP(price)}</div>
      <p>{description}</p>
    </article>
  );
}

type Props = {
  product: Product;
};

const { to } = PRODUCT_DETAILS;
