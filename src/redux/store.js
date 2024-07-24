// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import admissionsReducer from './slices/admissionsSlice';
import contactReducer from './slices/contactSlice';

const store = configureStore({
  reducer: {
    admissions: admissionsReducer,
    contact: contactReducer,
  },
});

export default store;
