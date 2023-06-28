import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../infra/contexts/CartContext";

function Carrinho() {
  const { cartItems } = useContext(CartContext);

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
            {cartItems?.map((item) => (
              <tr key={item.id}>
                <th scope="row" className="w-25">
                  <img
                    className="w-75 img-fluid"
                    src={item.image}
                    alt={item.name}
                  />
                </th>
                <td>{item.name}</td>
                <td>{item.price} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <aside className="col-md-4 h-100">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" colSpan={2}>
                Sumário
              </th>
            </tr>
          </thead>
          <tbody>
            <div>
              <div className="col-md-6">
                <label htmlFor="desconto" className="form-label">
                  Codigo de desconto
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="desconto"
                  placeholder="Codigo"
                />
              </div>
              <div className="col-md-6">
                <button className="btn btn-outline-primary btn-small">
                  Verificar
                </button>
              </div>
              <div className="col-md-6">
                <label htmlFor="calculo" className="form-label">
                  Calcule o frete
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="calculo"
                  placeholder="CEP"
                />
              </div>
              <div className="col-md-6">
                <button className="btn btn-outline-primary btn-small">
                  Calcular
                </button>
              </div>
            </div>
            <tr>
              <td>3 Produtos</td>
              <td className="text-end">13200 €</td>
            </tr>
            <tr>
              <td>Descontos</td>
              <td className="text-end">0 €</td>
            </tr>
            <tr>
              <td>Total</td>
              <td className="text-end">13200 €</td>
            </tr>
          </tbody>
        </table>

        <Link className="btn btn-primary btn-large" to="/checkout">
          Confirmar Pagamento
        </Link>
      </aside>
    </section>
  );
}

export default Carrinho;
