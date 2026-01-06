import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src="./src/assets/pl_logo.svg" alt="Premier League Logo" />
          <span className="logo-text">
            PL<span className="hub-text">HUB</span>
          </span>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#standings">Standings</a>
          </li>
          <li>
            <a href="#fixtures">Fixtures</a>
          </li>
          <li>
            <a href="#teams">Teams</a>
          </li>
        </ul>

        <div className="nav-action">
          <button className="btn-live">Live Scores</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
