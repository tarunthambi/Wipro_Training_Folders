import React, { useState } from 'react';
import './styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <Link className="navbar-brand custom-navbar-brand" to="/">TaruNs Space</Link>
        {isCollapsed && (
          <button 
            className="navbar-toggler custom-toggler" 
            type="button" 
            aria-controls="navbarNav" 
            aria-expanded={!isCollapsed} 
            aria-label="Toggle navigation" 
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon custom-toggler-icon"></span>
          </button>
        )}
        <div className={`collapse navbar-collapse justify-content-center ${isCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav custom-navbar-nav">
            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
