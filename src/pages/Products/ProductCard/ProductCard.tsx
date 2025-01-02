import { toCOP } from "@utils/toCOP";
import css from "./ProductCard.module.css";
import { Product } from "@api/types";

export default function ProductCard(props: Props) {
  const { product } = props;
  const { name, img, description, price } = product;

  return (
    <article className={css.card}>
      <img src={img} alt={name} loading="lazy" />
      <h6>{name}</h6>
      <div>{toCOP(price)}</div>
      <p>{description}</p>
    </article>
  );
}

type Props = {
  product: Product;
};
