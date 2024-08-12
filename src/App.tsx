import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { UseCocktail } from "./hooks/useCocktail";

import NavBar from "./components/NavBar";

export default function App(): ReactElement {
  const { randomCocktail, fetchNewCocktail } = UseCocktail();

  return (
    <div className="App">
      <NavBar />
      <Outlet context={{ randomCocktail, fetchNewCocktail }} />
    </div>
  );
}
