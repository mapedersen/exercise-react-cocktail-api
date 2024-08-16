import { useOutletContext } from "react-router-dom";
import SmallCocktailCard from "../components/ui/smallCocktailCard";
import { ICocktailContext } from "../interfaces/interfaces";

export default function FavouriteCocktailsPage() {
  const { favourites } = useOutletContext<ICocktailContext>();
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
