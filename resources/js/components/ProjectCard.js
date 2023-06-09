import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, description, imageUrl, githubLink } = project;

  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={githubLink}>Github Repo</a>
      </div>
    </div>
  );
};

export default ProjectCard;