import css from "./Err.module.css";

export default function Err() {
  return (
    <div className={css.err}>
      🪧 Ocurrió un error inesperado. Por favor, intente nuevamente más tarde.
    </div>
  );
}
