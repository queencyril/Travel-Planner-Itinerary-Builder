import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
       
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <div className="footer-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-logo">
          © {new Date().getFullYear()} <span className="logo-first-letter">E</span>xploreEase — built with ❤️
         by Oluchi Queen</p>
      </div>
    </footer>
  );
};

export default Footer;
