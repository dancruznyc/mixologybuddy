import React from "react";
import "./Home.css";
import mojitosvid from "../../Assets/Preppingmojitos.mp4";
import pinkcocktail from "../../Assets/pinkcocktail.mp4";
import mixologybuddy from "../../Assets/BarIcons/bartenderheadicon.svg";

const Home = () => {
  return (
    <div className="home--container">
      <div className="header--container">
        <h1 className="header--title">MixologyBuddy</h1>
        <div className="header-image--container">
          <img src={mixologybuddy} alt="mixologybuddy logo" />
        </div>
      </div>

      <section className="section-1">
        <div className="section-1--left">
          <div className="">
            <p>A Mixologist</p>
            <p>In Your</p>
            <p>Pocket.</p>
          </div>
        </div>
        <div className="section-1--right">
          <div className="section-1--right__top"></div>
          <div className="section-1--right__bottom">
            <div className="section-1--video_container">
              <video
                src={mojitosvid}
                autoPlay
                loop
                muted
                className="section-1--video"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="section-2--content">
          <div className="section-2--left">
            <p>Create Your Virtual Bar</p>
          </div>
          <div className="section-2--right">
            <p>Get Curated Recipes</p>
          </div>
        </div>
      </section>
      <section className="section-3">
        <div className="section-3--left">
          <div className="section-3--left__top"></div>
          <div className="section-3--left__bottom">
            <div className="section-3--video_container">
              <video
                src={pinkcocktail}
                autoPlay
                loop
                muted
                className="section-1--video"
              />
            </div>
          </div>
        </div>
        <div className="section-3--right">
          <div className="section-3--right_container">
            <p>Discover</p>
            <p>New</p>
            <p>Drinks</p>
          </div>
        </div>
      </section>
      <section className="section-4">
        <div className="section-4--content">
          <p>Entertain Your Friends</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
