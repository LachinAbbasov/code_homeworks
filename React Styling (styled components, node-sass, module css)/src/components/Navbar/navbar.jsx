import React, { useState } from 'react';
import { FaBars,  FaShoppingBasket } from 'react-icons/fa';
import '../../Scss/navbar.modulle.scss';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <img src="https://preview.colorlib.com/theme/abcbook/assets/img/logo/logo.png" alt="Logo" className="navbar-logo" />
            <input type="text" placeholder="Search book by author or publisher" className="search-input" />
          </div>
          <div className="burger-menu" onClick={toggleMenu}>
            <FaBars />
          </div>
          <div className={`menu-container ${isOpen ? "active" : ""}`}>
            <ul className="menu-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Pages</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><FaShoppingBasket /></li>
              
              <li><button className="sign-in-button">Sign In</button></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
