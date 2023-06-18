import styles from "./Loader.module.css";

export function Loader() {
  return (
    <section className={styles.loaderContainer}>
      <span className={styles.loader}></span>
      <span>Carregando...</span>
    </section>
  );
}
