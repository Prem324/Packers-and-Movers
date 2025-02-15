import React from "react";
import headerImg from "../../assets/header-img.png";
import headerImgFlip from "../../assets/header-img-flip.png";

import "./index.css";

const Header = () => {
  return (
    <div className="header-container">
      <img className="header-icon" src={headerImgFlip} alt="header-img" />
      <h1 className="header-name">PACKERS AND MOVERS</h1>
      <img className="header-icon" src={headerImg} alt="header-img" />
    </div>
  );
};

export default Header;
