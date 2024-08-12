import { ICocktail, ICocktailResponse } from "../interfaces/interfaces";

export async function fetchRandomCockTail(): Promise<ICocktail | null> {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
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

    const ingredients: string[] = [];
    const measurements: string[] = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}`];
      const measurement = drink[`strMeasure${i}`];
      if (ingredient) ingredients.push(ingredient);
      if (measurement) measurements.push(measurement);
    }

    return {
      id: drink.idDrink,
      name: drink.strDrink,
      image: drink.strDrinkThumb,
      category: drink.strCategory || "",
      tags: drink.strTags ? drink.strTags.split(",") : [],
      ingredients,
      measurements,
      glass: drink.strGlass || "",
    };
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
