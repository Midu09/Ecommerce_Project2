import React from "react";
import "./Hero.css";
import handIcon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hero-hand-icon">
              <p>new</p>
              <img className="imgHand" src={handIcon} alt="" />
            </div>
            <p>colections</p>
            <p>for everyone</p>
          </div>
          <div className="hero-latest-btn">
            <div>Latest Colection</div>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
