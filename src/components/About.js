import React from "react";
import "./util.css";
import "./About.css";

const About = () => {
  return (
    <div className="container ">
      <div>
        <h2 className="heading__md">About</h2>
        <h5 className="subtitle__md">
          Find out who I am, where I'm from and what I'm all about
        </h5>
      </div>
      <div className="about__wrapper">
        <p>
          I am currently wrapping up my Bachelors of Science in Software
          Engineering in North Manchester, IN. I enjoy solving problems, whether
          that be fixing a car or finding a bug in my code. My goal is to be the
          ultimate proffesional by building detail oriented, abstract, and
          performant experiences. <br />
          Here are some technologies that I currently work with:
          <ul>
            <li> JavaScript (ES6+)</li>
            <li> Java 11 LTS</li>
            <li> React </li>
            <li> Node.js</li>
            <li> Express</li>
            <li> GraphQL</li>
          </ul>
        </p>
      </div>
    </div>
  );
};
export default About;
