// Reports API Endpoints placeholder
import api from "../axios";

export const reportsApi = {
  getReports: async () => {
    const response = await api.get("/reports");
    return response.data;
  },
  getReportById: async (id: string) => {
    const response = await api.get(`/reports/${id}`);
    return response.data;
  },
};
