import React, { useState } from 'react';
import '../CSS/Home.css';
import logo from '../CSS/Logo.png';
import banner from '../CSS/externalbanner.jpg';
import image1 from '../CSS/book 1.jpg';
import image2 from '../CSS/book2.jpg';
import image3 from '../CSS/book3.jpg';
import image4 from '../CSS/book4.jpg';
import image5 from '../CSS/book5.jpg';
import image6 from '../CSS/book6.jpg';
import image7 from '../CSS/book7.jpg';
import image8 from '../CSS/book8.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from '../Components/Navbar.js';
import Footer from '../Components/footer.js'; // Make sure the path to Footer is correct

const Home = () => {
  const imageSets = [
    [image1, image2, image3, image4],
    [image5, image6, image7, image8]
  ];
  const imageSets2 = [
    [image1, image2, image3, image4],
    [image5, image6, image7, image8]
  ];
  const imageSets3 = [
    [image1, image2, image3, image4],
    [image5, image6, image7, image8]
  ];

  const genres = ["Fiction", "Non-Fiction", "Science", "History"];

  const [currentSetIndex, setCurrentSetIndex] = useState(Array(4).fill(0));
  const [slideOut, setSlideOut] = useState(Array(4).fill(false));

  const handleNextSet = (rowIndex) => {
    setSlideOut((prev) => {
      const newSlideOut = [...prev];
      newSlideOut[rowIndex] = true;
      return newSlideOut;
    });

    setTimeout(() => {
      setCurrentSetIndex((prev) => {
        const newSet = [...prev];
        newSet[rowIndex] = (newSet[rowIndex] + 1) % imageSets.length;
        return newSet;
      });

      setSlideOut((prev) => {
        const newSlideOut = [...prev];
        newSlideOut[rowIndex] = false;
        return newSlideOut;
      });
    }, 300);
  };

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

      {/* Multiple rows of images with different genres */}
      {genres.map((genre, rowIndex) => (
        <div key={rowIndex}>
          <h2 className="genre-title">{genre}</h2>
          <div className="squares-row">
            <div className={`squares-container ${slideOut[rowIndex] ? 'slide-left' : ''}`}>
              {imageSets[currentSetIndex[rowIndex]].map((image, index) => (
                <div className="square" key={index}>
                  <a href={`/page${rowIndex * 4 + index + 1}`}>
                    <img src={image} alt={`Image ${index + 1}`} />
                    <h3>{`Title ${rowIndex * 4 + index + 1}`}</h3>
                  </a>
                </div>
              ))}
            </div>
            <button className="arrow right-arrow" onClick={() => handleNextSet(rowIndex)}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      ))}

      {/* Include Footer component here */}
      <Footer />
    </div>
  );
};

export default Home;
