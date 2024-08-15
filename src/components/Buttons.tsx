import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { formatCocktailName } from "../utils/utils";
import { ICocktail } from "../interfaces/interfaces";

// Button to generate a new cocktail
interface NewRandomCocktailButtonProps {
  onClick: () => void;
}
export function NewRandomCocktailButton({ onClick }: NewRandomCocktailButtonProps): ReactElement {
  function handleClick() {
    onClick();
  }
  return <button onClick={handleClick}>New Cocktail</button>;
}

// Button to navigate to the CockTailInfoPage
interface SeeMoreButtonProps {
  cocktail: ICocktail | null;
}
export function SeeMoreButton({ cocktail }: SeeMoreButtonProps): ReactElement {
  const navigate = useNavigate();

  function handleClick() {
    if (cocktail) {
      // Encode the name to be used in the URL
      // const formattedName = formatCocktailName(cocktail.name);
      // Navigate to the detail page with the cocktail name
      const encodedName = encodeURIComponent(cocktail.name);
      navigate(`/cocktail/${encodedName}`);
    }
  }

  return (
    <button onClick={handleClick} disabled={!cocktail}>
      See more
    </button>
  );
}
