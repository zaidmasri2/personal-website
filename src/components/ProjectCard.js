import React from "react";
import "./ProjectCard.css";
import "./util.css";

const ProjectCard = ({ data }) => {
  return (
    <div className="container">
      <h1> {data.name}</h1>
      <span> {data.desc}</span>
      <span> {data.url}</span>
    </div>
  );
};

export default ProjectCard;
