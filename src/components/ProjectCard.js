import React from "react";
import "./ProjectCard.css";
import "./util.css";

const ProjectCard = ({ data }) => {
  return (
    <div>
      <a href={data.html_url} className="repo__wrapper">
        <div className="card">
          <h3>{data.language}</h3>

          <h1>{data.name}</h1>

          <p>
            {data.description === null
              ? `Description coming soon!`
              : data.description}
          </p>
        </div>
      </a>
    </div>
  );
};
export default ProjectCard;
