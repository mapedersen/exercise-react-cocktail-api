import { ReactElement, useEffect, useState } from "react";
// import { useCocktailByID } from "../hooks/useCocktailByName";
import DetailedCocktailCard from "../components/DetailedCocktailCard";
import { useParams } from "react-router-dom";
import { ICocktail } from "../interfaces/interfaces";
import { fetchCocktailByName } from "../api/cocktailService";

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
