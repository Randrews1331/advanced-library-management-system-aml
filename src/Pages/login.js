import React, { useRef, useState } from 'react';
import miniLogo from '../CSS/imgs/mini.jpg';
import '../CSS/login.css';
import { handleMouseMove, handleMouseLeave } from '../Javascript/LoginJavaS';
import { useAuth } from '../Components/AuthContext';

const Login = () => {
  const { login } = useAuth(); // Use the login function from context
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const imageRef = useRef(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        login(); // Set the global session state
        alert('Login successful');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Server error');
    }
  };

  return (
    <div className="gradient">
      <div className="login-container">
        <div className="login-box">
          <img
            src={miniLogo}
            alt="Logo"
            className="login-image"
            ref={imageRef}
            onMouseMove={(e) => handleMouseMove(e, imageRef.current)}
            onMouseLeave={() => handleMouseLeave(imageRef.current)}
          />
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
            <button className="login-button" onClick={handleLogin}>Login</button>
            <a className="signlink" href="signup">SignUp</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
