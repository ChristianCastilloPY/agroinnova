/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactElement } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface IPrivateRoute {
  children: ReactElement;
}

function PrivateRoute({ children }: IPrivateRoute) {
  // const [params, setParams] = useSearchParams();
  // const idParams = params.get("id") ?? undefined;
  // const {
  //   userTokens: { token },
  //   user,
  // } = useAuth();
  // const idParams = "333";
  const token = "123";

  // if (idParams) {
  //   return token ? children : <Navigate to="/agroinnova" />;
  // }
  return token === null ? <Navigate to="/agroinnova/login" /> : children;
}

export default PrivateRoute;
