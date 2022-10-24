import React, { useState } from "react";
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
  const [hamburgerActive, setHamburgerActive] = useState("");
  const [sidebarActive, setSidebarActive] = useState("");

  function hamburgerClick() {
    if (!hamburgerActive) {
      setHamburgerActive("--active");
      setSidebarActive("sidebar--active");
      // sideNavController("side-nav--container--active");
    } else {
      setHamburgerActive("");
      setSidebarActive("");
      // sideNavController("");
    }
  }
  return (
    <>
      <div className="hamburger-btn" onClick={hamburgerClick}>
        <span className={`hamburger-line hamburger-top${hamburgerActive}`}>
          &nbsp;
        </span>
        <span className={`hamburger-line hamburger-mid${hamburgerActive}`}>
          &nbsp;
        </span>
        <span className={`hamburger-line hamburger-bot${hamburgerActive}`}>
          &nbsp;
        </span>
      </div>
      <ul className={`sidebar--container ${sidebarActive}`}>
        <li>
          <Link to="/" onClick={hamburgerClick}>
            MixologyBuddy
          </Link>
        </li>
        <li>
          <Link to="/mybar" onClick={hamburgerClick}>
            <img
              src={barBottlesIcon}
              className="sidebar-icons"
              alt="artist in studio"
            />{" "}
            <span className="list-span"> My Bar</span>
          </Link>
        </li>

        <li>
          <Link to="/myrecipes" onClick={hamburgerClick}>
            <img
              src={myRecipe}
              className="sidebar-icons"
              alt="artist in studio"
            />
            <span className="list-span">My Recipes</span>
          </Link>
        </li>
        <li>
          <Link to="/allrecipes" onClick={hamburgerClick}>
            <img
              src={allRecipesBookIcon}
              className="sidebar-icons"
              alt="artist in studio"
            />
            <span className="list-span">All Recipes</span>
          </Link>
        </li>
        <li>
          <Link to="/favorites" onClick={hamburgerClick}>
            <FaHeart />
            <span className="list-span"> Favorites</span>
          </Link>
        </li>
        <li>
          <Link to="/news" onClick={hamburgerClick}>
            <img
              src={newsIcon}
              className="sidebar-icons"
              alt="artist in studio"
            />{" "}
            <span className="list-span">News </span>
          </Link>
        </li>
        <li>
          <Link to="sales" onClick={hamburgerClick}>
            <GiShop /> <span className="list-span"> Sales</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
