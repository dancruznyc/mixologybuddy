import React, { useState, useContext } from "react";
import { MyFavoritesContext } from "../../Services/MyFavoritesContext";
import "./HeartIcon.css";

const HeartIcon = ({ recipeId }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { addToFavorites } = useContext(MyFavoritesContext);

  function favoriteClicked() {
    setIsLiked(!isLiked);
    addToFavorites(recipeId);
  }

  const likeClass = isLiked ? "is-active" : "";
  return (
    <div className="stage">
      <div className={`heart ${likeClass}`} onClick={favoriteClicked}></div>
    </div>
  );
};

export default HeartIcon;
