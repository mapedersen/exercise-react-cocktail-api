export interface ICocktail {
  name: string;
  id: string;
  image: string;
}

export interface ICocktailResponse {
  drinks: Array<{
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
  }>;
}

export interface ICocktailContext {
  randomCocktail: ICocktail | null;
  fetchNewCocktail: () => Promise<void>;
}
