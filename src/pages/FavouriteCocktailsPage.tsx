import { useOutletContext } from "react-router-dom";
import SmallCocktailCard from "../components/ui/smallCocktailCard";
import { ICocktailContext } from "../interfaces/interfaces";
import { useEffect, useState } from "react";

import "../css/FavouritePage.css";

import { LoadingSpinner } from "../components/ui/Loading";

export default function FavouriteCocktailsPage() {
  const { favourites } = useOutletContext<ICocktailContext>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <h1>Favourites</h1>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          maxWidth: "800px",
          justifyContent: "center",
        }}
      >
        {favourites.map((fav) => (
          <li key={fav.id}>
            <SmallCocktailCard cocktail={fav} />
          </li>
        ))}
      </ul>
    </>
  );
}
