import { Button } from "bootstrap";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";


function CartItem() {
  return (
    <section className="container h-full d-flex justify-content-between">
      <div className="col-md-7">
        <table class="table">
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
                  src="/assets/cover-1.jpg"
                  alt="Nome do Produto"
                />
              </th>
              <td>Nome do Produto</td>
              <td>4200 €</td>
              <button>Remover</button>
            </tr>
            </tbody>
        </table>
      </div>

        <Link className="btn btn-primary btn-large" to="/checkout">
          Confirmar Pagamento
        </Link>
    </section>
  );
}

export default CartItem;
