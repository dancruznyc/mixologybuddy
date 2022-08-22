import React, { useState, useContext } from "react";
import "./MyBarListItem.css";
import { BsThreeDotsVertical, BsTrashFill } from "react-icons/bs";
import { GrEdit } from "react-icons/gr";
import { IoMdCloseCircle } from "react-icons/io";
import { MyBarContext } from "../../Services/MyBarContext";

const MyBarListItem = ({ id, name, brand }) => {
  const [toggle, setToggle] = useState(false);
  function toggleAccordian() {
    setToggle(!toggle);
  }

  const { removeDrink } = useContext(MyBarContext);
  return (
    <div className="mybar-list--item">
      <div className="list-item-content--container">
        <div className="list-item--content">
          <p className="name-par">{name}</p>
          <p className="brand-par">{brand}</p>
        </div>
        <div className="open-accordian-btn">
          {toggle === false ? (
            <BsThreeDotsVertical onClick={toggleAccordian} />
          ) : (
            <IoMdCloseCircle onClick={toggleAccordian} />
          )}
        </div>
      </div>
      <div className={toggle === false ? "control-btns" : "control-btns show"}>
        <button>
          <BsTrashFill onClick={() => removeDrink(id)} />
        </button>
        <button>
          <GrEdit />
        </button>
      </div>
    </div>
  );
};

export default MyBarListItem;
