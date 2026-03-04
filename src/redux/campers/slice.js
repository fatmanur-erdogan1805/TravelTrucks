import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

export const INITIAL_STATE_campers = {
  campers: {
    items: [],
    loading: false,
    error: null,
    visibleItems: 4,
  },
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const handlePending = (state) => {
  state.campers.loading = true;
};

const handleRejected = (state, action) => {
  state.campers.loading = false;
  state.campers.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: INITIAL_STATE_campers,
  reducers: {
    clearCampers: (state) => {
      state.campers.items = [];
      state.campers.loading = false;
      state.campers.error = null;
    },
    loadMoreCampers: (state) => {
      state.campers.visibleItems += 3; 
    },
    resetVisibleItems: (state) => {
      state.campers.visibleItems = 4; 
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (favCamper) => favCamper.id !== action.payload.id
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.campers.loading = false;
        state.campers.error = null;
        state.campers.items = action.payload;
      })
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const {
  clearCampers,
  addToFavorites,
  removeFromFavorites,
  loadMoreCampers,
  resetVisibleItems,
} = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
