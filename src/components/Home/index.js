import React from "react";
import Navbar from "../Navbar";
import MyMoves from "../MyMoves";
import "./index.css";
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <MyMoves />
    </div>
  );
};

export default Home;
