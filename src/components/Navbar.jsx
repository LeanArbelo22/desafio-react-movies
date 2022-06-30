import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import '../styles/header.css';

const btnStyle = {
  outline: 0,
  borderRadius: '30px',
  padding: '10px 20px',
  backgroundColor: 'transparent',
  marginRight: '10px',
  fontSize: '16px',
  border: '3px solid #bf7378',
  color: '#131212D7',
  fontFamily: 'Coolvetica',
  cursor: 'pointer'
}

const Buttons = ({ text }) => <button style={btnStyle}>{text}</button>

function Navbar({ isHome }) {

  return (
    <div className="header-nav">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={Logo} className="logo-img" alt="logo" />
          <h2>Cinematics</h2>
        </div>

        
          {
            isHome
            ? (<div className="buttons">
                <Buttons text="Login" />
                <Buttons text="Register" />
              </div>)
            : (<div className="buttons">
                <Link to="/"><Buttons text="Home" /></Link>
              </div>)  
          }
      </div>
    </div>
  );
}

export default Navbar;