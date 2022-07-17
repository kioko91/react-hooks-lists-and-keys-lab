import React from "react";

function ProjectItem({ name, about, technologies }) {

  const eachTech = technologies.map(techs => <span key={techs}>{techs}</span>)

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {eachTech}
      </div>
    </div>
  );
}

export default ProjectItem;
