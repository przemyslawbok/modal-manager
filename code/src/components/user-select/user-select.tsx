import { useUserContext } from "@/contexts/use-user";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { FC } from "react";
import { Roles } from "@/data/enums/roles";

export const UserSelect: FC = () => {
  const {
    user,
    logAsAdmin,
    logAsNoDevelopmentsUser,
    logAsNoEditUser,
    logAsNoInspirationUser,
  } = useUserContext();

  const handleChange = (event: SelectChangeEvent) => {
    switch (event.target.value as Roles) {
      case Roles.Admin:
        logAsAdmin();
        break;
      case Roles.NoDevelopmentsUser:
        logAsNoDevelopmentsUser();
        break;
      case Roles.NoInspirationUser:
        logAsNoInspirationUser();
        break;
      case Roles.NoEditUser:
        logAsNoEditUser();
        break;
      default:
        return;
    }
  };

  return (
    <Select value={user?.role || ""} onChange={handleChange}>
      <MenuItem value={Roles.Admin}>Admin</MenuItem>
      <MenuItem value={Roles.NoDevelopmentsUser}>NoDevelopmentsUser</MenuItem>
      <MenuItem value={Roles.NoInspirationUser}>NoInspirationUser</MenuItem>
      <MenuItem value={Roles.NoEditUser}>NoEditInspirationUser</MenuItem>
    </Select>
  );
};
