import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header sticky-top py-1">
      <Link
        to="/"
        className="display-4 font-weight-normal header"
        id="vacinadados"
      >
        <b>#VacinaJá</b>
      </Link>
    </header>
  );
}
