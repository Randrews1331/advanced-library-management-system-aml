// src/Pages/Home.js
import React, { useState } from 'react';
import '../CSS/Home.css';
import banner from '../CSS/imgs/externalbanner.jpg';
import image1 from '../CSS/imgs/book 1.jpg';
import image2 from '../CSS/imgs/book2.jpg';
import image3 from '../CSS/imgs/book3.jpg';
import image4 from '../CSS/imgs/book4.jpg';
import image5 from '../CSS/imgs/book5.jpg';
import image6 from '../CSS/imgs/book6.jpg';
import image7 from '../CSS/imgs/book7.jpg';
import image8 from '../CSS/imgs/book8.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from '../Components/Navbar.js';
import Footer from '../Components/footer.js';
import Popup from '../Components/popup.js'; // Import Popup

const Home = () => {
  const imageSets = [
    [image1, image2, image3, image4],
    [image5, image6, image7, image8]
  ];

  const genres = ["Fiction", "Non-Fiction", "Science", "History"];

  const [currentSetIndex, setCurrentSetIndex] = useState(Array(4).fill(0));
  const [slideOut, setSlideOut] = useState(Array(4).fill(false));

  // State for popup visibility and selected image details
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');

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

  const handleImageClick = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      <header className="header">
        <Navbar />
        <div className="banner">
          <img src={banner} alt="Greenwich Library Banner" />
          <div className="banner-text">
            <h1>Advance Media Library</h1>
            <p class="whitep">Explore our collection, programs, and events designed to inspire and educate.</p>
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
                <div className="square" key={index} onClick={() => handleImageClick(image, `Title ${rowIndex * 4 + index + 1}`)}>
                  <img src={image} alt={`Image ${index + 1}`} />
                  <h3>{`Title ${rowIndex * 4 + index + 1}`}</h3>
                </div>
              ))}
            </div>
            <button className="arrow right-arrow" onClick={() => handleNextSet(rowIndex)}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      ))}

      {/* Display the popup if visible */}
      {popupVisible && (
        <Popup image={selectedImage} title={selectedTitle} onClose={closePopup} />
      )}

      <Footer />
    </div>
  );
};

export default Home;
