import { Roles, Permission } from '@/data/enums';
import { User } from '@/data/user';

export const Admin: User = {
  username: 'Admin',
  role: Roles.Admin,
  permissions: [
    Permission.ViewDevelopments,
    Permission.ViewInspiration,
    Permission.AddMoodboards,
    Permission.AddResources,
  ],
};

export const NoDevelopmentsUser: User = {
  username: 'No Developments',
  role: Roles.NoDevelopmentsUser,
  permissions: [
    Permission.ViewInspiration,
    Permission.AddMoodboards,
    Permission.AddResources,
  ],
};

export const NoEditUser: User = {
  username: 'No Edit Inspiration',
  role: Roles.NoEditUser,
  permissions: [Permission.ViewDevelopments, Permission.ViewInspiration],
};

export const NoInspirationUser: User = {
  username: 'No Inspiration',
  role: Roles.NoInspirationUser,
  permissions: [Permission.ViewDevelopments],
};
