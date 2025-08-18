import React from "react";
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="page-logo_link">©  {new Date().getFullYear()}  <span> <span className="logo-first-letter"> E</span>xplore</span>Ease. — built with ❤️</p>
      </div>
    </footer>
  );
}
