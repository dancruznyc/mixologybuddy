import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul className="sidebar--container">
      <li>
        <Link to="/">MixologyBuddy</Link>
      </li>
      <li>
        <Link to="/mybar">My Bar</Link>
      </li>
      <li>
        {" "}
        <Link to="/favorites">Favorites</Link>
      </li>
      <li>
        <Link to="/myrecipes">My Recipes</Link>
      </li>
      <li>
        <Link to="/allrecipes">All Recipes</Link>
      </li>
      <li>
        <Link to="/news">News</Link>
      </li>
      <li>
        <Link to="sales">Sales</Link>
      </li>
    </ul>
  );
};

export default Sidebar;
