import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  details: {},
  isLoading: false,
  error: {},
};

export const getFilmDetails = createAsyncThunk(
  "filmDetails/getFilmDetails",
  async (filmId) => {
    const response = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`,
      {
        headers: {
          "X-API-KEY": "b7ac83f4-1ce9-44c4-a096-cb71b0c41bf0",
        },
      }
    );
    return response.data;
  }
);

const filmDetailsSlice = createSlice({
  name: "filmDetails",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getFilmDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFilmDetails.fulfilled, (state, action) => {
      console.log("action: ", action);
      state.isLoading = false;
      state.details = action.payload;
    });
    builder.addCase(getFilmDetails.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export default filmDetailsSlice.reducer;
