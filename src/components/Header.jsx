import React from 'react';
import Navbar from './Navbar';
import Banner from '../assets/images/banner-pulp.jpg';
import '../styles/header.css';

function Header({ isHome, image }) {

  return (
    <div className="header-container">
      <Navbar isHome={isHome} />
      {
        isHome
          ? (<div className="header-image">
            <img src={Banner} className="banner" alt="banner" />
            <div className="header-titles">
              <h2>Tus peliculas favoritas</h2>
              <h2>y todos los estrenos</h2>
              <h2>en un solo lugar</h2>
              <h1>CINEMATICS</h1>
            </div>
          </div>)
          : (<div className="img-container">
            <div className="header-image">
              <img src={image} className="banner" alt="banner" />
            </div>
          </div>
          )
      }
    </div>
  );
}

export default Header;