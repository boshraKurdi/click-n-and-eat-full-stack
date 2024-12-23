import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";

import { TLoading } from '@customtypes/loading'
import { TCategoryProperty } from '@customtypes/category'
import { isString } from "@customtypes/guard";
interface ICategoriesState {
  data: TCategoryProperty;
  loading: TLoading;
  error: string | null;
}

const initialState: ICategoriesState = {
  data: null,
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    categoriesRecordsCleanUp: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actGetCategories };
export const { categoriesRecordsCleanUp } = categoriesSlice.actions;
export default categoriesSlice.reducer;
