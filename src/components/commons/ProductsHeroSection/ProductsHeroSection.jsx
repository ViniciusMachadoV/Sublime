import styles from "./ProductsHeroSection.module.css";

export function ProductsHeroSection(props) {
  return (
    <section className={styles.heroSectionContainer}>
      <div>
        <img
          className={`${styles.heroSectionImage} ${styles["image-1"]}`}
          src="/assets/feminino-1.jpg"
          alt=""
        />

        <img
          className={`${styles.heroSectionImage} ${styles["image-3"]}`}
          src="/assets/feminino-3.jpg"
          alt=""
        />

        <img
          className={`${styles.heroSectionImage} ${styles["image-2"]}`}
          src="/assets/feminino-2.jpg"
          alt=""
        />

        <h1 className={styles.heroSectionTitle}>{props.title}</h1>
      </div>
    </section>
  );
}
