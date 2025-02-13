// store.js
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './reducers/counter';
import popupReducer from './reducers/popup';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    popup: popupReducer,
  },
});
