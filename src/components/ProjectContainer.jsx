import React from 'react';
import Project from './Project'; 
import projectData from '../data/projectData';

function ProjectsContainer() {
  return (
    <div className='projects-container'>
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