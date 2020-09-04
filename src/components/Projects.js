import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";

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
    <div>
      {data.map((item) => (
        <ProjectCard data={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
