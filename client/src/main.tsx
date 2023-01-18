import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import authReducer from "./state";
import { configureStore} from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = { key: "root", storage, version: 1};
const persistedReducer = persistReducer(persistConfig, authReducer);

const ignoreActions = ["persist/" + FLUSH, "persist/" + REHYDRATE, "persist/" + PAUSE, "persist/" + PERSIST, "persist/" + PURGE, "persist/" + REGISTER] as const;

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: true,
    },
  }),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistStore(store)}>
       <App />
       </PersistGate>
    </Provider>
  </React.StrictMode>,
)