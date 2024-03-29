import { createStore, applyMiddleware, combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk'
import Auth from './Auth';
import Feed from './Feed'
import Audio from './Audio'
import Create from './Create'
import Profile from './Profile'


const INITIAL_STATE = {};

const middleware = [thunk];

const persistConfig = {
    key: 'primary',
    storage: AsyncStorage,
    /*
      This is useful for being able to update reducer in production
      Read more: https://blog.reactnativecoach.com/the-definitive-guide-to-redux-persist-84738167975
    */
    stateReconciler: autoMergeLevel2,
    whitelist: ['profile'],
    blacklist: ['auth', 'feed', 'create', 'audio']
}

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['CognitoUser'] // only CognitoUser will be persisted
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, Auth),
  feed: Feed,
  audio: Audio,
  create: Create,
  profile: Profile,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    INITIAL_STATE,
    applyMiddleware(...middleware)
)

const persistor = persistStore(store);

export { store, persistor } ;