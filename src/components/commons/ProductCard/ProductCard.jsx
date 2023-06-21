import { useContext } from "react";
import styles from "./ProductCard.module.css";
import AppContext from "../../../pages/Carrinho/Context/CartContext";

function ProductCard(props) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const handleAddCart = () => {
    const updatedCartItems = cartItems;
    updatedCartItems.push(props);
  };

  return (
    <section className={styles.productContainer}>
      <div className={styles.productCardImgContainer}>
        <img
          className={styles.productCardImage}
          src={props.image}
          alt={props.name}
        />
        <button className={styles.productCardButton} onClick={handleAddCart}>
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
