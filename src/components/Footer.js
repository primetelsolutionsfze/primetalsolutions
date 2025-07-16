import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-content">
      <span>© {new Date().getFullYear()} Primetel Solutions | All rights reserved.</span>
      <span className="crafted">Crafted by <a href="https://legendaryone.in" target="_blank" rel="noopener noreferrer" className="legendary-link">Legendary One</a></span>
    </div>
  </footer>
);

export default Footer;
