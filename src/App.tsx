import { ReactElement, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import { ICocktail } from "./interfaces/interfaces";

export default function App(): ReactElement {
  const [favourites, setFavourites] = useState<ICocktail[]>([]);

  const handleAddToFavourites = (cocktail: ICocktail) => {
    if (cocktail && !favourites.find((fav) => fav.id === cocktail.id)) {
      setFavourites((prev) => [...prev, cocktail]);
    }
  };

  const handleRemoveFromFavourites = (cocktail: ICocktail) => {
    if (cocktail && favourites.find((fav) => fav.id === cocktail.id)) {
      setFavourites((prev) => prev.filter((fav) => fav.id !== cocktail.id));
    }
  };

  useEffect(() => {
    console.log(favourites);
  }, [favourites]);

  return (
    <div className="App">
      <NavBar />
      <Outlet context={{ favourites, handleAddToFavourites, handleRemoveFromFavourites }} />
    </div>
  );
}
