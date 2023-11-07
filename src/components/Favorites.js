import React from 'react';

function Favorites({ favorites, showFavorites, toggleFavoritesSection }) {
  return (
    <section id="favorites-section" style={{ display: showFavorites ? 'block' : 'none' }}>
      <h2>Favorited Countries</h2>
      <ul id="favorites-list">
        {favorites.map((countryName, index) => (
          <li key={index}>{countryName}</li>
        ))}
      </ul>
    </section>
  );
}

export default Favorites;
