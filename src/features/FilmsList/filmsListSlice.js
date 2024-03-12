import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../requester";
import { getFilmBySearchAPI } from "./filmListAPI";

const initialState = {
  list: [],
  isLoading: false,
  // counter: 0,s
  error: {},
};

export const getFilms = createAsyncThunk("filmsList/getFilms", async () => {
  const response = await API.get("api/v2.2/films/top", {
    params: { type: "TOP_100_POPULAR_FILMS" },
  });
  return response.data;
});
export const getFilmBySearch = createAsyncThunk(
  "filmsList/getFilmsBySearch",
  getFilmBySearchAPI
);

const filmsListSlice = createSlice({
  name: "filmsList",
  initialState,
  // reducers: {
  //   increment: (state) => {
  //     state.counter += 1;
  //   },
  //   decrement: (state) => {
  //     state.counter -= 1;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(getFilms.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFilms.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload.films;
    });
    builder.addCase(getFilms.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });

    builder.addCase(getFilmBySearch.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getFilmBySearch.fulfilled, (state, action) => {
      console.log("action: ", action);
      state.isLoading = false;
      state.list = action.payload.films;
    });
  },
});

// export const { increment, decrement } = filmsListSlice.actions;

export default filmsListSlice.reducer;
