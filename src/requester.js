import axios from "axios";

export const API_KEY = `b7ac83f4-1ce9-44c4-a096-cb71b0c41bf0`;

const API = axios.create({
  baseURL: "https://kinopoiskapiunofficial.tech/",
});

API.defaults.headers["X-API-KEY"] = API_KEY;

export default API;
