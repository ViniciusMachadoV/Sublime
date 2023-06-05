import { Link } from "react-router-dom";

import { Summary } from "../../components/payment/Summary/Summary";

function Carrinho() {
  return (
    <section className="container h-full d-flex justify-content-between">
      <div className="col-md-7">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Imagem</th>
              <th scope="col">Nome</th>
              <th scope="col">Preço</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="w-25">
                <img
                  className="w-75 img-fluid"
                  src="/assets/productcardimage.jpg"
                  alt="Nome do Produto"
                />
              </th>
              <td>Nome do Produto</td>
              <td>4200 €</td>
            </tr>
            <tr>
              <th scope="row" className="w-25">
                <img
                  className="w-75 img-fluid"
                  src="/assets/productcardimage.jpg"
                  alt="Nome do Produto 2"
                />
              </th>
              <td>Nome do Produto 2</td>
              <td>6300 €</td>
            </tr>
            <tr>
              <th scope="row" className="w-25">
                <img
                  className="w-75 img-fluid"
                  src="/assets/productcardimage.jpg"
                  alt="Nome do Produto 3"
                />
              </th>
              <td>Nome do Produto 3</td>
              <td>2700 €</td>
            </tr>
          </tbody>
        </table>
      </div>

      <aside className="col-md-4 h-100">
        <Summary>
          <Link className="btn btn-primary btn-large" to="/checkout">
            Confirmar Pagamento
          </Link>
        </Summary>
      </aside>
    </section>
  );
}

export default Carrinho;
