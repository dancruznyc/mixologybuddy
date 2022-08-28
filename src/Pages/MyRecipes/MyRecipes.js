import React, { useContext } from "react";
import { MyBarContext } from "../../Services/MyBarContext";
import "./MyRecipes.css";

const MyRecipes = () => {
  const { filteredDrinksList } = useContext(MyBarContext);
  console.log(filteredDrinksList);
  return (
    <div className="my-recipes--container">
      <h2>My Recipes</h2>
    </div>
  );
};

export default MyRecipes;
