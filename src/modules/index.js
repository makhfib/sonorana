import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
/* Reducers */
import Auth from './Auth';
import LocalStorage from './LocalStorage';
import Audio from './Audio';

const INITIAL_STATE = {};

const middleware = [thunk];

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['CognitoUser']
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, Auth),
  local: LocalStorage,
  audio: Audio,
});

export const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(...middleware))