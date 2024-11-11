import React from 'react';
import '../CSS/Home.css';
import logo from '../CSS/Logo.png';
import banner from '../CSS/externalbanner.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';


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
