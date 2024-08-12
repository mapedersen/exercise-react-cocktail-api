export interface ICocktail {
  name: string;
  id: string;
  image: string;
  category: string;
  tags: string[];
  ingredients: string[];
  measurements: string[];
  glass: string;
}

export interface ICocktailResponse {
  drinks: ICocktail[];
}

export interface ICocktailContext {
  randomCocktail: ICocktail | null;
  fetchNewCocktail: () => Promise<void>;
}
