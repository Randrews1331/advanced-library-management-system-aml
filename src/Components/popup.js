// src/Components/Popup.js
import React from 'react';
import '../CSS/Popup.css'; // Make sure to style the popup correctly

const Popup = ({ image, title, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="popup-inner">
          <div className="popup-image">
            <img src={image} alt={title} />
          </div>
          <div className="popup-title">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
