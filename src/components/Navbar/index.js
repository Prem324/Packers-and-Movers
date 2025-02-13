import React from "react";
import { Link } from "react-router-dom";
import { FaTruckArrowRight } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import "./index.css";
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="nav-list">
        <Link to="/" className="link-item">
          <li className="nav-item">
            <FaTruckArrowRight className="nav-icon" />
            <p className="nav-text">MY MOVES</p>
          </li>
        </Link>
        <Link to="/profile" className="link-item">
          <li className="nav-item">
            <CgProfile className="nav-icon" />
            <p className="nav-text">MY PROFILE</p>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
