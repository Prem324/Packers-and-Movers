import React from "react";
import Navbar from "../Navbar";
import MyMoves from "../MyMoves";
import Header from "../Header";
import "./index.css";
const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <Navbar />
        <MyMoves />
      </div>
    </>
  );
};

export default Home;
