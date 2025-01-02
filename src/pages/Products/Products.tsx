import Layout from "@layouts/Layout/Layout";
import { PRODUCTS } from "./config";
import { useGetProducts } from "./useGetProducts";
import Loading from "@components/loaders/Loading/Loading";
import Err from "@components/errs/Err/Err";

export default function Products() {
  const { isLoading, products, isError } = useGetProducts();

  return (
    <Layout title={PRODUCTS.display}>
      <main>
        {isLoading && <Loading />}
        {isError && !isLoading && <Err />}

        {products?.records.map((record) => (
          <div key={record.id}>{record.name}</div>
        ))}
      </main>
    </Layout>
  );
}
