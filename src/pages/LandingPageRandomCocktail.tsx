import { ReactElement } from "react";
import { useRandomCocktail } from "../hooks/useRandomCocktail";

import CocktailCard from "../components/CocktailCard";
import { NewRandomCocktailButton, SeeMoreButton } from "../components/ui/Buttons";
import { LoadingSpinner } from "../components/ui/Loading";

export default function LandingPageRandomCocktail(): ReactElement {
  const { randomCocktail, fetchNewRandomCocktail, isLoading } = useRandomCocktail();

  return (
    <div className="landingPage">
      <h1>Random Cocktail</h1>
      {!isLoading ? <CocktailCard cocktail={randomCocktail} /> : <LoadingSpinner />}
      <div className="landingPageButtons">
        <NewRandomCocktailButton onClick={fetchNewRandomCocktail} />
        <SeeMoreButton cocktail={randomCocktail} />
      </div>
    </div>
  );
}
