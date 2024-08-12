import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import RandomCocktail from "./pages/RandomCocktail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <LandingPage />,
        index: true,
      },
      {
        path: "/random-cocktail/:name",
        element: <RandomCocktail />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);
