import React from "react";
import "./RecipeThumb.css";

const RecipeThumb = ({ thumbnail, title }) => {
  return (
    <div className="recipe-thumb--container">
      <div className="thumbnail--container">
        <img src={thumbnail}></img>
      </div>
      <h3 className="recipe-thumb--title">{title}</h3>
    </div>
  );
};

export default RecipeThumb;
