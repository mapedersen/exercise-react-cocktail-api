import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICocktail } from "../interfaces/interfaces";

interface CocktailSearchResultsProps {
  results: ICocktail[];
}

export default function CocktailSearchResults({
  results,
}: CocktailSearchResultsProps): ReactElement {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10; // Number of results per page
  const navigate = useNavigate();

  // Determine the current set of results for the current page
  const currentResults = results.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  // Calculate total pages
  const totalPages = Math.ceil(results.length / resultsPerPage);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Handle result click to navigate to the info page
  const handleCocktailClick = (name: string) => {
    navigate(`/cocktail/${encodeURIComponent(name)}`);
  };

  if (results.length === 0) {
    return <p>No results found</p>;
  }

  return (
    <div>
      <ul>
        {currentResults.map((cocktail) => (
          <li
            key={cocktail.id}
            onClick={() => handleCocktailClick(cocktail.name)}
            style={{ cursor: "pointer", listStyle: "none" }}
          >
            <h3>{cocktail.name}</h3>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)} disabled={page === currentPage}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
