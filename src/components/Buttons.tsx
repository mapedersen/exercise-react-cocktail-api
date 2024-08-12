import { ReactElement } from "react";
import { useOutletContext } from "react-router-dom";
import { ICocktailContext } from "../interfaces/interfaces";

export function RandomCocktailButton(): ReactElement {
  const { fetchNewCocktail } = useOutletContext<ICocktailContext>();

  function handleOnClick(event: React.MouseEvent<HTMLButtonElement>): void {
    fetchNewCocktail();
  }
  return <button onClick={handleOnClick}>New Cocktail</button>;
}

export function SeeMoreButton(): ReactElement {
  return <button>See more</button>;
}
