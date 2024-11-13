// src/components/Home.js

import React from 'react';
import '../CSS/Home.css';
import logo from '../CSS/Logo.png';
import banner from '../CSS/externalbanner.jpg';
import image1 from '../CSS/book 1.jpg'; // Add your image imports
import image2 from '../CSS/book2.jpg';
// import image3 from '../CSS/image3.jpg';
// import image4 from '../CSS/image4.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from '../Components/Navbar.js';

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
            <Navbar />
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
      <h1 className="mid-text">Media</h1>

      {/* New section with four circles */}
      <div className="squares-container">
        <div className="square">
          <a href="/page1">
            <img src={image2} alt="Image 1" />
            <h3>Title 1</h3>
          </a>
        </div>
        <div className="square">
          <a href="/page2">
            <img src={image1} alt="Image 2" />
            <h3>Title 2</h3>
          </a>
        </div>
        <div className="square">
          <a href="/page3">
            <img src={image1} alt="Image 3" />
            <h3>Title 3</h3>
          </a>
        </div>
        <div className="square">
          <a href="/page4">
            <img src={image1} alt="Image 4" />
            <h3>Title 4</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
