import React, { useState, useContext, useEffect } from "react";
import { MyFavoritesContext } from "../../Services/MyFavoritesContext";
import "./HeartIcon.css";

const HeartIcon = ({ recipeId }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const { addToFavorites, myFavorites } = useContext(MyFavoritesContext);

  useEffect(() => {
    if (myFavorites.includes(recipeId)) {
      setIsLiked(true);
      setIsFavorited(true);
    }
  }, []);

  function isInFavorites() {}

  function favoriteClicked() {
    if (isLiked) {
      setIsFavorited(false);
    }
    setIsLiked(!isLiked);
    addToFavorites(recipeId);
  }

  const likeClass = isLiked ? "is-active" : "";
  const inFavorites = isFavorited ? "is-favorited" : "";

  return (
    <div className="stage">
      <div
        className={`heart ${likeClass} ${inFavorites}`}
        onClick={favoriteClicked}
      ></div>
    </div>
  );
};

export default HeartIcon;
