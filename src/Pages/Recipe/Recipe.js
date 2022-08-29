import React, { useEffect, useState } from "react";
import "./Recipe.css";

const Recipe = () => {
  const id = window.location.pathname.slice(8);
  const [drink, setDrink] = useState({});
  const [allIngredients, setAllIngredients] = useState([]);
  const [allMeasurements, setAllMeasurements] = useState([]);

  const drinkName = drink.strDrink;
  const drinkImg = drink.strDrinkThumb;
  const drinkInstructions = drink.strInstructions;
  // const allIngredients = [];
  // const allMeasurements = [];
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((res) => {
        setDrink(res.drinks[0]);
        console.log(res.drinks[0]);

        for (let key in res.drinks[0]) {
          if (key.includes("strIngredient") && res.drinks[0][key]) {
            allIngredients.push(res.drinks[0][key]);
            setAllIngredients((prev) => {
              return [...prev, res.drinks[0][key]];
            });
          }
          if (key.includes("strMeasure") && res.drinks[0][key]) {
            // allMeasurements.push(res.drinks[0][key]);
            setAllMeasurements((prev) => {
              return [...prev, res.drinks[0][key]];
            });
          }
          console.log(res.drinks[0][key]);
        }
      });
    return () => console.log("cleanup");
  }, []);

  const ingregientsAndMeasurements = [];

  for (let i = 0; i < allIngredients.length; i++) {
    ingregientsAndMeasurements.push(
      <li className="ingredient-item">
        <span>{allIngredients[i]}</span> <span>{allMeasurements[i]}</span>
      </li>
    );
  }

  console.log(allIngredients);
  console.log(allMeasurements);

  return (
    <div className="recipe--container">
      <h1>{drinkName}</h1>
      <div className="recipe-img--container">
        <img src={drinkImg} />
      </div>
      <ul className="recipe-ingredients">{ingregientsAndMeasurements}</ul>

      <p>{drinkInstructions}</p>
    </div>
  );
};

export default Recipe;
