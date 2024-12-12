// Updated Navbar component with the "Support" page link
import React from 'react';
import '../CSS/Navbar.css'; // Import the CSS file for the navbar
import logo from '../CSS/imgs/Logo.png'; // Correct path to logo image
import { useAuth } from '../Components/AuthContext'; // Import the AuthContext for global authentication state

const Navbar = () => {
  const { isLoggedIn } = useAuth(); // Access the logged-in state from context

  return (
    <nav className="navigation">
      <div className="logo-container">
        {/* Using imported logo image */}
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-text">Advanced Library Management</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">
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
        {isLoggedIn ? (
          <li>
            <a href="Account">
              <i className="fas fa-life-ring icon"></i>
              My Account
            </a>
          </li>
        ) : (
          <li>
            <a href="login">
              <i className="fas fa-sign-in-alt icon"></i>
              Log in
            </a>
          </li>
        )}
        <li>
          <a href="/support">
            <i className="fas fa-headset icon"></i>
            Support
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;