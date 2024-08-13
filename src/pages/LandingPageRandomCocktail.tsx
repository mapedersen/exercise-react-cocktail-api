import { ReactElement } from "react";
import { useRandomCocktail } from "../hooks/useRandomCocktail";

import CocktailCard from "../components/CocktailCard";
import { NewRandomCocktailButton, SeeMoreButton } from "../components/Buttons";

export default function LandingPageRandomCocktail(): ReactElement {
  const { randomCocktail, fetchNewRandomCocktail } = useRandomCocktail();

  return (
    <>
      <h1>Random Cocktail</h1>
      <CocktailCard cocktail={randomCocktail} />
      <NewRandomCocktailButton onClick={fetchNewRandomCocktail} />
      <SeeMoreButton cocktail={randomCocktail} />
    </>
  );
}
