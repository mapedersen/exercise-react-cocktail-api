import { ReactElement } from "react";
import { RandomCocktailButton, SeeMoreButton } from "../components/Buttons";
import CocktailCard from "../components/CocktailCard";

export default function LandingPage(): ReactElement {
  return (
    <>
      <CocktailCard />
      <RandomCocktailButton />
      <SeeMoreButton />
    </>
  );
}
