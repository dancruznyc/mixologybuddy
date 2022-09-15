import React, { useState, useEffect, useContext } from "react";
import "./AllRecipes.css";
import RecipeThumb from "../../Components/RecipeThumb/RecipeThumb";
import Pagination from "../../Components/Pagination/Pagination";
import { MyBarContext } from "../../Services/MyBarContext";

const apiKey = process.env.REACT_APP_API_KEY;

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(18);
  const [searchQ, setSearchQ] = useState("");
  const [apiUrl, setApiUrl] = useState(
    `https://www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php?a=alcoholic`
  );

  console.log(apiKey);

  const { allDrinkRecipes } = useContext(MyBarContext);

  useEffect(() => {
    fetch(`${apiUrl}${searchQ}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setRecipes(res.drinks);
      });
  }, []);

  useEffect(() => {
    updateRecipes();
  }, [setApiUrl, searchQ]);

  function updateRecipes() {
    if (
      apiUrl !==
      `https://www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php?a=alcoholic`
    ) {
      fetch(`${apiUrl}${searchQ}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setRecipes(res.drinks);
        });
    }
  }

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
        <h1 className="allrecipes--title">Search All Recipes</h1>
        <div className="allrecipes-header">
          <input type="text" onChange={changeSearchQ} />
          <select onChange={changeUrl}>
            <option
              value={`https://www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php?a=alcoholic`}
            >
              All Recipes
            </option>
            <option
              value={`https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php?s=`}
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
          {currentRecipes &&
            currentRecipes?.map((recipe) => (
              <RecipeThumb
                key={recipe?.idDrink}
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
