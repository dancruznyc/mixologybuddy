import React, { useEffect, useState } from "react";
import "./Recipe.css";

const Recipe = () => {
  console.log("hello");
  const id = window.location.pathname.slice(8);
  const [drink, setDrink] = useState({});
  const [allIngredients, setAllIngredients] = useState([]);
  const [allMeasurements, setAllMeasurements] = useState([]);

  const drinkName = drink.strDrink;
  const drinkImg = drink.strDrinkThumb;
  const drinkInstructions = drink.strInstructions;

  function fetchData() {
    console.log("inside fetch data");
    if (Object.keys(drink).length === 0) {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res, "from fetch res");
          setDrink(res.drinks[0]);
          console.log(res.drinks[0], "from get req");
          console.log("HEre is the list", res.drinks[0]);
        });
    }
  }

  function getIngsAndMeas() {
    console.log("getINgsAndMeas being called");
    const ingArray = [];
    const measArray = [];
    for (let key in drink) {
      if (key.includes("strIngredient") && drink[key]) {
        // setAllIngredients((prev) => {
        //   return [...prev, drink[key]];
        // });
        // console.log(drink[key], "from getIngsAndMeas");
        ingArray.push(drink[key]);
      } else if (key.includes("strMeasure") && drink[key]) {
        // setAllMeasurements((prev) => {
        //   return [...prev, drink[key]];
        // });
        // console.log(drink[key], "from getIngsAndMeas");
        measArray.push(drink[key]);
      }
      // console.log(drink[key], " second log");
      setAllIngredients(ingArray);
      setAllMeasurements(measArray);
    }
  }

  const ingregientsAndMeasurements = [];

  console.log(allIngredients, "all ingredients before loop");

  for (let i = 0; i < allIngredients.length; i++) {
    ingregientsAndMeasurements.push(
      <li className="ingredient-item">
        <span>{allIngredients[i]}</span> <span>{allMeasurements[i]}</span>
      </li>
    );
    console.log(allMeasurements[i], "from loop");
  }
  console.log(allMeasurements, "line 58");
  console.log(
    "TEST",
    allIngredients,
    allMeasurements,
    ingregientsAndMeasurements
  ); // Only this line fires
  console.log(allMeasurements);

  useEffect(() => {
    fetchData();
    console.log("fetch fired");
  }, []);

  useEffect(() => {
    if (Object.keys(drink).length !== 0) {
      getIngsAndMeas();
    }
    console.log("useEffect fired");
  }, [drink]);

  return (
    <div className="recipe--container">
      <h1>{drinkName}</h1>
      <div className="recipe-img--container">
        <img src={drinkImg} alt={"cocktail"} />
      </div>
      <ul className="recipe-ingredients">{ingregientsAndMeasurements}</ul>

      <p>{drinkInstructions}</p>
    </div>
  );
};

export default Recipe;
