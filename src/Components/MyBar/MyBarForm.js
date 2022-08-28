import React, { useState, useContext, useEffect } from "react";
import { MyBarContext } from "../../Services/MyBarContext";
import "./MyBarForm.css";
import Select from "react-select";

const MyBarForm = () => {
  const [drinkName, setDrinkName] = useState("");
  const [brandName, setBrandName] = useState("");

  const { addNewDrink, ingredients } = useContext(MyBarContext);

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
