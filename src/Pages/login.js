import React, { useState } from 'react';
import axios from 'axios';
import miniLogo from '../CSS/mini.jpg'; 
import '../CSS/login.css'; // Linking back to login.css

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      if (response.data.token) {
        setMessage('Login successful!');
        // Store the token for future authentication
        localStorage.setItem('token', response.data.token);
        // Redirect to a protected page if needed
        // window.location.href = "/dashboard"; // Example redirect
      } else {
        setMessage(response.data.message || 'Unknown error');
      }
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={miniLogo} alt="Logo" className="login-image" />
        <div className="login-form">
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
