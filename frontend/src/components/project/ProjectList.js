import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteProject, readProjects } from '../../redux/actions/projectActions';

const ProjectList = ({ projects, readProjects, deleteProject }) => {

  useEffect(() => {
    readProjects();
  }, [readProjects]);

  const onDeleteClick = id => {

    deleteProject(id);
    
    alert("Project is deleted succesfully");

  };


  return (
    <div className="container">
      <h1>Projects</h1>

      <Link to="/projects/new" className="btn btn-primary mt-5 mb-5">New</Link>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(proj => (
            <tr key={proj.id}>
              <td>{proj.title}</td>
              <td>{proj.description}</td>
              <td>
                <Link to={`/projects/${proj.id}/edit`} className="btn btn-primary">Edit</Link>{' '}
                <button onClick={() => onDeleteClick(proj.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  projects: state.projectReducer.projects
});

export default connect(mapStateToProps, { readProjects, deleteProject})(ProjectList);