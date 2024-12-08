import React, { useState } from 'react';
import NavBar from '../Components/Navbar'; // Update the import path as per your folder structure
import '../CSS/account.css'; // Ensure your CSS file is correctly linked

const Account = () => {
  const [reservedBooks, setReservedBooks] = useState([
    {
      id: 1,
      image: 'https://via.placeholder.com/150x200',
      title: 'Book One',
      author: 'Author One',
      reservedDates: '2024-11-10 to 2024-11-17',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150x200',
      title: 'Book Two',
      author: 'Author Two',
      reservedDates: '2024-11-12 to 2024-11-19',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150x200',
      title: 'Book Three',
      author: 'Author Three',
      reservedDates: '2024-11-15 to 2024-11-22',
    },
  ]);

  const extendReservation = (id) => {
    setReservedBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id
          ? { ...book, reservedDates: '2024-11-10 to 2024-11-24' } // Example date extension
          : book
      )
    );
  };

  return (
    <div>
      {/* Navigation Bar */}
      <NavBar />

      {/* Account Page Content */}
      <div className="account-page">
        {/* Header Section */}
        <div className="header">
          <h1>Your Reserved Books</h1>
          <p class="whitetext">Manage your reservations here.</p>
        </div>

        {/* Filters/Search Section */}
        <div className="filters">
          <input
            type="text"
            placeholder="Search reserved books..."
            className="search-bar"
          />
          <button className="filter-button">Sort by Date</button>
        </div>

        {/* Reserved Books List */}
        <div className="reserved-books">
          {reservedBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} className="book-image" />
              <div className="book-info">
                <h2>{book.title}</h2>
                <p>Author: {book.author}</p>
                <p>Reserved: {book.reservedDates}</p>
                <div className="actions">
                  <button className="view-button">View Details</button>
                  <button
                    className="cancel-button"
                    onClick={() => alert(`Cancelled ${book.title}`)}
                  >
                    Cancel Reservation
                  </button>
                  <button
                    className="extend-button"
                    onClick={() => extendReservation(book.id)}
                  >
                    Extend Reservation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Account;
