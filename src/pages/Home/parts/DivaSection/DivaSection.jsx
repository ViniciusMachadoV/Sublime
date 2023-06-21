import styles from "./DivaSection.module.css";

function DivaSection() {
  return (
    <div className="mx-auto d-flex flex-row justify-content-between">
      <div className="col-md-4 py-5 d-flex flex-column justify-content-between">
        <span className={`row ${styles.subtituloHome}`}>
          A handcrafted collection for the new season to come
        </span>
        <strong className={`row ${styles.tituloHome}`}>
          Winter Collection
        </strong>
      </div>

      <div className={`col-md-6 ${styles.divaSectionImages}`}>
        <img
          className={styles.imagemCoverHome}
          src="/assets/hunterclosewinter.jpg"
          alt="Um close no rosto da Hunter mostrando as joias nas mãos."
        />
        <img
          className={styles.horizontalCoverImage}
          src="/assets/hunterlayedwinter.jpg"
          alt="Hunter deitada usando um bodysuit azul."
        />
        <img
          className={styles.verticalCoverImage}
          src="/assets/hunterstandwinter.png"
          alt="A mulher mais linda do mundo em pé um pouco de lado olhando em direção à camera usando um bodysuit azul"
        />
      </div>
    </div>
  );
}

export default DivaSection;
