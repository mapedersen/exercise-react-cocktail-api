import { ReactElement } from "react";
import { useOutletContext } from "react-router-dom";
import { ICocktailContext } from "../interfaces/interfaces";

export default function CocktailCard(): ReactElement {
  const { randomCocktail } = useOutletContext<ICocktailContext>();
  return (
    <div className="CocktailCard">
      <h2>{randomCocktail?.name || "Unknown"}</h2>
      <img src={randomCocktail?.image} alt={randomCocktail?.name} />
    </div>
  );
}
