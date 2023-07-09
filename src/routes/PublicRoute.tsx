import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import empty from "is-empty";
import { useAuth } from "../context/AuthContext";

interface IPublicRoute {
  children: ReactElement;
}

function PublicRoute({ children }: IPublicRoute) {
  const { userTokens } = useAuth();
  return empty(userTokens) ? children : <Navigate to="/agroinnova/login" />;
}

export default PublicRoute;
