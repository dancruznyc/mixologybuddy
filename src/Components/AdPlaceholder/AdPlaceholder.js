import React from "react";
import "./AdPlaceholder.css";
import adImage from "../../Assets/bluecocktail.jpeg";

const AdPlaceholder = () => {
  return (
    <div className="ad-placeholder--container">
      <img src={adImage} alt="blue cocktail ad" />
    </div>
  );
};

export default AdPlaceholder;
