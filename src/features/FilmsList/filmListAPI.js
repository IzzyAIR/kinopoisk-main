import API from "../../requester";

export const getFilmBySearchAPI = async (search) => {
  const response = await API.get("api/v2.1/films/search-by-keyword", {
    params: { keyword: search },
  });

  return response.data;
};
