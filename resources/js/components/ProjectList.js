import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

class ProjectList extends Component {
  render() {
    const { projects } = this.props;

    return (
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    );
  }
}

export default ProjectList;