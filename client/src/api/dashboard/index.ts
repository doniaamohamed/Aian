import { api } from "@/api/axios";
import { DashboardOwnerData } from "@/types/dashboard";

export async function getOwnerDashboard(): Promise<DashboardOwnerData | null> {
  try {
    const response = await api.get<{ success: boolean; data: DashboardOwnerData }>(
      "/dashboard/owner"
    );
    return response.data.data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      return null;
    }
    throw error;
  }
}