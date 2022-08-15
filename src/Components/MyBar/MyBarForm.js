import React from "react";
import "./MyBarForm.css";

const MyBarForm = () => {
  return (
    <div className="mybar-form--container">
      <form action="" className="mybar-form">
        <input type="text" placeholder="Enter drink name..." />
        <input type="text" placeholder="Enter brand..." />
        <button type="submit">Add Drink</button>
      </form>
    </div>
  );
};

export default MyBarForm;
