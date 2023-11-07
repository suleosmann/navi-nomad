import React from 'react';

function Search({ searchInput, handleSearchInput, handleSearch, handleSearchInputKeyPress }) {
  return (
    <section className="search-section">
      <input
        type="text"
        id="search-input"
        placeholder="Type in a country or city..."
        value={searchInput}
        onChange={handleSearchInput}
        onKeyPress={handleSearchInputKeyPress}
      />
      <button id="search-btn" onClick={handleSearch}>Search</button>
    </section>
  );
}

export default Search;
