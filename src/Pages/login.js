import miniLogo from '../CSS/mini.jpg'; 
import React from 'react';
import '../CSS/login.css'; // Linking back to login.css

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <img src={miniLogo} alt="Logo" className="login-image" />
        <div className="login-form">
          <h1>Login</h1>
          <input type="text" placeholder="Username" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <button className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
