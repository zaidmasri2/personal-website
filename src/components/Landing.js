import React from "react";
import "./util.css";
import "./Landing.css";
import photo from "../files/zaid.jpeg";

const Landing = () => {
  return (
    <div className="container dark__polygon dark__background">
      <div className="landing__wrapper">
        <div className="left__wrapper">
          <figure className="rect">
            <img className="image" src={photo}></img>
          </figure>
        </div>
        <div className="text__wrapper">
          <h1>Hey! I'm Zaid.</h1>
          <p>
            A software engineering student at
            <a href="https://www.manchester.edu/"> Manchester University.</a> I
            am currently looking for new oppertunites! Feel free to reach out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
