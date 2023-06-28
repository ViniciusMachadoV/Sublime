import ProductCard from "../../../../components/commons/ProductCard/ProductCard";

import styles from "./NewPiecesList.module.css";

function NewPiecesList() {
  return (
    <>
      <div className={styles.newPiecesList}>
        <ProductCard
          image="/assets/productcardimage.jpg"
          name="Green Shirt"
          price={5000}
        />
        <ProductCard
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
          image="/assets/productcardimage.jpg"
          name="Green Shirt"
          price={5000}
        />
        <ProductCard
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
          image="/assets/productcardimage.jpg"
          name="Green Shirt"
          price={5000}
        />
        <ProductCard
          image="/assets/productcardimage.jpg"
          name="Green Shirt"
          price={5000}
        />
      </div>
    </>
  );
}

export default NewPiecesList;
