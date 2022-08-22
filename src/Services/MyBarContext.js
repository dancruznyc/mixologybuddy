import React, { createContext, useEffect, useState } from "react";
import { v4 } from "uuid";

export const MyBarContext = createContext();

export const MyBarContextProvider = ({ children }) => {
  const [myDrinksList, setMyDrinksList] = useState([]);
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

  useEffect(() => {
    myBarLoader();
  }, []);

  return (
    <MyBarContext.Provider
      value={{ myDrinksList, addNewDrink, myBarLoader, removeDrink }}
    >
      {children}
    </MyBarContext.Provider>
  );
};
