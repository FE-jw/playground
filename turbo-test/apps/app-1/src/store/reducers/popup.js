import {createSlice} from '@reduxjs/toolkit';

export const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    isOpen: false,
  },
  reducers: {
    open: state => {
      state.isOpen = true;
    },
    close: state => {
      state.isOpen = false;
    },
  },
});

export const {open, close} = popupSlice.actions;
export default popupSlice.reducer;
