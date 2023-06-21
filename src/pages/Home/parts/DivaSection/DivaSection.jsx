import { useContext } from "react";

import { ThemeContext } from "../../../../infra/contexts/ThemeContext";

import styles from "./DivaSection.module.css";

const photos = {
  summer: ["summerclose.png", "summerhorizontal.png", "summervertical.png"],
  spring: [
    "standmodelspring.jpg",
    "springhorizontalpic.jpg",
    "cameramodelspring.jpg",
  ],
  winter: [
    "hunterclosewinter.jpg",
    "hunterlayedwinter.jpg",
    "hunterstandwinter.png",
  ],
  autumn: ["cover-1.jpg", "divasection-2.jpg", "divasection-3.jpg"],
  default: ["cover-1.jpg", "divasection-2.jpg", "divasection-3.jpg"],
};

function DivaSection() {
  const { theme } = useContext(ThemeContext);

  const sectionPhotos = theme
    ? photos[theme] ?? photos.default
    : photos.default;

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
          src={`/assets/${sectionPhotos[0]}`}
          alt="Um close no rosto da Hunter mostrando as joias nas mãos."
        />
        <img
          className={styles.horizontalCoverImage}
          src={`/assets/${sectionPhotos[1]}`}
          alt="Hunter deitada usando um bodysuit azul."
        />
        <img
          className={styles.verticalCoverImage}
          src={`/assets/${sectionPhotos[2]}`}
          alt="A mulher mais linda do mundo em pé um pouco de lado olhando em direção à camera usando um bodysuit azul"
        />
      </div>
    </div>
  );
}

export default DivaSection;
