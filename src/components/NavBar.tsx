import { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function NavBar(): ReactElement {
  return (
    <nav>
      <Link to="/landing-page">Home</Link>
      <Link to="/search">Search</Link>
    </nav>
  );
}
