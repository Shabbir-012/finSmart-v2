import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    personal: {},
    address: {},
    family: {},
    nominee: {},
    documents: {},
  },
  reducers: {
    saveFormData: (state, action) => {
      state[action.payload.section] = action.payload.data;
    },
  },
});

export const { saveFormData } = formSlice.actions;
export default formSlice.reducer;
