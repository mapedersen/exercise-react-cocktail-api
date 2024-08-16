import { useState, useEffect } from "react";
import { ICocktail } from "../interfaces/interfaces";

const LOCAL_STORAGE_KEY = "favourites";

export const useFavouritesLocalStorage = () => {
  const [favourites, setFavourites] = useState<ICocktail[]>(() => {
    //Get favourites from local storage
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

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
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favourites));
  }, [favourites]);

  return { favourites, handleAddToFavourites, handleRemoveFromFavourites };
};
