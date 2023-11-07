import React from 'react';

function ResultsDisplay({ country, handleFavorite }) {
  return (
    <section className="results-display">
      <h2 className="country-name">{country.name?.common || "Country/City Name"}</h2>
      <div className="details-section">
        <img src={country.flags?.png || "./images/countryflag.png"} alt="Country Image" className="country-image" />
        <div className="basic-info">
          <p><strong>Population:</strong> <span id="population">{country.population || ""}</span></p>
          <p><strong>Currency:</strong> <span id="currency">{country.currencies && Object.values(country.currencies)[0].name || ""}</span></p>
          <p><strong>Language:</strong> <span id="language">{country.languages && Object.values(country.languages)[0] || ""}</span></p>
        </div>
        <p className="description">Description about the country or city.</p>
        <button className="favorite-btn" onClick={handleFavorite}>Favorite</button>
      </div>
    </section>
  );
}

export default ResultsDisplay;
