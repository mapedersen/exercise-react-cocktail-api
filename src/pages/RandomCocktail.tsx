import { ReactElement, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { ICocktailContext } from "../interfaces/interfaces";
import { formatCocktailName } from "../utils/utils";
import DetailedCocktailCard from "../components/DetailedCocktailCard";

export default function RandomCocktail(): ReactElement {
  const { randomCocktail } = useOutletContext<ICocktailContext>();
  const navigate = useNavigate();

  useEffect(() => {
    if (randomCocktail) {
      // Format the cocktail name for the URL
      const formattedName = formatCocktailName(randomCocktail.name);
      // Update the URL to reflect the new cocktail's name
      const currentPath = `/random-cocktail/${formattedName}`;
      if (window.location.pathname !== currentPath) {
        navigate(currentPath, { replace: true });
      }
    }
  }, [randomCocktail, navigate]);

  return <DetailedCocktailCard />;
}
