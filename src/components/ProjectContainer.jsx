import React from 'react';
import Project from './project'; 
import projectData from '../data/projectData';

function ProjectsContainer() {
  return (
    <div>
      {projectData.map((project) => (
        <Project
          key={project.id} 
          name={project.name}
          image={project.image}
          deployedUrl={project.deployedUrl}
          githubUrl={project.githubUrl}
        />
      ))}
    </div>
  );
}

export default ProjectsContainer;