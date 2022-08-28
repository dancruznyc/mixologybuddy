import React, { useContext } from "react";
import { MyBarContext } from "../../Services/MyBarContext";
import "./MyBarList.css";
import MyBarListItem from "./MyBarListItem";

// const myList = [
//   { name: "Vodka", brand: "Gray Goose" },
//   { name: "Rum", brand: "Bicardi" },
//   { name: "Tequila", brand: "1500" },
//   { name: "Irish Cream", brand: "Baily's" },
//   { name: "Whiskey", brand: "Jameson" },
//   { name: "Brandy", brand: "E & J" },
//   { name: "Melon Liqour", brand: "Midori" },
// ];

const MyBarList = () => {
  const { myBarContents } = useContext(MyBarContext);
  return (
    <div className="mybar-list--container">
      {myBarContents.map((item) => {
        return (
          <MyBarListItem
            key={item.id}
            id={item.id}
            name={item.name}
            brand={item.brand}
          />
        );
      })}
    </div>
  );
};

export default MyBarList;
