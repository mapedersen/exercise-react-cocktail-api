import { ReactElement, useState } from "react";
import CocktailSearchForm from "../components/Searchform";
import CocktailSearchResults from "../components/CocktailSearchResults";
import { ICocktail } from "../interfaces/interfaces";

export default function SearchPage(): ReactElement {
  const [results, setResults] = useState<ICocktail[]>([]);

  const handleResults = (newResults: ICocktail[]) => {
    setResults(newResults);
  };

  return (
    <div>
      <CocktailSearchForm onResults={handleResults} />
      <CocktailSearchResults results={results} />
    </div>
  );
}
