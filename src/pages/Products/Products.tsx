import css from "./Products.module.css";
import Layout from "@layouts/Layout/Layout";
import { PRODUCTS } from "./path";
import { useProducts } from "./useProducts";
import Loading from "@components/loaders/Loading/Loading";
import Err from "@components/errs/Err/Err";
import ProductCard from "./ProductCard/ProductCard";

export default function Products() {
  const { isLoading, products, isError } = useProducts();

  return (
    <Layout title={PRODUCTS.display}>
      <main className={css.products}>
        {isLoading && <Loading />}
        {isError && !isLoading && <Err />}

        <section className={css.cards}>
          {products?.records.map((record) => (
            <ProductCard key={record.id} product={record} />
          ))}
        </section>
      </main>
    </Layout>
  );
}
