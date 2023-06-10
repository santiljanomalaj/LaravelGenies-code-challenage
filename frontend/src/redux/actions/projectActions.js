import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

// Action types
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const READ_PROJECTS = 'READ_PROJECTS';
export const READ_PROJECT = 'READ_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';

// Action creators

//------------------------

//@POST: Create Project
export function createProject(project) {
  return dispatch => {
    axios.post(`${BASE_URL}/projects`, project)
      .then(response => {
        dispatch({
          type: CREATE_PROJECT,
          payload: response.data
        });
      })
      .catch(error => console.log(error));
  };
}

//@GET: Get Projects

export function readProjects() {
  return dispatch => {
    axios.get(`${BASE_URL}/projects`)
      .then(response => {
        dispatch({
          type: READ_PROJECTS,
          payload: response.data
        });
      })
      .catch(error => console.log(error));
  };
}

//@GET: Create Project by using ID

export function readProject(id) {
  return dispatch => {
    axios.get(`${BASE_URL}/projects/${id}`)
      .then(response => {
        dispatch({
          type: READ_PROJECT,
          payload: response.data
        });
      })
      .catch(error => console.log(error));
  };
}

//@PATCH: Update Project

export function updateProject(id, updates) {
  return dispatch => {
    axios.patch(`${BASE_URL}/projects/${id}`, updates)
      .then(response => {
        dispatch({
          type: UPDATE_PROJECT,
          payload: response.data
        });
      })
      .catch(error => console.log(error));
  };
}

//@DELETE: Delete Project

export function deleteProject(id) {
  return dispatch => {
    axios.delete(`${BASE_URL}/projects/${id}`)
      .then(response => {
        dispatch({
          type: DELETE_PROJECT,
          payload: id
        });
      })
      .catch(error => console.log(error));
  };
}