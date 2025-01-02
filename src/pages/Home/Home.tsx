import css from "./Home.module.css";
import Layout from "@layouts/Layout/Layout";
import { HOME } from "./path";

export default function Home() {
  return (
    <Layout title={HOME.display}>
      <main className={css.home}>
        <h1>¡Hola mundo!</h1>
        <img src="react.svg" alt="algo" />
      </main>
    </Layout>
  );
}
