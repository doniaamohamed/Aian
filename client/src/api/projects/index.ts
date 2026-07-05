// Projects API Endpoints placeholder
import api from "../axios";

export const projectsApi = {
  getProjects: async () => {
    const response = await api.get("/projects");
    return response.data;
  },
  getProjectDetails: async (id: string) => {
    const response = await api.get(`/projects/${id}`);
    return response.data;
  },
};
