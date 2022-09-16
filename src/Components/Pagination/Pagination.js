import React from "react";
import "./Pagination.css";

const Pagination = ({
  recipesPerPage,
  totalRecipes,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }
  let isActive = "";
  return (
    <nav className="pagination-nav">
      <ul className={`pagination-list`}>
        {pageNumbers.map((number) => {
          console.log(currentPage);
          if (currentPage === number) isActive = "active";
          else isActive = "";
          return (
            <li key={number} className={`page- ${isActive}`}>
              <a href="#" onClick={() => paginate(number)}>
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
