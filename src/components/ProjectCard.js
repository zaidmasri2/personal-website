import React from "react";
import "./ProjectCard.css";
import "./util.css";

const ProjectCard = ({ data }) => {
  console.log(data.name);
  return (
    <div className="container">
      <a href={data.html_url}>
        <h1>{data.name}</h1>
      </a>
    </div>
  );
};

export default ProjectCard;
