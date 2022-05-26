/* eslint-disable import/no-extraneous-dependencies */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { elementsReducer } from './elements';
import { authenticationReducer } from './auth';

const rootReducer = combineReducers({
  auth: authenticationReducer,
});

export const configureStore = () => createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);
