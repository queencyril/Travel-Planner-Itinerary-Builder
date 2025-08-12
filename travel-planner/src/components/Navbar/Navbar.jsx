import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">
          <NavLink to="/" className="brand-link">TravelPlanner</NavLink>
        </div>

        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/destination">Destinations</NavLink></li>
          <li><NavLink to="/itinerary">Itinerary</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
