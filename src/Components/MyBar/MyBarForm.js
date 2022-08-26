import React, { useState, useContext, useEffect } from "react";
import { MyBarContext } from "../../Services/MyBarContext";
import "./MyBarForm.css";
import Select from "react-select";

const MyBarForm = () => {
  const [drinkName, setDrinkName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const { addNewDrink } = useContext(MyBarContext);

  function getIngredients() {
    fetch("https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list")
      .then((res) => res.json())
      .then((res) => {
        const ingredientsArray = res.drinks.map((item) => {
          return { value: item.strIngredient1, label: item.strIngredient1 };
        });
        setIngredients(ingredientsArray);
        console.log(ingredientsArray);
      });
  }

  function addToBar(e) {
    e.preventDefault();

    addNewDrink(drinkName, brandName);
    setDrinkName("");
    setBrandName("");
  }
  function updateDrinkName(e) {
    setDrinkName(e.value);
  }
  function updateBrandName(e) {
    setBrandName(e.target.value);
  }

  useEffect(() => {
    getIngredients();
  }, []);
  return (
    <div className="mybar-form--container">
      <form action="" className="mybar-form" onSubmit={addToBar}>
        <Select
          options={ingredients}
          onChange={updateDrinkName}
          className={"ingredients-select"}
          placeholder={"Enter contents of your bar..."}
        />
        <input
          type="text"
          placeholder="Enter brand..."
          onChange={updateBrandName}
          value={brandName}
        />
        <button type="submit">Add Drink</button>
      </form>
    </div>
  );
};

export default MyBarForm;
