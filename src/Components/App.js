import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar'; // Import the Navbar component
import Home from '../Pages/Home';
import Login from '../Pages/login';

function App() {
  // Get the current location (route)
  const location = useLocation();

  return (
    <div>
      {/* Conditionally render Navbar based on the current location */}
      {location.pathname !== '/login' && <Navbar />} {/* Navbar will not show on Login page */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
