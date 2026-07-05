// Auth API Endpoints placeholder
import api from "../axios";

type Credentials = { email: string; password: string };
  type AuthResponse = { token: string; user: any };

export const authApi = {

  login: async (credentials: Credentials): Promise<AuthResponse> => {
    const response = await api.post("/auth/login", credentials);
    return response.data;
  },
  logout: async () => {
    const response = await api.post("/auth/logout");
    return response.data;
  },
  getMe: async () => {
    const response = await api.get("/auth/me");
    return response.data;
  },
};
