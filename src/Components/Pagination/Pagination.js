import React from "react";
import "./Pagination.css";

const Pagination = ({ recipesPerPage, totalRecipes, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination-nav">
      <ul className="pagination-list">
        {pageNumbers.map((number) => (
          <li key={number} className="page-">
            <a href="#" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
