import React from 'react';

function CountriesList({ countriesList }) {
  return (
    <section className="countries-list">
      {countriesList.map((country, index) => (
        <article key={index}>
          <h3>{country.name.common}</h3>
          <p>Population: {country.population}</p>
        </article>
      ))}
    </section>
  );
}

export default CountriesList;
