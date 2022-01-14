import { api } from "./api";

export const getContinent = async (continentId) => {
  const response = await api.get(`/continents/${continentId}`);

  return response.data;
};
