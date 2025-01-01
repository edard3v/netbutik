import css from "./Header.module.css";
import Link from "@components/links/Link/Link";
import { NAVIGATION_PAGES } from "@router/router";

export default function Header() {
  return (
    <header className={css.header}>
      <nav>
        {NAVIGATION_PAGES.map((page) => (
          <Link key={page.id} to={page.to}>
            {page.display}
          </Link>
        ))}
      </nav>
    </header>
  );
}
