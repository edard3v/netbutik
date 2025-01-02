import Layout from "@layouts/Layout/Layout";
import { useParams } from "react-router-dom";
import { PRODUCT_DETAILS } from "./path";

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <Layout title={PRODUCT_DETAILS.display}>
      <main>
        <h1>{id}</h1>
      </main>
    </Layout>
  );
}
