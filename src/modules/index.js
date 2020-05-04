import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
/* Reducers */
import Auth from './Auth';
import LocalStorage from './LocalStorage';
import Audio from './Audio';

const INITIAL_STATE = {};

const middleware = [thunk];

const rootReducer = combineReducers({
  auth: Auth,
  local: LocalStorage,
  audio: Audio,
});

export const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(...middleware))