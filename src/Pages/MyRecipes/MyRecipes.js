import React, { useContext, useEffect, useState } from "react";
import { MyBarContext } from "../../Services/MyBarContext";
import "./MyRecipes.css";
import RecipeThumb from "../../Components/RecipeThumb/RecipeThumb";
import Pagination from "../../Components/Pagination/Pagination";
import RecipePlaceHolder from "../../Components/RecipePlaceHolder/RecipePlaceHolder";

const MyRecipes = () => {
  const { filteredDrinksList, getMyRecipes } = useContext(MyBarContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(18);
  const [loading, setLoading] = useState(false);

  // Get Current Posts
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  console.log(filteredDrinksList, "line 15");
  const currentRecipes = filteredDrinksList.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );
  console.log(filteredDrinksList, "line 20");

  //change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    getMyRecipes();
  }, []);

  const recipePlaceHolders = [];
  for (let i = 0; i < 9; i++) {
    recipePlaceHolders.push(<RecipePlaceHolder />);
  }

  let recipeDisplay;

  if (currentRecipes.length > 0) {
    recipeDisplay = currentRecipes?.map((recipe) => (
      <RecipeThumb
        key={recipe.idDrink}
        thumbnail={recipe.strDrinkThumb}
        title={recipe.strDrink}
        id={recipe.idDrink}
      />
    ));
  } else {
    recipeDisplay = <h2>Please Keep adding ingredients to your bar</h2>;
  }

  return (
    <div className="my-recipes--container">
      <div className="myrecipe--header">
        <h2 className="myrecipe--heading">My Recipes</h2>
      </div>
      <div className="allrecipes-display">
        {loading && recipePlaceHolders}
        {recipeDisplay}
      </div>
      <Pagination
        recipesPerPage={recipesPerPage}
        totalRecipes={filteredDrinksList.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default MyRecipes;
