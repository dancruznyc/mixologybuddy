import React from "react";
import "./MyBarAd.css";
import adImage from "../../Assets/bluecocktail.jpeg";

const MyBarAd = () => {
  return (
    <div className="mybar-ad--container">
      <img src={adImage} alt="blue cocktail ad" />
    </div>
  );
};

export default MyBarAd;
