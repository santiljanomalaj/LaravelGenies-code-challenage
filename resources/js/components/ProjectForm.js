import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProject, updateProject } from '../actions/project';

const ProjectForm = ({ project, onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(project ? project.title : '');
  const [description, setDescription] = useState(project ? project.description : '');
  const [deadline, setDeadline] = useState(project ? project.deadline : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (project) {
      dispatch(updateProject(project.id, title, description, deadline));
    } else {
      dispatch(createProject(title, description, deadline));
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title: </label>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label htmlFor="description">Description: </label>
      <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

      <label htmlFor="deadline">Deadline: </label>
      <input type="date" id="deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} />

      <button type="submit">{project ? 'Update' : 'Create'}</button>
      <label htmlFor="deadline">Deadline: </label>
      <input type="date" id="deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} />

      <button type="submit">{project ? 'Update' : 'Create'}</button>
      </form>
);
};

export default ProjectForm;
