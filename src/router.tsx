import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPageRandomCocktail from "./pages/LandingPageRandomCocktail";
import SearchPage from "./pages/SearchPage";
import CocktailInfoPage from "./pages/CocktailInfoPage";
import FavouriteCocktailsPage from "./pages/FavouriteCocktailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <LandingPageRandomCocktail />,
        index: true,
      },
      {
        path: "/cocktail/:name",
        element: <CocktailInfoPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/favourites",
        element: <FavouriteCocktailsPage />,
      },
    ],
  },
]);
