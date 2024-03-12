import API from "../../requester";

export const getStaff = async (filmId) => {
  try {
    const response = await API.get(`api/v1/staff?filmId=${filmId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching staff data:", error);
    throw error;
  }
};
