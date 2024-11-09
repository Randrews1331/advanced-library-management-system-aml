import React from 'react';
import '../CSS/Home.css'; // Import your CSS file for styling
import logo from '../CSS/Logo.png'; // Import your logo image
import banner from '../CSS/externalbanner.jpg'; // Import your banner image

const Home = () => {
  return (
    <div>
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="logo">
              <a href="#"><img src={logo} alt="Greenwich Library Logo" /></a>
            </div>
            <nav className="navigation">
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Programs</a></li>
                <li><a href="#">Library Services</a></li>
                <li><a href="#">Get Involved</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
            <div className="header-search">
              <input type="text" placeholder="Search the library" />
              <button type="submit">Search</button>
            </div>
          </div>
        </div>
        <div className="banner">
          <img src={banner} alt="Greenwich Library Banner" />
          <div className="banner-text">
            <h1>Welcome to Greenwich Library</h1>
            <p>Explore our collection, programs, and events designed to inspire and educate.</p>
            <a href="#" className="cta-button">Explore More</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
