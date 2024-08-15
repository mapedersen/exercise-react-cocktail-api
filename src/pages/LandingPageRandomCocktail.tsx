import { ReactElement } from "react";
import { useRandomCocktail } from "../hooks/useRandomCocktail";

import CocktailCard from "../components/CocktailCard";
import { NewRandomCocktailButton, SeeMoreButton } from "../components/Buttons";

export default function LandingPageRandomCocktail(): ReactElement {
  const { randomCocktail, fetchNewRandomCocktail } = useRandomCocktail();

  return (
    <div className="landingPage">
      <h1>Random Cocktail</h1>
      <CocktailCard cocktail={randomCocktail} />
      <div className="landingPageButtons">
        <NewRandomCocktailButton onClick={fetchNewRandomCocktail} />
        <SeeMoreButton cocktail={randomCocktail} />
      </div>
    </div>
  );
}
