import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { MdLocalBar } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { BiNews } from "react-icons/bi";
import { TbListSearch } from "react-icons/tb";
import { BsListCheck } from "react-icons/bs";
import { GiShop } from "react-icons/gi";
import myRecipe from "../../Assets/BarIcons/myRecipe.svg";
import allRecipesIcon from "../../Assets/BarIcons/allRecipes.svg";
import barBottlesIcon from "../../Assets/BarIcons/barbottlesicon.svg";
import newsIcon from "../../Assets/BarIcons/newsicon.svg";
import allRecipesBookIcon from "../../Assets/BarIcons/allRecipesBook.svg";

const Sidebar = () => {
  return (
    <ul className="sidebar--container">
      <li>
        <Link to="/">MixologyBuddy</Link>
      </li>
      <li>
        <Link to="/mybar">
          <img
            src={barBottlesIcon}
            className="sidebar-icons"
            alt="artist in studio"
          />{" "}
          <span className="list-span"> My Bar</span>
        </Link>
      </li>

      <li>
        <Link to="/myrecipes">
          <img
            src={myRecipe}
            className="sidebar-icons"
            alt="artist in studio"
          />
          <span className="list-span">My Recipes</span>
        </Link>
      </li>
      <li>
        <Link to="/allrecipes">
          <img
            src={allRecipesBookIcon}
            className="sidebar-icons"
            alt="artist in studio"
          />
          <span className="list-span">All Recipes</span>
        </Link>
      </li>
      <li>
        <Link to="/favorites">
          <FaHeart />
          <span className="list-span"> Favorites</span>
        </Link>
      </li>
      <li>
        <Link to="/news">
          <img
            src={newsIcon}
            className="sidebar-icons"
            alt="artist in studio"
          />{" "}
          <span className="list-span">News </span>
        </Link>
      </li>
      <li>
        <Link to="sales">
          <GiShop /> <span className="list-span"> Sales</span>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
