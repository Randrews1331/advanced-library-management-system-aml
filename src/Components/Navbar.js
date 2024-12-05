// src/components/Navbar.js

import React from 'react';
import '../CSS/Navbar.css'; // Import the new CSS file for the navbar
import logo from '../CSS/imgs/Logo.png'; // Correct path to logo image


const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="logo-container">
        {/* Using imported logo image */}
        <img src={logo} alt="Logo" className="logo" />

        <span className="logo-text">Advance Library Management</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">
            <i className="fas fa-home icon"></i>
            Home
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-search icon"></i>
            Media Search
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-life-ring icon"></i>
            Support
          </a>
        </li>
        <li>
          <a href="login">
            <i className="fas fa-sign-in-alt icon"></i>
            Log in
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
