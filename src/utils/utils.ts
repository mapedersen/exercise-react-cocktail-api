// Function to format a cocktails name to become a readable url
export function formatCocktailName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");
}

import { ICocktail } from "../interfaces/interfaces";

export function transformDrinkData(drink: any): ICocktail {
  return {
    id: drink.idDrink,
    name: drink.strDrink,
    image: drink.strDrinkThumb,
    category: drink.strCategory || "",
    tags: drink.strTags ? drink.strTags.split(",") : [],
    ingredients: Array.from({ length: 15 }, (_, i) => drink[`strIngredient${i + 1}`]).filter(
      Boolean
    ),
    measurements: Array.from({ length: 15 }, (_, i) => drink[`strMeasure${i + 1}`]).filter(Boolean),
    glass: drink.strGlass || "",
  };
}
