import React, { createContext, useEffect, useState } from "react";

export const MyBarContext = createContext();

export const MyBarContextProvider = ({ children }) => {
  const [myDrinks, setMyDrinks] = useState([]);
  function MyBarLoader() {}
  function addNewDrink() {}
  function removeDrink() {}

  return <MyBarContext.Provider value={{}}>{children}</MyBarContext.Provider>;
};
