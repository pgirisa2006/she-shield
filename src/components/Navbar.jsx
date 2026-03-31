import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // This function checks which page is currently active to highlight the link in blue
  const isActive = (path) => (location.pathname === path ? "active" : "");

  const handleLogout = () => {
    // Redirects user back to the Auth/Login page
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="logo">SHE SHIELD</div>
      
      <div className="nav-links">
        <Link to="/home" className={isActive('/home')}>
          HOME
        </Link>
        <Link to="/sos" className={isActive('/sos')}>
          SOS
        </Link>
        <Link to="/tips" className={isActive('/tips')}>
          TIPS
        </Link>
        <Link to="/legal" className={isActive('/legal')}>
          RIGHTS
        </Link>
        <Link to="/report" className={isActive('/report')}>
          REPORT
        </Link>
        
        <button onClick={handleLogout} className="logout-btn">
          LOGOUT
        </button>
      </div>
    </nav>
  );
};

export default Navbar;