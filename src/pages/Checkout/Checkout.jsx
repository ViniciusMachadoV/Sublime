function Checkout() {
  return (
    <section className="container h-full d-flex justify-content-between">
      <div className="col-md-7">
        <form className="row g-3">
          <h3>Endereço</h3>
          <div className="col-md-6">
            <label for="nome" className="form-label">
              Nome
            </label>
            <input type="text" className="form-control" id="nome" />
          </div>
          <div className="col-md-6">
            <label for="sobrenome" className="form-label">
              Sobrenome
            </label>
            <input type="text" className="form-control" id="sobrenome" />
          </div>
          <div className="col-12">
            <label for="email" className="form-label">
              E-mail
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text">@</span>
              <input type="email" className="form-control" id="email" />
            </div>
          </div>
          <div className="col-12">
            <label for="endereco" className="form-label">
              Endereço
            </label>
            <input type="text" className="form-control" id="endereco" />
          </div>
          <div className="col-md-6">
            <label for="cidade" className="form-label">
              Cidade
            </label>
            <input type="text" className="form-control" id="cidade" />
          </div>
          <div className="col-md-4">
            <label for="estado" className="form-label">
              Estado
            </label>
            <select id="estado" className="form-select">
              <option selected>Escolha um Estado...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-2">
            <label for="cep" className="form-label">
              CEP
            </label>
            <input type="text" className="form-control" id="cep" />
          </div>

          <hr className="mt-5" />

          <h3> Cobrança</h3>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                Pix
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                Boleto
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                Cartão de Crédito
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              Pagar com Pix
            </div>
            <div
              class="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
              Boleto
            </div>
            <div
              class="tab-pane fade"
              id="contact-tab-pane"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabindex="0"
            >
              Cartão de Crédito
            </div>
          </div>
        </form>
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

        <button className="btn btn-primary btn-large" to="/checkout">
          Finalizar Pagamento
        </button>
      </aside>
    </section>
  );
}

export default Checkout;
