import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  AiFillAndroid,
  AiFillApple,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section className="footer--container">
      <ul className="footer-links">
        <li className="li footer-link--item">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="li footer-link--item">
          <Link to={"/help"}> Help</Link>
        </li>

        <li className="li footer-link--item">
          <Link to={"/agreement"}>User Agreement</Link>
        </li>

        <li className="li footer-link--item">
          <Link to={"/privacy"}> Privacy</Link>
        </li>
        <li className="li footer-link--item">
          <Link to={"/"}> Mixology Buddy &copy; 2023</Link>
        </li>
      </ul>
      <div className="footer-icons">
        <div className="mobile-icons">
          <AiFillAndroid />
          <AiFillApple />
        </div>
        <div className="social-icons">
          <AiOutlineTwitter />
          <AiFillFacebook />
          <AiFillInstagram />
        </div>
      </div>
    </section>
  );
};

export default Footer;
