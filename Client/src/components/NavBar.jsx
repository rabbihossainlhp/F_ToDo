import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ComponentStyle/NavBar.css';
import logo from './ComponentStyle/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled");
    setIsOpen(!isOpen);
  };
 

  return (
    <>
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? "bx bx-x mobile-menu-icon" : "bx bx-menu mobile-menu-icon"}></i>
        </div>

        <nav className={isOpen ? "navbar active" : "navbar"}>
  <ul>
    <li><Link to="/Login" class="button-63" role="button">Login</Link></li>
    <li><Link to="/Signup" class="button-63" role="button">Signup</Link></li>
  </ul>
</nav>

       </header>

       <div className={isOpen ? "nav-bg active" : "nav-bg"} onClick={toggleMenu}></div>

    </>
  );
};

export default Navbar;
