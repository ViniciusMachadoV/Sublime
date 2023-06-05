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
        <spam className={styles.newPiecesListNoCard}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, minus
          eaque? Officia exercitationem libero earum repudiandae molestiae dicta
          omnis impedit modi numquam nesciunt adipisci consectetur ducimus est,
          deleniti temporibus delectus!
        </spam>
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
