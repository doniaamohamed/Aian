// Search API Endpoints placeholder
import api from "../axios";

export const searchApi = {
  query: async (searchTerm: string) => {
    const response = await api.get("/search", { params: { q: searchTerm } });
    return response.data;
  },
};
