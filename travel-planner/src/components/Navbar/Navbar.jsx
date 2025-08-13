import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/logo.png'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-list">
        <div className="page-logo">
          <NavLink to="/" className="page-logo_link"><img src={logo} alt="profile_logo" /> <span><span className="logo-first-letter">E</span>xplore</span>Ease.</NavLink>
        </div>

        <ul className="nav-links">
          <li><NavLink to="/" end>Home&#128726;</NavLink></li>
          <li><NavLink to="/destination">Destinations&#128747;</NavLink></li>
          <li><NavLink to="/itinerary">Itinerary&#128195;</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
