import { toCOP } from "@utils/toCOP";
import css from "./ProductCard.module.css";
import { Product } from "@api/types";
import { PRODUCT_DETAILS } from "@pages/ProductDetails/path";
import { Link } from "react-router-dom";

export default function ProductCard(props: Props) {
  const { product } = props;
  const { name, img, description, price } = product;

  return (
    <Link to={`${to}/${product.id}`} className={css.card}>
      <img src={img} alt={name} loading="lazy" />
      <h6>{name}</h6>
      <div>{toCOP(price)}</div>
      <p>{description}</p>
    </Link>
  );
}

type Props = {
  product: Product;
};

const { to } = PRODUCT_DETAILS;
