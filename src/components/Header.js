import React from 'react';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img src="./images/navinomad.png" alt="Logo" className="logo" />
          <h1 className="app-title">Navi<span>Nomad</span></h1>
        </div>
        <ul className="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
