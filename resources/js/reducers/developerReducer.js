import { FETCH_DEVELOPERS, CREATE_DEVELOPER, UPDATE_DEVELOPER, DELETE_DEVELOPER } from '../types/developer';

const initialState = {
  developers: []
};

const developerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEVELOPERS:
      return {
        ...state,
        developers: action.payload
      };
    case CREATE_DEVELOPER:
      return {
        ...state,
        developers: [...state.developers, action.payload]
      };
    case UPDATE_DEVELOPER:
      return {
        ...state,
        developers: state.developers.map(developer => {
          if (developer.id === action.payload.id) {
            return action.payload;
          }
          return developer;
        })
      };
    case DELETE_DEVELOPER:
      return {
        ...state,
        developers: state.developers.filter(developer => developer.id !== action.payload)
      };
    default:
      return state;
  }
};

export default developerReducer;