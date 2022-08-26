import React, { createContext, useEffect, useState } from "react";
import { v4 } from "uuid";

export const MyBarContext = createContext();

export const MyBarContextProvider = ({ children }) => {
  const [myDrinksList, setMyDrinksList] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]);
  const [allDrinkRecipes, setAllDrinkRecipes] = useState([]);
  function myBarLoader() {
    const list = JSON.parse(localStorage.getItem("myBarList"));
    if (list) {
      setMyDrinksList(list);
    }
  }
  function addNewDrink(drinkName, drinkBrand) {
    const id = v4();
    const newList = [
      ...myDrinksList,
      { id: id, name: drinkName, brand: drinkBrand },
    ];
    setMyDrinksList(newList);
    localStorage.setItem("myBarList", JSON.stringify(newList));
  }
  function removeDrink(id) {
    const newList = myDrinksList.filter((item) => item.id !== id);
    setMyDrinksList(newList);
    localStorage.setItem("myBarList", JSON.stringify(newList));
  }

  function getAllRecipes(ingredients) {
    // www.thecocktaildb.com/api/json/v1/1/filter.php?i=Dry_Vermouth,Gin,Anis
    const myIngredients = myDrinksList.map((item) => item.name).join("");
    fetch(
      `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=${"alcoholic"}`
    )
      .then((res) => res.json())
      .then((res) => setAllDrinkRecipes(res));
  }

  function getMyRecipes() {
    console.log(allDrinkRecipes);
  }

  useEffect(() => {
    myBarLoader();
  }, []);

  useEffect(() => {
    if (myDrinksList) {
      getAllRecipes();
    }
  }, []);

  useEffect(() => {
    getMyRecipes();
  }, [myDrinksList]);

  return (
    <MyBarContext.Provider
      value={{ myDrinksList, myRecipes, addNewDrink, myBarLoader, removeDrink }}
    >
      {children}
    </MyBarContext.Provider>
  );
};
