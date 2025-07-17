import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu and dropdowns when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">
            <span className="logo-highlight">PRIMETEL</span> SOLUTIONS
          </Link>
          
          <button 
            className={`navbar-toggle ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-lin"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`} ref={dropdownRef}>
          <ul className="navbar-links">
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/about">ABOUT</NavLink></li>
            <li className="dropdown-container">
              <button
                className={`dropdown-btn ${activeDropdown === 'services' ? 'active' : ''}`}
                onClick={() => toggleDropdown('services')}
                type="button"
              >
                SERVICES <span className="dropdown-arrow">▼</span>
              </button>
              <ul className={`dropdown-menu ${activeDropdown === 'services' ? 'active' : ''}`}>
               
                <li><NavLink to="/services">Custom Telco Software</NavLink></li>
                <li><NavLink to="/services">Data & Analytics</NavLink></li>
                <li><NavLink to="/services">Integration</NavLink></li>
                <li><NavLink to="/services">DevOps</NavLink></li>
              </ul>
            </li>
            <li className="dropdown-container">
              <button 
                className={`dropdown-btn ${activeDropdown === 'more' ? 'active' : ''}`}
                onClick={() => toggleDropdown('more')}
              >
                MORE <span className="dropdown-arrow">▼</span>
              </button>
              <ul className={`dropdown-menu ${activeDropdown === 'more' ? 'active' : ''}`}>
                <li><NavLink to="/technologies">TECHNOLOGIES</NavLink></li>
                <li><NavLink to="/leadership">LEADERSHIP</NavLink></li>
                <li><NavLink to="/projects">PROJECTS</NavLink></li>
                <li><NavLink to="/industries">INDUSTRIES</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/why">WHY PRIMETEL</NavLink></li>
          </ul>

          <div className="navbar-cta">
            <Link to="/contact" className="cta-button">CONTACT</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Enhanced NavLink component with additional effects
const NavLink = ({ to, children }) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
  >
    {children}
  </RouterNavLink>
);

export default Navbar;