import { Permissions } from "@/data/enums";
import { User } from "@/data/user/user";

export const Admin: User = {
  username: "Admin",
  role: "admin",
  permissions: [
    Permissions.ViewDevelopments,
    Permissions.ViewInspiration,
    Permissions.AddMoodboards,
    Permissions.AddResources,
  ],
};

export const NoDevelopmentsUser: User = {
  username: "No Developments",
  role: "no-dev",
  permissions: [
    Permissions.ViewInspiration,
    Permissions.AddMoodboards,
    Permissions.AddResources,
  ],
};

export const NoEditUser: User = {
  username: "No Edit Inspiration",
  role: "no-edit",
  permissions: [Permissions.ViewDevelopments, Permissions.ViewInspiration],
};

export const NoInspirationUser: User = {
  username: "No Inspiration",
  role: "no-inspiration",
  permissions: [Permissions.ViewDevelopments],
};
