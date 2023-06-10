import { CREATE_PROJECT, READ_PROJECTS, READ_PROJECT, UPDATE_PROJECT, DELETE_PROJECT } from '../actions/projectActions';

const initialState = {
  projects: [],
  currentProject: null
};

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PROJECT:
      return { ...state, projects: [...state.projects, action.payload] };
    case READ_PROJECTS:
      return { ...state, projects: action.payload };
    case READ_PROJECT:
      return { ...state, currentProject: action.payload };
    case UPDATE_PROJECT:
      const updatedProjects = state.projects.map(proj => {
        if (proj.id === action.payload.id) {
          return { ...proj, ...action.payload };
        } else {
          return proj;
        }
      });
      return { ...state, projects: updatedProjects };
    case DELETE_PROJECT:
      const filteredProjects = state.projects.filter(proj => proj.id !== action.payload);
      return { ...state, projects: filteredProjects };
    default:
      return state;
  }
}