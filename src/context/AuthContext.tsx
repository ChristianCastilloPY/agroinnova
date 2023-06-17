import {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { IUserLogin } from "../models/IUserLogin";
import queryClient from "../services/queryClient";

export interface IUserTokens {
  token: string;
}

interface IAuthContextData {
  user: IUserLogin;
  userTokens: IUserTokens;
  setTokensForUser: (tokens: IUserTokens) => void;
  setDataOfUser: (data: IUserLogin) => void;
  logout: () => void;
}

interface IAuthContext {
  children: ReactElement;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: IAuthContext) {
  const [user, setUser] = useState<IUserLogin>({} as IUserLogin);
  const [userTokens, setUserTokens] = useState<IUserTokens>({} as IUserTokens);

  const setTokensForUser = useCallback(
    (tokens: IUserTokens) => {
      setUserTokens(tokens);
      window.localStorage.setItem("token", JSON.stringify(tokens));
    },
    [setUserTokens]
  );

  const setDataOfUser = useCallback(
    (data: IUserLogin) => {
      setUser(data);
    },
    [setUser]
  );

  const logout = useCallback(() => {
    setTokensForUser({} as IUserTokens);
    setUser({} as IUserLogin);
    queryClient.clear();
  }, [setTokensForUser, setUser]);

  const value = useMemo(
    () => ({
      user,
      userTokens,
      setTokensForUser,
      setDataOfUser,
      logout,
    }),
    [user, userTokens, setTokensForUser, setDataOfUser, logout]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
