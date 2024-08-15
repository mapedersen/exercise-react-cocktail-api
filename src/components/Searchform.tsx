import { ReactElement, useState } from "react";
import { fetchCocktailsBySearch } from "../api/cocktailService"; // Import the new function
import { ICocktail } from "../interfaces/interfaces";

interface CocktailSearchFormProps {
  onResults: (results: ICocktail[]) => void; // A callback to handle the search results
}

export default function CocktailSearchForm({ onResults }: CocktailSearchFormProps): ReactElement {
  const [query, setQuery] = useState("");

  const handleSearch = async (query: string) => {
    if (!query) return;

    try {
      const results = await fetchCocktailsBySearch(query);
      onResults(results);
    } catch (error) {
      console.error("Error searching for cocktails:", error);
      onResults([]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} id="cocktailSearchForm">
      {/* <fieldset> */}
      {/* <legend>Search for a Cocktail</legend> */}

      {/* <label htmlFor="search">Search:</label> */}
      <input
        type="search"
        id="search"
        name="query"
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
        placeholder="Enter cocktails name"
        required
      />

      <button type="submit">Search</button>
      {/* </fieldset> */}
    </form>
  );
}
