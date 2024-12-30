// SearchResults.js
import React from "react";

const SearchResults = ({ filteredRoutes, onSelect }) => {
  if (!filteredRoutes || !filteredRoutes.length) return null;

  const resultList = filteredRoutes.map(({ id, nome }) => (
    <li key={id} onClick={() => onSelect(nome)}>
      <span>{nome}</span>
    </li>
  ));

  return (
    <div className="search-results">
      <ul>{resultList}</ul>
    </div>
  );
};

export default SearchResults;
