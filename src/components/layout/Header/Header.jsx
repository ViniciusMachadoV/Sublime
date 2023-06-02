import { Link } from "react-router-dom";

import Logo from "../../commons/Logo/Logo";

function Header() {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-4 px-5 mb-4">
      <div className="col-md-3 mb-2 mb-md-0">
        <Logo />
      </div>

      <nav>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link className="nav-link px-2" to="/feminino">
              Feminino
            </Link>
          </li>
          <li>
            <Link className="nav-link px-2" to="/masculino">
              Masculino
            </Link>
          </li>
          <li>
            <Link className="nav-link px-2" to="/bolsas">
              Bolsas
            </Link>
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
          className="btn btn-light d-inline-flex align-items-center"
          to="#"
          title="Buscar"
        >
          <i class="bi bi-search" />
        </Link>

        <Link
          className="btn btn-light d-inline-flex align-items-center"
          to="/carrinho"
          title="Carrinho"
        >
          <i class="bi bi-basket2" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
