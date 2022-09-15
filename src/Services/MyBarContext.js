import React, { createContext, useEffect, useState } from "react";
import { v4 } from "uuid";
const apiKey = process.env.REACT_APP_API_KEY;

export const MyBarContext = createContext();

export const MyBarContextProvider = ({ children }) => {
  const [myBarContents, setMyBarContents] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]);
  const [allDrinkRecipes, setAllDrinkRecipes] = useState([]);
  const [drinksPlusIngredients, setDrinksPlusIngredients] = useState([]);
  const [filteredDrinksList, setFilteredDrinksList] = useState([]);

  const [ingredients, setIngredients] = useState([]);
  function getIngredients() {
    fetch(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/list.php?i=list`)
      .then((res) => res.json())
      .then((res) => {
        const ingredientsArray = res.drinks.map((item) => {
          return { value: item.strIngredient1, label: item.strIngredient1 };
        });
        setIngredients(ingredientsArray);
        console.log(ingredientsArray);
      });
  }
  useEffect(() => {
    getIngredients();
  }, []);

  function myBarLoader() {
    const list = JSON.parse(localStorage.getItem("myBarList"));
    if (list) {
      setMyBarContents(list);
    }
  }

  //=================================================================================

  function addNewDrink(drinkName, drinkBrand) {
    const id = v4();
    const newList = [
      ...myBarContents,
      { id: id, name: drinkName, brand: drinkBrand },
    ];
    setMyBarContents(newList);
    localStorage.setItem("myBarList", JSON.stringify(newList));
  }
  function removeDrink(id) {
    const newList = myBarContents.filter((item) => item.id !== id);
    setMyBarContents(newList);
    localStorage.setItem("myBarList", JSON.stringify(newList));
  }

  //=================================================================================
  // This function gets all drink recipes and then calls the transform function
  function getAllRecipes(ingredients) {
    // www.thecocktaildb.com/api/json/v1/1/filter.php?i=Dry_Vermouth,Gin,Anis
    const myIngredients = myBarContents.map((item) => item.name).join("");
    fetch(
      `https://www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php?a=${"alcoholic"}`
    )
      .then((res) => res.json())
      .then((res) => {
        setAllDrinkRecipes(res.drinks);
        // console.log(res.drinks, "all alcoholic drinks");
        transformRecipeData(res.drinks).then((res) => {
          // console.log(res, "all drink data");
          const drinksAndIngredients = res.map((drink) => {
            // console.log(drink.drinks[0], "pre mutated");
            const allIngredients = [];

            for (let key in drink.drinks[0]) {
              if (key.includes("strIngredient") && drink.drinks[0][key]) {
                allIngredients.push(drink.drinks[0][key]);
              }
            }

            return {
              idDrink: drink.drinks[0].idDrink,
              strDrink: drink.drinks[0].strDrink,
              strDrinkThumb: drink.drinks[0].strDrinkThumb,
              allIngredients: allIngredients,
            };
          });

          setDrinksPlusIngredients(drinksAndIngredients);
          // console.log(drinksAndIngredients, "mutated data");
        });
      });
    // .then(() => getMyRecipes());
  }

  //=================================================================================
  //This function gets data from all drinks and returns a simplified version of that data
  // that includes all ingredients
  // This function is called on line 60
  async function transformRecipeData(data) {
    // data.forEach((item) => console.log(item));
    const allDrinkData = data.map(async (drink) => {
      return await fetch(
        `https://www.thecocktaildb.com/api/json/v2/${apiKey}/lookup.php?i=${drink.idDrink}`
      ).then((res) => res.json());
    });

    return await Promise.all(allDrinkData);
  }
  //=================================================================================
  //This function checks all drinks to see if the user has all the proper ingredients
  function getMyRecipes() {
    // console.log(myBarContents, "from getmyrecipe");
    const simpleIngredients = myBarContents.map((item) =>
      item.name.toLowerCase()
    );
    // console.log(simpleIngredients, "simple ingredients");
    console.log(drinksPlusIngredients, "from getMyRecipes");
    const filteredList = [];

    drinksPlusIngredients.forEach((recipe) => {
      // console.log(recipe.allIngredients, "looping through drinks");
      // console.log(recipe.allIngredients, "before for loop");
      if (
        recipe.allIngredients.every((item) =>
          simpleIngredients.includes(item.toLowerCase())
        )
      ) {
        //   console.log("we found one");
        filteredList.push(recipe);
      }
      if (recipe.idDrink === "11007")
        console.log(recipe, "here is the margarita");
    });
    console.log(filteredList, "new filtered list");
    setFilteredDrinksList(filteredList);
  }

  //=================================================================================

  useEffect(() => {
    myBarLoader();
  }, []);

  useEffect(() => {
    // if (myBarContents) {
    //   getAllRecipes();
    // }
    getAllRecipes();
  }, []);

  useEffect(() => {
    getMyRecipes();
  }, [myBarContents]);

  return (
    <MyBarContext.Provider
      value={{
        ingredients,
        filteredDrinksList,
        myBarContents,
        allDrinkRecipes,
        getMyRecipes,
        drinksPlusIngredients,
        addNewDrink,
        myBarLoader,
        removeDrink,
      }}
    >
      {children}
    </MyBarContext.Provider>
  );
};
