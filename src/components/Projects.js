import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
require("dotenv").config();

function getProjects() {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
  );
  myHeaders.append("Cookie", "_octo=GH1.1.43603389.1599104196; logged_in=no");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://api.github.com/user/repos", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
getProjects();
const projects = [
  {
    name: "Personal Website",
    id: 1,
    desc: "This is my personal website",
    url: "/",
  },
  {
    name: "Hawyar App",
    id: 2,
    desc: "This is my personal website",
    url: "/",
  },
  {
    name: "Steve App",
    id: 3,
    desc: "This is my personal website",
    url: "/",
  },
];
const Projects = () => {
  return (
    <div>
      {projects.map((el) => (
        <ProjectCard data={el} key={el.id} />
      ))}
    </div>
  );
};

export default Projects;
