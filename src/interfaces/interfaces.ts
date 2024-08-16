export interface ICocktail {
  name: string;
  id: string;
  image: string;
  category: string;
  tags: string[];
  ingredients: string[];
  measurements: string[];
  glass: string;
  favourite: boolean;
}

export interface ICocktailResponse {
  drinks: ICocktail[];
}

export interface ICocktailContext {
  favourites: ICocktail[];
  handleAddToFavourites: (cocktail: ICocktail) => void;
  handleRemoveFromFavourites: (cocktail: ICocktail) => void;
}

export interface FavouriteCocktails {
  cocktails: ICocktail[];
}
