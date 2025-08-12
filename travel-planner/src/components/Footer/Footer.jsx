import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} TravelPlanner — built with ❤️</p>
      </div>
    </footer>
  );
}
