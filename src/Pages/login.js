import miniLogo from '../CSS/mini.jpg'; 
import React, { useRef } from 'react';
import '../CSS/login.css';
import { handleMouseMove, handleMouseLeave } from '../Javascript/LoginJavaS';

const Login = () => {
  const imageRef = useRef(null);
//Baclground for login page is taken from https://codepen.io/carmenansio/pen/MWExRMQ
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
            <input type="text" placeholder="Username" className="login-input" />
            <input type="password" placeholder="Password" className="login-input" />
            <button className="login-button">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;