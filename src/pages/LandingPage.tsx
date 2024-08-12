import { ReactElement } from "react";
import { RandomCocktailButton, SeeMoreButton } from "../components/Buttons";
import CocktailCard from "../components/CocktailCard";
import DetailedCocktailCard from "../components/DetailedCocktailCard";

export default function LandingPage(): ReactElement {
  return (
    <>
      <h1>Random Cocktail</h1>
      <CocktailCard />
      <RandomCocktailButton />
      <SeeMoreButton />
    </>
  );
}
