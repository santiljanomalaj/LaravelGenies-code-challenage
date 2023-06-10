import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loggerMiddleware from 'redux-logger';

import developerReducer from './reducers/developerReducers';
import projectReducer from './reducers/projectReducers';

const rootReducer = combineReducers({
  developerReducer,
  projectReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, loggerMiddleware)
  )
);

export default store;