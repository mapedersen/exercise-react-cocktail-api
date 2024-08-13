import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import CocktailInfoPage from "./pages/CocktailInfoPage";

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
        path: "/cocktail/:name",
        element: <CocktailInfoPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);
