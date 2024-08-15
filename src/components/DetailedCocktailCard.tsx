import { ReactElement } from "react";
import { ICocktail } from "../interfaces/interfaces";

interface DetailedCocktailCardProps {
  cocktail: ICocktail | null;
}

export default function DetailedCocktailCard({
  cocktail,
}: DetailedCocktailCardProps): ReactElement {
  return (
    <div className="DetailedCocktailCard">
      {cocktail ? (
        <>
          <h2>{cocktail.name}</h2>
          <img src={cocktail.image} alt={cocktail.name} />
          <p>Category: {cocktail.category}</p>
          <p>Tags: {cocktail.tags.join(", ")}</p>
          <p>Glass: {cocktail.glass}</p>
          <h3>Ingredients:</h3>
          <ul>
            {cocktail.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient} - {cocktail.measurements[index]}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No cocktail data available.</p>
      )}
    </div>
  );
}
