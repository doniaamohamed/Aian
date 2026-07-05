// Knowledge API Endpoints placeholder
import api from "../axios";

export const knowledgeApi = {
  getSources: async () => {
    const response = await api.get("/knowledge/sources");
    return response.data;
  },
  getMemories: async () => {
    const response = await api.get("/knowledge/memories");
    return response.data;
  },
};
