import React from 'react';
import '../styles/project.css';

function Project({ name, image, deployedUrl, githubUrl }) {
  return (
    <div className="Project">
      <img className='project-img' src={image} alt={name} />
      <div className="project-info">
        <h3 className='project-heading'>{name}</h3>
        <button 
          className='btn-project' 
          onClick={() => window.open(deployedUrl, '_blank', 'noopener,noreferrer')}
        >
          Deployed App
        </button>
        <button 
          className='btn-project' 
          onClick={() => window.open(githubUrl, '_blank', 'noopener,noreferrer')}
        >
          GitHub Repo
        </button>
      </div>
    </div>
  );
}

export default Project;