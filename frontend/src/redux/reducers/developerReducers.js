import { CREATE_DEVELOPER, READ_DEVELOPERS, READ_DEVELOPER, UPDATE_DEVELOPER, DELETE_DEVELOPER } from '../actions/developerActions';

const initialState = {
  developers: [],
  currentDeveloper: null
};

export default function developerReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_DEVELOPER:
      return { ...state, developers: [...state.developers, action.payload] };
    case READ_DEVELOPERS:
      return { ...state, developers: action.payload };
    case READ_DEVELOPER:
      return { ...state, currentDeveloper: action.payload };
    case UPDATE_DEVELOPER:
      const updatedDevelopers = state.developers.map(dev => {
        if (dev.id === action.payload.id) {
          return { ...dev, ...action.payload };
        } else {
          return dev;
        }
      });
      return { ...state, developers: updatedDevelopers };
    case DELETE_DEVELOPER:
      const filteredDevelopers = state.developers.filter(dev => dev.id !== action.payload);
      return { ...state, developers: filteredDevelopers };
    default:
      return state;
  }
}

