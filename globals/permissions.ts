import { User, UserPermission } from "./types/user.type";

export const PERMISSIONS = {
  CMS_CONTENT_READ: "cms.content.read",
  CMS_CONTENT_WRITE: "cms.content.write",
  CMS_ASSETS_READ: "cms.assets.read",
  CMS_ASSETS_WRITE: "cms.assets.write",
  CMS_PROJECTS_READ: "cms.projects.read",
  CMS_PROJECTS_WRITE: "cms.projects.write",
  CMS_SERVICES_READ: "cms.services.read",
  CMS_SERVICES_WRITE: "cms.services.write",
  COMMAND_CENTER_APPS_LAUNCH: "command-center.apps.launch",
} as const satisfies Record<string, UserPermission>;

export function getEffectivePermissions(user?: User | null): UserPermission[] {
  return [...new Set(user?.permissions ?? [])];
}

export function hasPermission(
  user: User | null | undefined,
  permission: UserPermission,
): boolean {
  return getEffectivePermissions(user).includes(permission);
}
