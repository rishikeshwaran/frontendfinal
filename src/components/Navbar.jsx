import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/02/Logo_of_Forum.jpg" // 👈 You can replace this with your RV logo URL or local file
          alt="Forum Logo"
          className="logo"
        />
        <span className="brand-name">Forum System</span>
      </div>

      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/create-topic">Create Topic</Link>
        {!username ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <>
            <span className="welcome">Hi, {username}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
