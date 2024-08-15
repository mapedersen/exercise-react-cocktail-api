import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchCocktailByName } from "../api/cocktailService";
import { ICocktail } from "../interfaces/interfaces";

import DetailedCocktailCard from "../components/DetailedCocktailCard";
import { LoadingSpinner } from "../components/ui/Loading";

export default function CocktailInfoPage(): ReactElement {
  const { name } = useParams<{ name: string }>();
  const [cocktail, setCocktail] = useState<ICocktail | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (name) {
      fetchCocktailByName(name).then(setCocktail);
      setTimeout(() => setIsLoading(false), 500);
    }
  }, [name]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <DetailedCocktailCard cocktail={cocktail} />;
}
