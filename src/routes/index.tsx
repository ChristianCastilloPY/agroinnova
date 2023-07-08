import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import Login from "../views/Login/Login";
import Dashboard from "../views/Dashboard";
import SidebarLayout from "../layouts/AppBarLayout";
import Monitor from "../views/Monitor";
import Alerts from "../views/Alerts";
import Devices from "../views/Devices";
import Users from "../views/Users";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/app/"
        element={
          <PrivateRoute>
            <SidebarLayout />
          </PrivateRoute>
        }
      >
        <Route
          path="/app/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/app/monitor"
          element={
            <PrivateRoute>
              <Monitor />
            </PrivateRoute>
          }
        />
        <Route
          path="/app/alerts"
          element={
            <PrivateRoute>
              <Alerts />
            </PrivateRoute>
          }
        />
        <Route
          path="/app/devices"
          element={
            <PrivateRoute>
              <Devices />
            </PrivateRoute>
          }
        />
        <Route
          path="/app/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path="/app/login"
        element={
          <PublicRoute>
            <BaseLayout>
              <Login />
            </BaseLayout>
          </PublicRoute>
        }
      />
    </Routes>
  );
}

export default memo(AppRoutes);
