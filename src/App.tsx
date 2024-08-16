import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { useFavouritesLocalStorage } from "./hooks/useFavouritesLocalStorage";
import NavBar from "./components/NavBar";

import "./App.css";

export default function App(): ReactElement {
  const { favourites, handleAddToFavourites, handleRemoveFromFavourites } =
    useFavouritesLocalStorage();
  return (
    <div className="App">
      <NavBar />
      <Outlet context={{ favourites, handleAddToFavourites, handleRemoveFromFavourites }} />
    </div>
  );
}
