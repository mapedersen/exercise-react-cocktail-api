import { useEffect, useState } from "react";
import { fetchRandomCockTail } from "../api/cocktailService";
import { ICocktail } from "../interfaces/interfaces";

// Custom hook to handle state for the random Cocktail, starts as null before data is fetched
export function useCocktail() {
  const [randomCocktail, setRandomCocktail] = useState<ICocktail | null>(null);
  const [selectedCocktail, setSelectedCocktail] = useState<ICocktail | null>(null);

  //Async function that uses the cocktailService to request a new random cocktail
  async function fetchNewCocktail() {
    try {
      // Fetch the cocktail data and update state
      const data = await fetchRandomCockTail();
      console.log(data);
      setRandomCocktail(data);

      // Catch errors if no cocktail is recieved
    } catch (error) {
      if (error instanceof Error) {
        console.error("Failed to fetch cocktail:", error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  }

  // Run the code once when the component mounts
  useEffect(() => {
    fetchNewCocktail();
  }, []);

  // Return the cocktail data and the fetch function to be used in components
  return { randomCocktail, fetchNewCocktail, selectedCocktail, setSelectedCocktail };
}
