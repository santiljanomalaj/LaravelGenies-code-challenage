import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

// Action types
export const CREATE_DEVELOPER = 'CREATE_DEVELOPER';
export const READ_DEVELOPERS = 'READ_DEVELOPERS';
export const READ_DEVELOPER = 'READ_DEVELOPER';
export const UPDATE_DEVELOPER = 'UPDATE_DEVELOPER';
export const DELETE_DEVELOPER = 'DELETE_DEVELOPER';

// Action creators

// ---------------------------------

//@POST: Create Developer

export function createDeveloper(developer) {
  return dispatch => {
    axios.post(`${BASE_URL}/developers/`, developer)
      .then(response => {
        dispatch({
          type: CREATE_DEVELOPER,
          payload: response.data
        });
      })
      .catch(error => console.log(error));
  };
}

//@GET: Get Developers

export function readDevelopers() {
  return dispatch => {
    axios.get(`${BASE_URL}/developers/`)
      .then(response => {
        dispatch({
          type: READ_DEVELOPERS,
          payload: response.data
        });
      })
      .catch(error => console.log(error));
  };
}

//@POST: Get Developer by using ID(Priviate)

export function readDeveloper(id) {
  return dispatch => {
    console.log("readDeveloper", id);
    axios.get(`${BASE_URL}/developers/${id}`)
      .then(response => {
        dispatch({
          type: READ_DEVELOPER,
          payload: response.data
        });
      })
      .catch(error => console.log(error));
  };
}

//@PATCH: Update Developer

export function updateDeveloper(id, updates) {
  return dispatch => {
    axios.patch(`${BASE_URL}/developers/${id}`, updates)
      .then(response => {
        dispatch({
          type: UPDATE_DEVELOPER,
          payload: response.data
        });
      })
      .catch(error => console.log(error));
  };
}


//@DELETE: Delete Developer

export function deleteDeveloper(id) {
  return dispatch => {
    axios.delete(`${BASE_URL}/developers/${id}`)
      .then(response => {
        dispatch({
          type: DELETE_DEVELOPER,
          payload: id
        });
      })
      .catch(error => console.log(error));
  };
}