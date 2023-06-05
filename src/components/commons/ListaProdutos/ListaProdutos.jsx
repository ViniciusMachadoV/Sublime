import ProductCard from "../ProductCard/ProductCard";

import styles from "./ListaProdutos.module.css";

function ListaProdutos(props) {
  return (
    <section className={`mt-5 gx-5 mx-auto ${styles.productsList}`}>
      {props.produtos.map((produto) => (
        <>
          <div className="col-lg-5 col-md-4 col-sm-6 mb-5">
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
