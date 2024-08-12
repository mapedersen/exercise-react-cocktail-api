import { ReactElement, useState } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";

export default function App(): ReactElement {
  const [allCocktails, setAllCocktails] = useState([]);
  const [randomCocktail, setRandomCocktail] = useState([]);
  const [search, setSearch] = useState("");

  async function fetcRandomCockTail() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    console.log("fetch cocktail");
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setRandomCocktail(json);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
  }

  return (
    <div className="App">
      <NavBar />
      <Outlet context={randomCocktail} />
    </div>
  );
}
