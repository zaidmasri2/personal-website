import React from "react";
import "./util.css";
import "./Landing.css";
import photo from "../files/zaid.jpeg";

const Landing = () => {
  return (
    <div className="container dark__polygon dark__background">
      <div className="landing__wrapper">
        <div className="left__wrapper">
          <div className="rect">
            <img className="image" src={photo}></img>
          </div>
        </div>
        <div className="right__wrapper">
          <h1>Hey! I'm Zaid.</h1>
          <h2>
            A software engineering student at
            <a href="https://www.manchester.edu/"> Manchester University</a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Landing;
