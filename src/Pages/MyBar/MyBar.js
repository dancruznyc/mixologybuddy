import React from "react";
import "./MyBar.css";

const MyBar = () => {
  return (
    <div className="mybar--container">
      <h2>My Bar</h2>
      <input type="text" name="" id="" placeholder="Add liqour type" />
      <div className="mybar--display">
        <ul></ul>
      </div>
    </div>
  );
};

export default MyBar;
