import { Permissions } from '@/data/enums';

export type User = {
  username?: string;
  role?: string;
  permissions?: Permissions[];
};
