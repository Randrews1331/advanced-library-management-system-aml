import React, { useState } from 'react';
import '../CSS/account.css'; // Ensure the CSS file is correctly linked

const Account = () => {
  // Example data for reserved books
  const [reservedBooks, setReservedBooks] = useState([
    {
      id: 1,
      image: 'https://via.placeholder.com/100', // Replace with actual image URLs
      name: 'Book One',
      reservedDates: '2024-11-10 to 2024-11-17',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/100',
      name: 'Book Two',
      reservedDates: '2024-11-12 to 2024-11-19',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/100',
      name: 'Book Three',
      reservedDates: '2024-11-15 to 2024-11-22',
    },
  ]);

  return (
    <div className="account-page">
      <h1>Your Account</h1>
      <div className="reserved-books">
        {reservedBooks.map((book) => (
          <div key={book.id} className="book-row">
            <img src={book.image} alt={book.name} className="book-image" />
            <div className="book-details">
              <h2>{book.name}</h2>
              <p>Reserved: {book.reservedDates}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;
