import ProductCard from "../ProductCard/ProductCard";

import styles from "./ListaProdutos.module.css";

function ListaProdutos(props) {
  return (
    <section className={`mt-5 gx-5 mx-auto ${styles.productsList}`}>
      {props.produtos.map((produto) => (
        <>
          <div className="mx-auto">
            <ProductCard
              image={produto.img}
              name={produto.nome}
              price={produto.preco}
            />
          </div>
        </>
      ))}
    </section>
  );
}

export default ListaProdutos;
