import React from "react";
import "./util.css";
import "./Landing.css";
import Button from "./Button";
import photo from "../files/zaid.jpeg";

const Landing = () => {
  return (
    <div className="container">
      <div className="landing__wrapper">
        <div className="text__wrapper">
          <h1 className="jumbo__header">Hello world! My name is Zaid 👋🏼</h1>
          <p className="subtext__header">
            A passionate software engineering student at
            <a href="https://www.manchester.edu/"> Manchester University.</a>
            <br />I will be graduating December, 2020. I am looking for
            opportunities to make professonal, performant, and helpful software.
            <br />
            <div className="contact__wrapper">
              <h4 className="contact">
                Feel free to contact me if I can be any help!
              </h4>

              <Button
                onclick="window.location.href='mailto:zaidmasri2@gmail.com';"
                primary
              />
            </div>
          </p>
        </div>
        <div className="rect">
          <div>
            <img className="image" src={photo}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
