import React, { useState, useEffect } from "react";
import "./App.css"; // Import your CSS file
import Header from "./components/Header";
import Search from "./components/Search";
import ResultsDisplay from "./components/ResultsDisplay";
import CountriesList from "./components/CountriesList";
import Favorites from "./components/Favorites";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [country, setCountry] = useState({});
  const [countriesList, setCountriesList] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }

  function handleSearch() {
    if (searchInput) {
      fetchCountryData(searchInput);
    } else {
      alert("Please enter a country name.");
    }
  }

  function handleSearchInputKeyPress(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  function fetchCountryData(countryName) {
    const apiUrl = `https://restcountries.com/v3.1/name/${countryName}?fields=name,flags,population,currencies,languages,altSpellings`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        const countryData = data[0];
        setCountry(countryData);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
        alert(
          "Failed to fetch country data. Please try again or check the country name."
        );
      });
  }

  function handleFavorite() {
    const currentCountry = country.name?.common;

    if (currentCountry && currentCountry !== "Country/City Name") {
      let updatedFavorites = [...favorites];

      if (!updatedFavorites.includes(currentCountry)) {
        updatedFavorites.push(currentCountry);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        alert("Country favorited!");
      } else {
        alert("Country already in favorites!");
      }
    } else {
      alert("Please search for a valid country before favoriting.");
    }
  }

  function toggleFavoritesSection() {
    setShowFavorites(!showFavorites);
  }

  return (
    <div className="App">
      <Header />
      <section className="hero">
        <h2>
          Welcome to Navi<span>Nomad</span>
        </h2>
        <p>
          Discover information about countries from around the world at your
          fingertips.
        </p>
      </section>

      <main className="main-content">
        <Search
          searchInput={searchInput}
          handleSearchInput={handleSearchInput}
          handleSearch={handleSearch}
          handleSearchInputKeyPress={handleSearchInputKeyPress}
        />

        <ResultsDisplay country={country} handleFavorite={handleFavorite} />

        <CountriesList countriesList={countriesList} />

        <Favorites
          favorites={favorites}
          showFavorites={showFavorites}
          toggleFavoritesSection={toggleFavoritesSection}
        />

        <About />
        
      </main>

      <footer className="footer"><Footer /></footer>
    </div>
  );
}

export default App;
