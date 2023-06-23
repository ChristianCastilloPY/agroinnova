import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface IPublicRoute {
  children: ReactElement;
}

function PublicRoute({ children }: IPublicRoute) {
  // const {
  //   userTokens: { token },
  // } = useAuth();
  const token = "123";

  return token !== null ? <Navigate to="/agroinnova/dashboard" /> : children;
}

export default PublicRoute;
