import React, { useState, useEffect } from "react";
import "./AllRecipes.css";
import RecipeThumb from "../../Components/RecipeThumb/RecipeThumb";
import Pagination from "../../Components/Pagination/Pagination";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const [searchQ, setSearchQ] = useState("");
  const [apiUrl, setApiUrl] = useState(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
  );

  useEffect(() => {
    fetch(`${apiUrl}${searchQ}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setRecipes(res.drinks);
      });
  }, [setApiUrl, searchQ]);

  // Get Current Posts
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes?.slice(indexOfFirstRecipe, indexOfLastRecipe);

  //change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function changeUrl(e) {
    setApiUrl(e.target.value);
    console.log(e.target.value);
  }
  function changeSearchQ(e) {
    console.log(e.target.value);
    setSearchQ(e.target.value);
  }

  return (
    <div className="allrecipes--container">
      <div className="allrecipes--content">
        <div className="allrecipes-header">
          <input type="text" onChange={changeSearchQ} />
          <select onChange={changeUrl}>
            <option
              value={
                "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
              }
            >
              All Recipes
            </option>
            <option
              value={
                "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
              }
            >
              Search by Name
            </option>
            <option
              value={
                "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="
              }
            >
              Search by Ingredient
            </option>
          </select>
        </div>
        <div className="allrecipes-display">
          {currentRecipes?.map((recipe) => (
            <RecipeThumb
              thumbnail={recipe?.strDrinkThumb}
              title={recipe?.strDrink}
              id={recipe?.idDrink}
            />
          ))}
        </div>
        <Pagination
          recipesPerPage={recipesPerPage}
          totalRecipes={recipes?.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default AllRecipes;
