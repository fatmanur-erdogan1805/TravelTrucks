export const selectCampers = (state) => state.campersData.campers.items;
export const selectVisibleCampers = (state) =>
  state.campersData.campers.visibleItems;
export const selectFavorites = (state) => state.campersData.favorites || [];
export const selectLoading = (state) => state.campersData.campers.loading;
export const selectError = (state) => state.campersData.campers.error;
