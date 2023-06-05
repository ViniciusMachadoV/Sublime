import { Summary } from "../../components/payment/Summary/Summary";

import { CheckoutForm } from "../../components/forms/CheckoutForm/CheckoutForm";

function Checkout() {
  const checkoutIdForm = "checkout-id-form";

  return (
    <section className="container h-full d-flex justify-content-between {">
      <div className="col-md-7">
        <CheckoutForm id={checkoutIdForm} />
      </div>

      <aside className="col-md-4 h-100">
        <Summary>
          <button className="btn btn-primary btn-large" form={checkoutIdForm}>
            Finalizar Pagamento
          </button>
        </Summary>
      </aside>
    </section>
  );
}

export default Checkout;
