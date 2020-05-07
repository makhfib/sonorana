import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
//import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native'
/* Reducers */
import Auth from './Auth';
import Profile from './Profile';
import Audio from './Audio';

const INITIAL_STATE = {};

const middleware = [thunk];

const persistConfig = {
  key: 'primary',
  storage: AsyncStorage,
}

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['CognitoUser']
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, Auth),
  profile: Profile,
  audio: Audio,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer, 
  INITIAL_STATE, 
  applyMiddleware(...middleware)
)

const persistor = persistStore(store);

export { store, persistor } ;