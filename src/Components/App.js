import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar'; // Import the Navbar component
import Home from '../Pages/Home';
import Login from '../Pages/login';
import Signup from '../Pages/Signup';

function App() {
  const location = useLocation();

  return (
    <div>
      {/* Conditionally render Navbar based on the current location */}
      {location.pathname !== '/login' && location.pathname !== '/signup' && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
