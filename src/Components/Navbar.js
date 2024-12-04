// src/components/Navbar.js

import React from 'react';
import '../CSS/Navbar.css'; // Import the new CSS file for the navbar

const Navbar = () => {
  return (
    <nav className="navigation">
      <ul>
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
