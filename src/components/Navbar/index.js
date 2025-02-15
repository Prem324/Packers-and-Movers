import React from "react";
import { FaTruckArrowRight } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { RiLoginCircleFill } from "react-icons/ri";
import { IoNewspaper } from "react-icons/io5";

import "./index.css";
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="nav-list">
        <li className="nav-item active">
          <FaTruckArrowRight className="nav-icon" />
          <p className="nav-text">MY MOVES</p>
        </li>
        <li className="nav-item">
          <CgProfile className="nav-icon" />
          <p className="nav-text">MY PROFILE</p>
        </li>
        <li className="nav-item">
          <IoNewspaper className="nav-icon" />
          <p className="nav-text">GET QUOTES</p>
        </li>
        <li className="nav-item">
          <RiLoginCircleFill className="nav-icon flip-to-logout" />
          <p className="nav-text">LOGOUT</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
