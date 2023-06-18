import { Link } from "react-router-dom";

import styles from "../Header.module.css";

export function DesktopNav(props) {
  return (
    <>
      <nav className={props.className}>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link className={`nav-link px-3 ${styles.navLink}`} to="/feminino">
              Feminino
            </Link>
          </li>
          <li>
            <Link className={`nav-link px-3 ${styles.navLink}`} to="/masculino">
              Masculino
            </Link>
          </li>
          <li>
            <Link className={`nav-link px-3 ${styles.navLink}`} to="/bolsas">
              Bolsas
            </Link>
          </li>
          <li>
            <Link className={`nav-link px-3 ${styles.navLink}`} to="/outlet">
              Outlet
            </Link>
          </li>
          <li>
            <Link className={`nav-link px-3 ${styles.navLink}`} to="/lookbook">
              Lookbook
            </Link>
          </li>

          <li></li>
        </ul>
      </nav>

      <div className={`col-md-3 text-end ${props.className}`}>
        <Link
          className="btn btn-light d-inline-flex align-items-center"
          to="/buscar"
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
    </>
  );
}
