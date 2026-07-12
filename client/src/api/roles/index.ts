import { api } from "@/api/axios";
import { OrgRole } from "@/types/roles";

export async function getRolesByOrg(): Promise<OrgRole[]> {
  const response = await api.get<{ success: boolean; data: OrgRole[] }>(
    "/roles-permissions/organization"
  );
  return response.data.data;
}