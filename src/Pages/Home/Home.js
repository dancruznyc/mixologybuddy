import React from "react";
import "./Home.css";
import banner from "../../Assets/cocktailbannerad.jpeg";

const Home = () => {
  return (
    <div className="home--container">
      <div className="home--content">
        <div className="welcome-header">
          <div className="welcome-user">Welcome Daniel</div>
          <div className="header-icons">icons</div>
        </div>
        <div className="advertisement">
          <img src={banner}></img>
        </div>
        <section className="section--1">
          <div className="my-bar"></div>
          <div className="my-faves"></div>
          <div className="my-recipes"></div>
        </section>
        <section className="section--1">
          <div className="new-recipes"></div>
          <div className="featured-recipes"></div>
          <div className="friends-recipes"></div>
        </section>
      </div>
    </div>
  );
};

export default Home;
