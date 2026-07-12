import { useQuery } from "@tanstack/react-query";
import { getRolesByOrg } from "@/api/roles";

export function useRoles() {
  return useQuery({
    queryKey: ["roles"],
    queryFn: getRolesByOrg,
  });
}