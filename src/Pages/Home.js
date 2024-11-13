// src/components/Home.js

import React from 'react';
import '../CSS/Home.css';
import logo from '../CSS/Logo.png';
import banner from '../CSS/externalbanner.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from '../Components/Navbar.js'; // Import the Navbar component

const Home = () => {
  return (
    <div>
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="logo">
              <a href="#"><img src={logo} alt="AML Logo" /></a>
            </div>
            <h1 className="name-top">Advance Media Library</h1>
            <Navbar /> {/* Include the Navbar component here */}
          </div>
        </div>
        <div className="banner">
          <img src={banner} alt="Greenwich Library Banner" />
          <div className="banner-text">
            <h1>Advance Media Library</h1>
            <p>Explore our collection, programs, and events designed to inspire and educate.</p>
            <a href="#" className="cta-button">Explore More</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
