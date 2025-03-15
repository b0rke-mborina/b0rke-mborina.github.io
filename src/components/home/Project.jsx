import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specificQuerry = "https://api.github.com/repos/b0rke-mborina/";

const Project = ({ heading, username, length, specific }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc&per_page=100&page=1`;
  const dummyProjectsArr = new Array(length + specific.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    try {
      // fetch all repos
      const response = await axios.get(allReposAPI);
      const allRepos = response.data;
      
      // filter specific repos
      let repoList = [];
      specific.forEach(specificRepoName => {
        for (let i = 0; i < allRepos.length; i++) {
          if (allRepos[i].name === specificRepoName) {
            repoList.push(allRepos[i]);
            break;
          }
        }
      });
  
      // update state
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, specific]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
              />
            ))
            : dummyProjectsArr.map((project, index) => (
              <ProjectCard
                key={`dummy-${index}`}
                id={`dummy-${index}`}
                value={project}
              />
            ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
