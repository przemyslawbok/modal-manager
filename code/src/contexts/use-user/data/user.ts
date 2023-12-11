import { Permissions } from './permissions';

export type User = {
  username?: string;
  role?: string;
  permissions?: Permissions[];
};