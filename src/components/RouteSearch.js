import React, { useState } from "react";

const RouteSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value); 
  };

  return (
    <input
      type="text"
      className="route-search-input"
      value={query}
      onChange={handleInputChange}
      placeholder="Pesquise por rota"
    />
  );
};

export default RouteSearch;
