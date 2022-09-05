import React from "react";
import { GiGlassShot } from "react-icons/gi";
import "./MyBarInstructions.css";

const MyBarInstructions = () => {
  return (
    <ul className="mybar-instructions--container">
      <h3 className="mybar-instructions--title">Tips</h3>
      <li className="mybar-instructions--item">
        <GiGlassShot />
        <div>
          Include all non-alcoholic drinks you have. eg. Orange Juice, Milk,
          Water
        </div>
      </li>
      <li className="mybar-instructions--item">
        <GiGlassShot />
        <div>Include all dry goods you have. eg. Salt, Pepper, Eggs</div>
      </li>
      <li className="mybar-instructions--item">
        <GiGlassShot />
        <div>Include all dry goods you have. eg. Salt, Pepper, Eggs</div>
      </li>
    </ul>
  );
};

export default MyBarInstructions;
