import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { baseApi } from "../api/baseApi";

// local persist storage configuration
const persistConfig = {
  key: "root",
  version: 1,
  storage: storage,
  blacklist: [baseApi.reducerPath],
};

// session storage configuration
const sessionConfig = {
  key: "session",
  version: 1, // Change this to a number
  storage: storageSession,
};

// combine all the persist reducers (drop all reducers that you would like to store at localstorage)
const rootPersistReducers = combineReducers({
  userReducer,
});

// combine all the session reducers (drop all reducers that you would like to store at session storage)
const sessionReducers = combineReducers({
  userReducer,
});

// persist reducer
const persistedReducer = persistReducer(persistConfig, rootPersistReducers);

// session reducer
const sessionReducer = persistReducer(sessionConfig, sessionReducers);

//store configuration
const store = configureStore({
  reducer: {
    local: persistedReducer,
    session: sessionReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

export const persistor = persistStore(store);

setupListeners(store.dispatch);
