import React, { useState } from "react";
import "./RecipeThumb.css";
import { Link } from "react-router-dom";
import HeartIcon from "../HeartIcon/HeartIcon";

const RecipeThumb = ({ thumbnail, title, id }) => {
  const [isLiked, setIsLiked] = useState(false);
  function addToFavorites() {
    setIsLiked(!isLiked);
  }

  return (
    <div className="recipe-thumb--container">
      <Link to={`/recipe/${id}`}>
        <div className="thumbnail--container">
          <img src={thumbnail}></img>
        </div>
      </Link>
      <div className="recipe-thumb--content">
        <h3 className="recipe-thumb--title">{title}</h3>
        <div className="heart-container">
          <HeartIcon isLiked={isLiked} onHeartClick={addToFavorites} />
        </div>
      </div>
    </div>
  );
};

export default RecipeThumb;
