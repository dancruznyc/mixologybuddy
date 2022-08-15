import React from "react";
import MyBarAd from "../../Components/MyBar/MyBarAd";
import MyBarForm from "../../Components/MyBar/MyBarForm";
import MyBarList from "../../Components/MyBar/MyBarList";
import "./MyBar.css";

const MyBar = () => {
  return (
    <div className="mybar--container">
      <h2 className="mybar--heading">My Bar</h2>
      <div className="mybar--display">
        <div className="mybar--display-left">
          <MyBarForm />
          <MyBarList />
        </div>
        <div className="mybar--display-right">
          <MyBarAd />
        </div>
      </div>
    </div>
  );
};

export default MyBar;
