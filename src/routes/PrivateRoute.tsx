/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactElement } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface IPrivateRoute {
  children: ReactElement;
}

function PrivateRoute({ children }: IPrivateRoute) {
  const [params, setParams] = useSearchParams();
  const idParams = params.get("id") ?? undefined;
  const {
    userTokens: { token },
    user,
  } = useAuth();

  if (idParams) {
    return token && user.operations?.includes(idParams) ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  }
  return token ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
