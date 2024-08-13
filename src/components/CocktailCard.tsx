import { ReactElement } from "react";
import { ICocktail } from "../interfaces/interfaces";

interface CocktailCardProps {
  cocktail: ICocktail | null;
}

export default function CocktailCard({ cocktail }: CocktailCardProps): ReactElement {
  return (
    <div className="CocktailCard">
      <h2>{cocktail?.name || "Unknown"}</h2>
      <img src={cocktail?.image} alt={cocktail?.name} />
    </div>
  );
}
