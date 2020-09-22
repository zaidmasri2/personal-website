import React, { useRef } from "react";
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
            <div>
              <a>About</a>
            </div>
            <li>
              <div>
                <a>Projects</a>
              </div>
            </li>
            <div>
              <a>Contact</a>
            </div>
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
