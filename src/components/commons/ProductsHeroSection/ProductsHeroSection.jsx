import styles from "./ProductsHeroSection.module.css";

export function ProductsHeroSection(props) {
  return (
    <section className={styles.heroSectionContainer}>
      <div>
        {[1, 2, 3].map((photo) => (
          <img
            key={photo}
            className={`${styles.heroSectionImage} ${styles[`image-${photo}`]}`}
            src={`/assets/${props.prefixPhoto}-${photo}.jpg`}
            alt=""
          />
        ))}

        <h1 className={styles.heroSectionTitle}>{props.title}</h1>
      </div>
    </section>
  );
}
