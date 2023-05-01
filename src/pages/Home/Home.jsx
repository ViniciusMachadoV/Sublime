import styles from "./Home.module.css";

function Home() {
  return (
    <div className="container w-50 mt-5 pt-5 mx-auto d-flex flex-row justify-content-between">
      <div className="col-md-4 d-flex flex-column justify-content-end">
        <strong className={`row ${styles.tituloHome}`}>sublime</strong>

        <span className={`row ${styles.subtituloHome}`}>
          A handcrafted collection for the new season to come
        </span>
      </div>

      <div className="col-md-6 d-flex justify-content-end">
        <img
          className={styles.imagemCoverHome}
          src="/assets/cover-1.jpg"
          alt="Modelo com cabelo curto e óculos de sol preto no rosto olhando na diagonal para baixo, usando uma blusa branca e com um paletó marrom vestido em apenas um dos braços"
        />
      </div>
    </div>
  );
}

export default Home;
