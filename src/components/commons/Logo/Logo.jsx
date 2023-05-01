import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="fs-5 d-inline-flex link-body-emphasis text-decoration-none"
    >
      Sublime
    </Link>
  );
}

export default Logo;
