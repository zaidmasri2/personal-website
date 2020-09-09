import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import "./util.css";

const Projects = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.github.com/users/zaidmasri2/repos"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2 className="heading__md">Projects</h2>
      <div className="projects__wrapper">
        {data.map((item) => (
          <ProjectCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
