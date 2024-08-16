import { ReactElement } from "react";
import { ICocktail } from "../../interfaces/interfaces";

import styles from "./css/smallCocktailCard.module.css";
import { useNavigate } from "react-router-dom";

interface SmallCocktailCardProps {
  cocktail: ICocktail;
}

export default function SmallCocktailCard({ cocktail }: SmallCocktailCardProps): ReactElement {
  const navigate = useNavigate();

  const handleCocktailClick = (name: string) => {
    navigate(`/cocktail/${encodeURIComponent(name)}`);
  };

  return (
    <article
      className={styles.smallCocktailCard}
      onClick={() => handleCocktailClick(cocktail.name)}
      style={{ cursor: "pointer" }}
    >
      <h3>{cocktail.name}</h3>
      <img src={cocktail.image} alt={cocktail.name} />
    </article>
  );
}
