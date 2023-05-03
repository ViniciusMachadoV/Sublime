import styles from "./ListaProdutos.module.css";

function ListaProdutos(props) {
  return (
    <section className="row mt-5 gx-5 mx-auto">
      {props.produtos.map((produto) => (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img
              src={produto.img}
              alt={produto.nome}
              className={`card-img-top ${styles.imagemProduto}`}
            />

            <div className="card-body d-flex flex-column">
              <strong className="card-title fs-4">{produto.nome}</strong>

              <span className="fs-5">{produto.preco} €</span>
            </div>

            <div className="card-footer">
              <button className="btn btn-primary">Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ListaProdutos;
