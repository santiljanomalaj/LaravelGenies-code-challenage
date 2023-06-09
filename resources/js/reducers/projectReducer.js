import { FETCH_PROJECTS, CREATE_PROJECT, UPDATE_PROJECT, DELETE_PROJECT } from '../types/project';

const initialState = {
  projects: []
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    case CREATE_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };
    case UPDATE_PROJECT:
      return {
        ...state,
        projects: state.projects.map(project => {
          if (project.id === action.payload.id) {
            return action.payload;
          }
          return project;
        })
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.payload)
      };
    default:
      return state;
  }
};

export default projectReducer;