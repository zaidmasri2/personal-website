import React from "react";
import "./Header.css";
import "./util.css";
import Pdf from "../files/resume.pdf";

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div>
          <h1 className="logo">ZM</h1>
        </div>
        <div>
          <li className="navbar__links">
            <a href="/">
              <li>Projects</li>
            </a>
            <a href="/about">
              <li>About</li>
            </a>
            <a href="/contact">
              <li>Contact</li>
            </a>
            <a href={Pdf} target="_blank" className="resume__button">
              Resume
            </a>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Header;
