import { createAsyncThunk } from "@reduxjs/toolkit";

export const clearCampers = createAsyncThunk("campers/clear", async () => {
  return [];
});
