import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const INITIAL_STATE = {};

const middleware = [thunk];

export const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(...middleware))