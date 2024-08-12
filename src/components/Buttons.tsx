import { ReactElement } from "react";
import { useOutletContext } from "react-router-dom";
import { ICocktailContext } from "../interfaces/interfaces";
import { useNavigate } from "react-router-dom";
import { formatCocktailName } from "../utils/utils";

// Button to generate a new cocktail
export function RandomCocktailButton(): ReactElement {
  const { fetchNewCocktail } = useOutletContext<ICocktailContext>();

  function handleClick() {
    fetchNewCocktail();
  }
  return <button onClick={handleClick}>New Cocktail</button>;
}

// Button to navigate to the CockTailInfoPage
export function SeeMoreButton(): ReactElement {
  const { randomCocktail } = useOutletContext<ICocktailContext>();
  const navigate = useNavigate();

  function handleClick() {
    if (randomCocktail) {
      // Encode the name to be used in the URL
      const formattedName = formatCocktailName(randomCocktail.name);
      // Navigate to the detail page with the cocktail name
      navigate(`/random-cocktail/${formattedName}`);
    }
  }

  return <button onClick={handleClick}>See more</button>;
}
