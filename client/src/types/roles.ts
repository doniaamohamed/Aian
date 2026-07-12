export interface RoleUser {
  id: string;
  fullName: string;
  email: string;
}

export interface OrgRole {
  id: string;
  key: string;
  name: string;
  organizationId: string | null;
  isSystemRole: boolean;
  users: RoleUser[];
}