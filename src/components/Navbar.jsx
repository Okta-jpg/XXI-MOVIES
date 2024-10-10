import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">XXI MOVIES</Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/popular" className="nav-link" onClick={toggleMenu}>Popular</Link>
          </li>
          <li className="nav-item">
            <Link to="/top-rated" className="nav-link" onClick={toggleMenu}>Top Rated</Link>
          </li>
          <li className="nav-item">
            <Link to="/upcoming" className="nav-link" onClick={toggleMenu}>Upcoming</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;