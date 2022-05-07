import React from "react";
import Magic from "../../assets/img/magic.png";
const Hero = () => {
  return (
    <div className="flex-grow-1">
      <div className="container">
        <div className="hero d-flex justify-content-between">
          <div className="left-hero">
            <h1>
              World of Wolves is a unique concept including staking, breeding,
              customisation & evolution
            </h1>
            <button className="px-4 py-2 bg-transparent btn-transparent">
              <img src={Magic} className="ms-2" alt="magic" />{" "}
              <span className="d-inline-block px-2">Magic Eden</span>
            </button>
          </div>
          <div className="right-hero"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
