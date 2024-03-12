import FilmsListReducer from "./features/FilmsList/filmsListSlice";
import { configureStore } from "@reduxjs/toolkit";
import filmDetailsSlice from "./features/FilmDetails/filmDetailsSlice";

const store = configureStore({
  reducer: {
    filmsList: FilmsListReducer,
    filmDetails: filmDetailsSlice,
  },
});

export default store;
