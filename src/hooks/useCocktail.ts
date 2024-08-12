import { useEffect, useState } from "react";
import { fetchRandomCockTail } from "../api/cocktailService";
import { ICocktail } from "../interfaces/interfaces";

export function UseCocktail() {
  const [randomCocktail, setRandomCocktail] = useState<ICocktail | null>(null);

  async function fetchNewCocktail() {
    try {
      const data = await fetchRandomCockTail();
      setRandomCocktail(data);

      // Catch errors
    } catch (error) {
      if (error instanceof Error) {
        console.error("Failed to fetch cocktail:", error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  }

  // Fetch a new cocktail when component mounts
  useEffect(() => {
    fetchNewCocktail();
  }, []);

  return { randomCocktail, fetchNewCocktail };
}
