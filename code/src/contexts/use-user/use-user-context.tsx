import { FC, ReactNode, createContext, useContext, useState } from "react";
import {
  Admin,
  NoDevelopmentsUser,
  NoEditUser,
  NoInspirationUser,
} from "./data/dummy-users";
import { User } from "@/data/user";

type UserContextProps = {
  user?: User;
  logAsAdmin: () => void;
  logAsNoDevelopmentsUser: () => void;
  logAsNoEditUser: () => void;
  logAsNoInspirationUser: () => void;
};

const UserContext = createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>();

  const logAsAdmin = () => setUser(Admin);
  const logAsNoDevelopmentsUser = () => setUser(NoDevelopmentsUser);
  const logAsNoEditUser = () => setUser(NoEditUser);
  const logAsNoInspirationUser = () => setUser(NoInspirationUser);

  const provider = {
    user,
    logAsAdmin,
    logAsNoDevelopmentsUser,
    logAsNoEditUser,
    logAsNoInspirationUser,
  };

  return (
    <UserContext.Provider value={provider}>{children}</UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within an UserProvider");
  }
  return context;
};

export { UserProvider, useUserContext };
