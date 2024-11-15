// src/Components/Popup.js
import React, { useState } from 'react';
import '../CSS/Popup.css'; // Ensure this path is correct

const Popup = ({ image, title, price, onClose }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleReserve = () => {
    if (startDate && endDate) {
      // Handle reservation logic here
      console.log(`Reserved from ${startDate} to ${endDate}`);
      onClose(); // Close the popup after reservation
    } else {
      alert('Please select both start and end dates.');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="popup-inner">
          <div className="popup-left">
            <img src={image} alt={title} className="popup-image" />
            <h3 className="popup-title">{title}</h3>
            <p className="popup-price">{price}</p>
          </div>
          <div className="popup-right">
            <h2 className="reservation-heading">Reserve Now</h2>
            <form className="reservation-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="start-date">Start Date</label>
                <input
                  type="date"
                  id="start-date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="end-date">End Date</label>
                <input
                  type="date"
                  id="end-date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
              </div>
              <button type="button" className="reserve-btn" onClick={handleReserve}>
                Reserve
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
