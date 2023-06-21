import styles from "./ProductCard.module.css";

function ProductCard(props) {
  return (
    <section className={styles.productContainer}>
      <div className={styles.productCardImgContainer}>
        <img
          className={styles.productCardImage}
          src={props.image}
          alt={props.name}
        />
        <button className={styles.productCardButton}>
          Adicionar ao Carrinho
        </button>
      </div>
      <div className={styles.productCardInfo}>
        <strong className={styles.productCardName}>{props.name}</strong>
        <span className={styles.productCardPrice}>{props.price} €</span>
      </div>
    </section>
  );
}

export default ProductCard;
