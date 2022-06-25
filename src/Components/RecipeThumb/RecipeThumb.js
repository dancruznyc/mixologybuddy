import React from "react";
import "./RecipeThumb.css";
import { Link } from "react-router-dom";

const RecipeThumb = ({ thumbnail, title, id }) => {
  return (
    <Link to={`/recipe/${id}`}>
      <div className="recipe-thumb--container">
        <div className="thumbnail--container">
          <img src={thumbnail}></img>
        </div>
        <h3 className="recipe-thumb--title">{title}</h3>
      </div>
    </Link>
  );
};

export default RecipeThumb;
