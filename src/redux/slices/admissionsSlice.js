// src/redux/slices/admissionsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const admissionsSlice = createSlice({
  name: 'admissions',
  initialState: {
    forms: [],
  },
  reducers: {
    addForm: (state, action) => {
      state.forms.push(action.payload);
    },
  },
});

export const { addForm } = admissionsSlice.actions;
export default admissionsSlice.reducer;
