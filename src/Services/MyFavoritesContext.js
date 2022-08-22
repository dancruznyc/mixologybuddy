import React, { createContext, useState } from "react";

export const MyFavoritesContext = createContext();

export const MyFavoritesContextProvider = ({ children }) => {
  const [myFavorites, setMyFavorites] = useState([]);
  function loadFavorites() {}
  function addToFavorites() {}
  function removeFromFavorites() {}
  return (
    <MyFavoritesContext.Provider value={{}}>
      {children}
    </MyFavoritesContext.Provider>
  );
};
