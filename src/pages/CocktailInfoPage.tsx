import { ReactElement, useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

import { fetchCocktailByName } from "../api/cocktailService";
import { ICocktail, ICocktailContext } from "../interfaces/interfaces";

import DetailedCocktailCard from "../components/DetailedCocktailCard";
import { LoadingSpinner } from "../components/ui/Loading";
import { ToggleCocktailAsFavouriteButton } from "../components/ui/Buttons";

export default function CocktailInfoPage(): ReactElement {
  const { name } = useParams<{ name: string }>();
  const [cocktail, setCocktail] = useState<ICocktail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavourite, setIsFavourite] = useState(false);
  const { favourites, handleAddToFavourites, handleRemoveFromFavourites } =
    useOutletContext<ICocktailContext>();

  useEffect(() => {
    if (name) {
      fetchCocktailByName(name).then(setCocktail);
      setTimeout(() => setIsLoading(false), 300);
    }
  }, [name]);

  useEffect(() => {
    if (cocktail) {
      setIsFavourite(favourites.some((fav) => fav.id === cocktail.id));
    }
  }, [favourites, cocktail]);

  const handleAddClick = () => {
    if (cocktail) handleAddToFavourites(cocktail);
  };

  const handleRemoveClick = () => {
    if (cocktail) handleRemoveFromFavourites(cocktail);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <DetailedCocktailCard cocktail={cocktail} />
      <ToggleCocktailAsFavouriteButton
        onClickAdd={handleAddClick}
        onClickRemove={handleRemoveClick}
        isFavourite={isFavourite}
      />
    </>
  );
}
