// Chat API Endpoints placeholder
import api from "../axios";

export const chatApi = {
  sendMessage: async (message: string, threadId?: string) => {
    const response = await api.post("/chat", { message, threadId });
    return response.data;
  },
  getThreads: async () => {
    const response = await api.get("/chat/threads");
    return response.data;
  },
};
