import React, { useState, useContext } from "react";
import { MyBarContext } from "../../Services/MyBarContext";
import "./MyBarForm.css";

const MyBarForm = () => {
  const [drinkName, setDrinkName] = useState("");
  const [brandName, setBrandName] = useState("");
  const { addNewDrink } = useContext(MyBarContext);

  function addToBar(e) {
    e.preventDefault();

    addNewDrink(drinkName, brandName);
    setDrinkName("");
    setBrandName("");
  }
  function updateDrinkName(e) {
    setDrinkName(e.target.value);
  }
  function updateBrandName(e) {
    setBrandName(e.target.value);
  }
  return (
    <div className="mybar-form--container">
      <form action="" className="mybar-form" onSubmit={addToBar}>
        <input
          type="text"
          placeholder="Enter drink name..."
          onChange={updateDrinkName}
          value={drinkName}
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
