import { Roles, Permissions } from '@/data/enums';
import { User } from '@/data/user';

export const Admin: User = {
  username: 'Admin',
  role: Roles.Admin,
  permissions: [
    Permissions.ViewDevelopments,
    Permissions.ViewInspiration,
    Permissions.AddMoodboards,
    Permissions.AddResources,
  ],
};

export const NoDevelopmentsUser: User = {
  username: 'No Developments',
  role: Roles.NoDevelopmentsUser,
  permissions: [
    Permissions.ViewInspiration,
    Permissions.AddMoodboards,
    Permissions.AddResources,
  ],
};

export const NoEditUser: User = {
  username: 'No Edit Inspiration',
  role: Roles.NoEditUser,
  permissions: [Permissions.ViewDevelopments, Permissions.ViewInspiration],
};

export const NoInspirationUser: User = {
  username: 'No Inspiration',
  role: Roles.NoInspirationUser,
  permissions: [Permissions.ViewDevelopments],
};