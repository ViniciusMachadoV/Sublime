import styles from "./DivaSection.module.css";

function DivaSection() {
  return (
    <div className="mx-auto d-flex flex-row justify-content-between">
      <div className="col-md-4 py-5 d-flex flex-column justify-content-between">
        <span className={`row ${styles.subtituloHome}`}>
          A handcrafted collection for the new season to come
        </span>
        <strong className={`row ${styles.tituloHome}`}>
          Summer Collection
        </strong>
      </div>

      <div className={`col-md-6 ${styles.divaSectionImages}`}>
        <img
          className={styles.imagemCoverHome}
          src="/assets/productcardimage.jpg"
          alt="Modelo com cabelo curto e óculos de sol preto no rosto olhando na diagonal para baixo, usando uma blusa branca e com um paletó marrom vestido em apenas um dos braços"
        />
        <img
          className={styles.horizontalCoverImage}
          src="/assets/divasection-2.jpg"
          alt="A maior diva da terra em pé."
        />
        <img
          className={styles.verticalCoverImage}
          src="/assets/divasection-3.jpg"
          alt="A mulher mais linda do mundo apoiada em uma parede olhando para a câmera serena por saber que é a mais perfeita obra de arte existente"
        />
      </div>
    </div>
  );
}

export default DivaSection;
