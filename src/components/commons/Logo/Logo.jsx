import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

function Logo(props) {
  const logoClassName = props.isSmall ? styles["logo--small"] : styles.logo;

  return (
    <Link
      to="/"
      className="fs-5 d-inline-flex link-body-emphasis text-decoration-none"
    >
      <img
        className={logoClassName}
        src="/assets/logo.svg"
        alt="Logo - Sublime"
      />
    </Link>
  );
}

export default Logo;
