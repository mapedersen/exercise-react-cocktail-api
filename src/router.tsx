import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import CockTailInfoPage from "./pages/CocktailInfoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/landing-page",
        element: <LandingPage />,
        index: true,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/cocktail/:id",
        element: <CockTailInfoPage />,
      },
    ],
  },
]);
