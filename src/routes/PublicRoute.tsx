import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface IPublicRoute {
  children: ReactElement;
}

function PublicRoute({ children }: IPublicRoute) {
  const {
    userTokens: { token },
  } = useAuth();

  return token ? <Navigate to="/" /> : children;
}

export default PublicRoute;
