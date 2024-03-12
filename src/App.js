import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./store";
import FilmsList from "./features/FilmsList/FilmsList";
import FilmDetails from "./features/FilmDetails/FilmDetails";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FilmsList />} />
          <Route path="/films/:id" element={<FilmDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
