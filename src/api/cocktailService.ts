import { ICocktail } from "../interfaces/interfaces";
import { transformDrinkData } from "../utils/utils";

// Function to fetch a random cocktail from an API, returning a promise that resolves to a cocktail object or null
export async function fetchRandomCockTail(): Promise<ICocktail | null> {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  try {
    // Make the API call and wait for the response
    const response = await fetch(url);

    // If the response is not OK, throw an error with the response status
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    // Parse the response data as JSON
    const data = await response.json();

    // Check if the data contains drinks; if not, return null
    if (!data.drinks || data.drinks.length === 0) {
      return null;
    }

    // Extract the first drink object from the array
    const drink = data.drinks[0];

    // Initialize arrays to hold ingredients and measurements
    const ingredients: string[] = [];
    const measurements: string[] = [];

    // Loop through possible ingredient/measurement pairs
    for (let i = 1; i <= 15; i++) {
      // Dynamically access ingredient and measurement properties
      const ingredient = drink[`strIngredient${i}`];
      const measurement = drink[`strMeasure${i}`];

      // If an ingredient exists, add it to the ingredients array
      if (ingredient) ingredients.push(ingredient);

      // If a measurement exists, add it to the measurements array
      if (measurement) measurements.push(measurement);
    }

    // Return a cocktail object with all the relevant data
    return transformDrinkData(drink);
  } catch (error) {
    // If an error occurs during the fetch or processing, log it and return null
    if (error instanceof Error) {
      console.error("Failed to fetch cocktail:", error.message);
      return null;
    } else {
      console.error("An unknown error occurred");
      return null;
    }
  }
}

// Function to fetch a cocktail by id from an CocktailDBAPI, returns a promise that resolves to a cocktail object or null
export async function fetchCocktailByName(name: string): Promise<ICocktail | null> {
  // Replace hyphens with spaces
  // const formattedName = name.replace(/-/g, " ");
  // Encode the name to handle spaces and other special characters
  const encodedName = encodeURIComponent(name);
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodedName}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();

    if (!data.drinks || data.drinks.length === 0) {
      return null;
    }

    const drink = data.drinks[0];

    return transformDrinkData(drink);
  } catch (error) {
    // If an error occurs during the fetch or processing, log it and return null
    if (error instanceof Error) {
      console.error("Failed to fetch cocktail:", error.message);
      return null;
    } else {
      console.error("An unknown error occurred");
      return null;
    }
  }
}

export async function fetchCocktailsBySearch(query: string): Promise<ICocktail[]> {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();

    if (!data.drinks || data.drinks.length === 0) {
      return []; // Return an empty array if no cocktails are found
    }

    return data.drinks.map((drink: any): ICocktail => transformDrinkData(drink)); // Return an array of cocktails
  } catch (error) {
    // If an error occurs during the fetch or processing, log it and return an empty array
    console.error(
      "Failed to fetch cocktails:",
      error instanceof Error ? error.message : "Unknown error"
    );
    return []; // Return an empty array on error
  }
}
