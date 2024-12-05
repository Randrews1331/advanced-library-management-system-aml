import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Pages/login.js'; // Make sure this matches your filename case
import Home from '../Pages/Home';   // Ensure Home.js exists
import Signup from '../Pages/Signup';
import Account from '../Pages/Account.js';
import Admin from '../Pages/Admin.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />      {/* Default Home page */}
        <Route path="/login" element={<Login />} />{/* Route for login page */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
