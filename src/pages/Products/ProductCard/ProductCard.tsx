import { Product } from "@api/types";

export default function ProductCard(props: Props) {
  const { product } = props;
  const { name, img, description } = product;

  return (
    <article>
      <img src={img} alt={name} />
      <h6>{name}</h6>
      <p>{description}</p>
    </article>
  );
}

type Props = {
  product: Product;
};
