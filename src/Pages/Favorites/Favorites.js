import React, { useContext } from "react";
import { MyFavoritesContext } from "../../Services/MyFavoritesContext";
import RecipeThumb from "../../Components/RecipeThumb/RecipeThumb";
import "./Favorites.css";

const Favorites = () => {
  const { myFavoritesThumbs } = useContext(MyFavoritesContext);
  return (
    <div className="favorites--container">
      <h1>My Favorites</h1>
      <div className="allrecipes-display">
        {myFavoritesThumbs?.map((recipe) => (
          <RecipeThumb
            key={recipe?.drinks[0]?.idDrink}
            thumbnail={recipe?.drinks[0]?.strDrinkThumb}
            title={recipe?.drinks[0]?.strDrink}
            id={recipe?.drinks[0]?.idDrink}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
