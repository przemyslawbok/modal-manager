import { Permissions } from '../enums/permissions';

export type User = {
  username?: string;
  role?: string;
  permissions?: Permissions[];
};