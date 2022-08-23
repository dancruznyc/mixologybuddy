import React, { useEffect, useState } from "react";
import "./Recipe.css";

const Recipe = () => {
  const id = window.location.pathname.slice(8);
  const [drink, setDrink] = useState({});
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((res) => {
        setDrink(res.drinks[0]);
        console.log(res);
      });
  }, []);

  const drinkName = drink.strDrink;
  const drinkImg = drink.strDrinkThumb;
  const drinkInstructions = drink.strInstructions;
  return (
    <div className="recipe--container">
      <h1>{drinkName}</h1>
      <img src={drinkImg} />
      <p>{drinkInstructions}</p>
    </div>
  );
};

export default Recipe;
