import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Pages/login.js'; // Make sure this matches your filename case
import Home from '../Pages/Home';   // Ensure Home.js exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />      {/* Default Home page */}
        <Route path="/login" element={<Login />} />{/* Route for login page */}
      </Routes>
    </Router>
  );
}

export default App;
