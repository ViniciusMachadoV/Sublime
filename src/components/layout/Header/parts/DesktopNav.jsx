import { Link } from "react-router-dom";

import styles from "../Header.module.css";
import ThemeSelector from "../../../commons/ThemeSelector/ThemeSelector";

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
        </ul>
      </nav>

      <div
        className={`col-md-3 justify-content-end text-end ${props.className}`}
      >
        <Link
          className="btn btn-light mx-1 d-inline-flex align-items-center justify-content-center"
          to="/buscar"
          title="Buscar"
        >
          <i className="bi bi-search" />
        </Link>

        <Link
          className="btn btn-light mx-1 d-inline-flex align-items-center justify-content-center"
          to="/carrinho"
          title="Carrinho"
        >
          <i className="bi bi-basket2" />
        </Link>

        <ThemeSelector />
      </div>
    </>
  );
}
