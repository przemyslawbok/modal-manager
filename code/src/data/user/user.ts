import { Permission } from '@/data/enums';

export type User = {
  username?: string;
  role?: string;
  permissions?: Permission[];
};
