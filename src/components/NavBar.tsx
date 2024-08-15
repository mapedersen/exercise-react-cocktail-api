import { ReactElement } from "react";
import { Link } from "react-router-dom";

import "../css/NavBar.css";

export default function NavBar(): ReactElement {
  return (
    <nav>
      <Link className="navbar-button" to="/">
        Random
      </Link>
      <Link className="navbar-button" to="/search">
        Search
      </Link>
      <Link className="navbar-button" to="/favourites">
        Favourites
      </Link>
    </nav>
  );
}
