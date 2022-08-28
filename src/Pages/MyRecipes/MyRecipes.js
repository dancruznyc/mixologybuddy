import React, { useContext, useEffect } from "react";
import { MyBarContext } from "../../Services/MyBarContext";
import "./MyRecipes.css";
import RecipeThumb from "../../Components/RecipeThumb/RecipeThumb";

const MyRecipes = () => {
  const { filteredDrinksList, getMyRecipes } = useContext(MyBarContext);
  console.log(filteredDrinksList);

  useEffect(() => {
    getMyRecipes();
  }, []);
  return (
    <div className="my-recipes--container">
      <h2>My Recipes</h2>
      <div className="allrecipes-display">
        {filteredDrinksList?.map((recipe) => (
          <RecipeThumb
            key={recipe.idDrink}
            thumbnail={recipe.strDrinkThumb}
            title={recipe.strDrink}
            id={recipe.idDrink}
          />
        ))}
      </div>
    </div>
  );
};

export default MyRecipes;
