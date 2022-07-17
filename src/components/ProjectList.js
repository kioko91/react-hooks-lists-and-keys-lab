import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectDetails = projects.map(detailsProject => {
    return <ProjectItem
    key = {detailsProject.id}
    name = {detailsProject.name} 
    about={detailsProject.about} 
    technologies={detailsProject.technologies}/>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectDetails}</div>
    </div>
  );
}


export default ProjectList;
