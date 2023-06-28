import ProductCard from "../../../../components/commons/ProductCard/ProductCard";

import styles from "./NewPiecesList.module.css";

function NewPiecesList() {
  return (
    <>
      <div className={styles.newPiecesList}>
        <ProductCard
          id={9996}
          image="/assets/productcardimage.jpg"
          name="Green Shirt"
          price={5000}
        />
        <ProductCard
          id={9997}
          image="/assets/productcardimage.jpg"
          name="Green Shirt"
          price={5000}
        />

        <strong
          className={`${styles.newPiecesListNoCardTitle} ${styles.newPiecesNoCard}`}
        >
          Novidades
        </strong>

        <ProductCard
          id={9996}
          image="/assets/productcardimage.jpg"
          name="Green Shirt"
          price={5000}
        />
        <ProductCard
          id={9997}
          image="/assets/productcardimage.jpg"
          name="Green Shirt"
          price={5000}
        />

        <span
          className={`${styles.newPiecesListNoCardSubtitle} ${styles.newPiecesNoCard}`}
        >
          Explore the new pieces of our seasonal luxurious collection
        </span>

        <ProductCard
          id={9998}
          image="/assets/productcardimage.jpg"
          name="Green Shirt"
          price={5000}
        />
        <ProductCard
          id={9999}
          image="/assets/productcardimage.jpg"
          name="Green Shirt"
          price={5000}
        />
      </div>
    </>
  );
}

export default NewPiecesList;
