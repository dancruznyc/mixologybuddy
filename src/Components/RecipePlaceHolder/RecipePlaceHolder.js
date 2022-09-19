import React from "react";
import "./RecipePlaceHolder.css";
import { BsFillHeartFill } from "react-icons/bs";

const RecipePlaceHolder = () => {
  return (
    <div className="recipe-placeholder--container">
      <div className="placeholder-img--container"></div>

      <div className="recipe-placeholder--content">
        <h3 className="recipe-placeholder--title"></h3>
        <div className="heart-container">
          <BsFillHeartFill />
        </div>
      </div>
    </div>
  );
};

export default RecipePlaceHolder;
