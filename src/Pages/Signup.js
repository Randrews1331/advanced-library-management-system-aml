import React, { useRef, useState } from 'react';
import miniLogo from '../CSS/imgs/mini.jpg';
import '../CSS/login.css';
import { handleMouseMove, handleMouseLeave } from '../Javascript/LoginJavaS';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const imageRef = useRef(null);

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          dob,
          email,
          username,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Signup successful! Please log in.');
      } else {
        alert(data.message); // Displays server-side error message
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
            <h1>Sign Up</h1>
            <input
              type="text"
              placeholder="First Name"
              className="login-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="login-input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="date"
              placeholder="Date of Birth"
              className="login-input"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
            <button className="login-button" onClick={handleSignup}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
