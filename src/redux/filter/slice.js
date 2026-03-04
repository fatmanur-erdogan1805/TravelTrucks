import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  AC: false,
  transmission: "",
  form: "",
  Kitchen: false,
  TV: false,
  Bathroom: false,
  microwave: false,
  gas: false,
  radio: false,
  refrigerator: false,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    clearFilters: () => initialState,
    updateFilters(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    applyFilters(state, action) {
      state = { ...initialState, ...action.payload };
    },
  },
});

export const { applyFilters, clearFilters, updateFilters } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
