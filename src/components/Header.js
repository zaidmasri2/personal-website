import React from "react";
import "./Header.css";
import "./util.css";
import Pdf from "../files/resume.pdf";

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div>
          <a href="localhost:3000/" className="logo">
            ZAIDMASRI
          </a>
        </div>
        <div>
          <ul className="navbar__links">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <button className="resume__button">
                <a className="pdf__handle" href={Pdf} target="_blank">
                  Resume
                </a>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
