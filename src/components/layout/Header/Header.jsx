import { Link } from "react-router-dom";

import Logo from "../../commons/Logo/Logo";

function Header() {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 px-5 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <Logo />
      </div>

      <nav>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link className="nav-link px-2" to="/feminino"></Link>
          </li>
          <li>
            <Link className="nav-link px-2" to="/masculino"></Link>
          </li>
          <li>
            <Link className="nav-link px-2" to="/bolsas"></Link>
          </li>
          <li>
            <div class="dropdown">
              <button
                class="btn btn-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </button>

              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="/feminino">
                    Feminino
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/masculino">
                    Masculino
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/bolsas">
                    Bolsas
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link className="nav-link px-2" to="/outlet">
              Outlet
            </Link>
          </li>
          <li>
            <Link className="nav-link px-2" to="/lookbook">
              Lookbook
            </Link>
          </li>

          <li></li>
        </ul>
      </nav>

      <div className="col-md-3 text-end">
        <Link
          className="btn btn-primary d-inline-flex align-items-center"
          to="/carrinho"
        >
          <i class="bi bi-basket2 me-2" />
          Carrinho
        </Link>
      </div>
    </header>
  );
}

export default Header;
