/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactElement } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import empty from "is-empty";
import { useAuth } from "../context/AuthContext";

interface IPrivateRoute {
  children: ReactElement;
}

function PrivateRoute({ children }: IPrivateRoute) {
  const [params, setParams] = useSearchParams();
  const { userTokens } = useAuth();
  return !empty(userTokens) ? children : <Navigate to="/agroinnova/login" />;
}

export default PrivateRoute;
