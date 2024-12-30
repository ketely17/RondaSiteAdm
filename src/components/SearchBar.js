import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onOpenModal }) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Procurar" />
      <button onClick={onOpenModal}>Criar</button>
    </div>
  );
};

export default SearchBar;
