import { useUserContext } from "@/contexts/use-user";
import { Button } from "@mui/material";
import { FC } from "react";
import { StyledDiv } from "./header.styled";

export const Header: FC = () => {
  const {
    logAsAdmin,
    logAsNoDevelopmentsUser,
    logAsNoEditUser,
    logAsNoInspirationUser,
  } = useUserContext();

  return (
    <StyledDiv>
      <Button onClick={logAsAdmin}>Admin</Button>
      <Button onClick={logAsNoDevelopmentsUser}>No Developments</Button>
      <Button onClick={logAsNoEditUser}>No Edit</Button>
      <Button onClick={logAsNoInspirationUser}>No Inspiration</Button>
    </StyledDiv>
  );
};
