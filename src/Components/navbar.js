import React, { useState, useEffect } from 'react';
import '../css/navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [updateFlag, setUpdateFlag] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('jwttoken');
    setIsLoggedIn(!!token);
    
  }, [location, updateFlag]);

  const handleLogout = () => {
    // Clear session storage and log the user out
    localStorage.removeItem('jwttoken');
    setIsLoggedIn(false);
    setUpdateFlag(prevFlag => !prevFlag);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/AboutUs">
              About Us
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/ContactUs">
              Contact Us
            </Link>
          </li>
          <li className="navbar-item">
            {isLoggedIn ? (
              <div className="d-flex align-items-center">
               
                <Link className="nav-link" to="/login" onClick={handleLogout}>
                  Logout
                </Link>
              </div>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
