import { ReactElement } from "react";
import { useOutletContext } from "react-router-dom";
import { ICocktailContext } from "../interfaces/interfaces";

export default function DetailedCocktailCard(): ReactElement {
  const { randomCocktail } = useOutletContext<ICocktailContext>();
  return (
    <div className="DetailedCocktailCard">
      {randomCocktail ? (
        <>
          <h2>{randomCocktail.name}</h2>
          <img src={randomCocktail.image} alt={randomCocktail.name} />
          <p>Category: {randomCocktail.category}</p>
          <p>Tags: {randomCocktail.tags.join(", ")}</p>
          <p>Glass: {randomCocktail.glass}</p>
          <h3>Ingredients:</h3>
          <ul>
            {randomCocktail.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient} - {randomCocktail.measurements[index]}
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
