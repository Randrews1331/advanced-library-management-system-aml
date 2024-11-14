import React from "react";
import '../CSS/Footer.css';
const Footer = () => {
  return (
    <div>
    <footer>
      <p>&copy; {new Date().getFullYear()} Advanced Media Library</p>
      <ul id="leftList">
        <li class="title">About</li>
        <li><a href="#">Copyrights</a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">ghsdfdfsg</a></li>g
        </ul>    
        <ul>
          <li class = "title">Legal</li>
          <li><a href="#">dfhafgb</a></li>
          <li><a href="#">khsdds</a></li>
          <li><a href="#">dhkgds</a></li>
      </ul>
      <ul id="rightList">
          <li class = "title">dfghjfmd</li>
          <li><a href="#">dfhafgb</a></li>
          <li><a href="#">khsdds</a></li>
          <li><a href="#">dhkgds</a></li>
      </ul>
    </footer>
  </div>
  );
};

export default Footer;