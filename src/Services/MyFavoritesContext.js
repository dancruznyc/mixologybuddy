import React, { createContext, useEffect, useState } from "react";

export const MyFavoritesContext = createContext();

export const MyFavoritesContextProvider = ({ children }) => {
  const [myFavorites, setMyFavorites] = useState([]);
  const [myFavoritesThumbs, setMyFavoritesThumbs] = useState([]);
  function loadFavorites() {}
  function addToFavorites(recipeId) {
    if (myFavorites.includes(recipeId)) {
      const newFavoritesList = myFavorites.filter((id) => id !== recipeId);
      setMyFavorites(newFavoritesList);
      console.log(newFavoritesList);
    } else {
      const newFavoritesList = [...myFavorites, recipeId];
      setMyFavorites(newFavoritesList);
      console.log(newFavoritesList);
    }
  }

  async function getFavoriteThumbs() {
    const newThumbs = myFavorites.map(async (fave) => {
      return await fetch(
        `https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${fave}`
      ).then((res) => res.json());
    });

    return await Promise.all(newThumbs);
  }

  useEffect(() => {
    getFavoriteThumbs().then((res) => {
      setMyFavoritesThumbs(res);
      console.log(res);
    });
  }, [myFavorites]);

  return (
    <MyFavoritesContext.Provider
      value={{ myFavorites, myFavoritesThumbs, addToFavorites }}
    >
      {children}
    </MyFavoritesContext.Provider>
  );
};
