import { ICocktail, ICocktailResponse } from "../interfaces/interfaces";

export async function fetchRandomCockTail(): Promise<ICocktail | null> {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data: ICocktailResponse = await response.json();

    if (data.drinks.length === 0) {
      throw new Error("No cocktail data found.");
    }

    const cocktail: ICocktail = {
      id: data.drinks[0].idDrink,
      name: data.drinks[0].strDrink,
      image: data.drinks[0].strDrinkThumb,
    };
    return cocktail;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Failed to fetch cocktail:", error.message);
      return null;
    } else {
      console.error("An unknown error occurred");
      return null;
    }
  }
}
