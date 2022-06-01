/* eslint-disable import/no-extraneous-dependencies */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/auth';
import referralReducer from './reducers/referral';


const rootReducer = combineReducers({
  auth: authReducer,
  referral: referralReducer,
});

export const configureStore = () => createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);
