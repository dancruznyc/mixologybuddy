import React from "react";
import "./MyBarList.css";

const myList = [
  { name: "Vodka", brand: "Gray Goose" },
  { name: "Rum", brand: "Bicardi" },
  { name: "Tequila", brand: "1500" },
  { name: "Irish Cream", brand: "Baily's" },
  { name: "Whiskey", brand: "Jameson" },
  { name: "Brandy", brand: "E & J" },
  { name: "Melon Liqour", brand: "Midori" },
];

const MyBarList = () => {
  return (
    <div className="mybar-list--container">
      {myList.map((item) => {
        return (
          <div className="mybar-list--item">
            <p>{item.name}</p>
            <p>{item.brand}</p>
            <button>Remove</button>
            <button>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default MyBarList;
