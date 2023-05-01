import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="d-inline-flex link-body-emphasis text-decoration-none"
    >
      Sublime
    </Link>
  );
}

export default Logo;
