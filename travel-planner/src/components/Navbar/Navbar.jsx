import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-list">
          {/* Logo & Website Name */}
          <div className="page-logo">
            <NavLink to="/" className="page-logo_link" onClick={closeMenu}>
              <img src='/assets/logo.png' alt="profile_logo" /> 
              <span>
                <span className="logo-first-letter">E</span>xplore
              </span>
              Ease.
            </NavLink>
          </div>

          {/* Nav Links */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/destinationpage" onClick={closeMenu}>Destinations</NavLink></li>
            <li><NavLink to="/itinerarypage" onClick={closeMenu}>Itinerary</NavLink></li>
            <li><NavLink to="/bookmarks" onClick={closeMenu}>Bookmarks</NavLink></li>
          </ul>

          {/* Hamburger */}
          <div className="hamburger" onClick={toggleMenu}>
            <div className={menuOpen ? "bar rotate1" : "bar"}></div>
            <div className={menuOpen ? "bar fade" : "bar"}></div>
            <div className={menuOpen ? "bar rotate2" : "bar"}></div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
}
