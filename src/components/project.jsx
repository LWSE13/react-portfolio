import React from 'react';
function Project({ name, image, deployedUrl, githubUrl }) {
  return (
    <div className="project">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Deployed App</a>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
}

export default Project;