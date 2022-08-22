import React from "react";

const MyBarListItem = ({ id, name, brand }) => {
  return (
    <div className="mybar-list--item">
      <p className="name-par">{name}</p>
      <p className="brand-par">{brand}</p>
      <button>Remove</button>
      <button>Edit</button>
    </div>
  );
};

export default MyBarListItem;
