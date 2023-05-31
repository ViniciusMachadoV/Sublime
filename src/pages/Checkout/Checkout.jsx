import { CheckoutForm } from "../../components/forms/CheckoutForm/CheckoutForm";

function Checkout() {
  return (
    <section className="container h-full d-flex justify-content-between">
      <div className="col-md-7">
        <CheckoutForm id="test-form" />
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
            <tr>
              <td>3 Produtos</td>
              <td className="text-end">13200 €</td>
            </tr>
            <tr>
              <td>Descontos</td>
              <td className="text-end text-success">- 250 €</td>
            </tr>
            <tr>
              <td>Frete</td>
              <td className="text-end">200 €</td>
            </tr>
            <tr>
              <td>Total</td>
              <td className="text-end">13150 €</td>
            </tr>
          </tbody>
        </table>

        <button className="btn btn-primary btn-large" form="test-form">
          Finalizar Pagamento
        </button>
      </aside>
    </section>
  );
}

export default Checkout;
