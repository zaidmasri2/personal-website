import React from "react";
import "./util.css";
import "./About.css";
import photo from "../files/zaid.jpeg";

const About = () => {
  return (
    <div className="container dark__background light__polygon">
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#fff" }} className="heading__md">
          About
        </h2>
      </div>
      <div className="about__wrapper">
        <div className="right__about">
          <p>
            Hello! I'm Zaid, a software engineering studnet at
            <a href="https://www.manchester.edu/"> Manchester University</a>.
          </p>
          <p>
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between. My goal is to always
            build products that provide pixel-perfect, performant experiences.
          </p>
          <p>
            Shortly after graduating from Northeastern University, I joined the
            engineering team at Upstatement where I work on a wide variety of
            interesting and meaningful projects on a daily basis.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML & CSS</li>
            <li>Java</li>
            <li>SpringBoot</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
