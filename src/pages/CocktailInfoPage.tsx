import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchCocktailByName } from "../api/cocktailService";
import { ICocktail } from "../interfaces/interfaces";

import DetailedCocktailCard from "../components/DetailedCocktailCard";

export default function CocktailInfoPage(): ReactElement {
  const { name } = useParams<{ name: string }>();
  const [cocktail, setCocktail] = useState<ICocktail | null>(null);

  useEffect(() => {
    if (name) {
      fetchCocktailByName(name).then(setCocktail);
    }
  }, [name]);

  return <>{cocktail ? <DetailedCocktailCard cocktail={cocktail} /> : <p>Loading...</p>}</>;
}
