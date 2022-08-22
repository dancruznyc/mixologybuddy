import React, { createContext, useState } from "react";
import { v4 } from "uuid";

export const MyBarContext = createContext();

export const MyBarContextProvider = ({ children }) => {
  const [myDrinksList, setMyDrinksList] = useState([]);
  function myBarLoader() {}
  function addNewDrink(drinkName, drinkBrand) {
    const id = v4();
    setMyDrinksList((prev) => {
      return [...prev, { id: id, name: drinkName, brand: drinkBrand }];
    });
  }
  function removeDrink() {}

  return (
    <MyBarContext.Provider
      value={{ myDrinksList, addNewDrink, myBarLoader, removeDrink }}
    >
      {children}
    </MyBarContext.Provider>
  );
};
