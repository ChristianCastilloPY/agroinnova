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
        path="/"
        element={
          <PrivateRoute>
            <SidebarLayout />
          </PrivateRoute>
        }
      >
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/monitor"
          element={
            <PrivateRoute>
              <Monitor />
            </PrivateRoute>
          }
        />
        <Route
          path="/alerts"
          element={
            <PrivateRoute>
              <Alerts />
            </PrivateRoute>
          }
        />
        <Route
          path="/devices"
          element={
            <PrivateRoute>
              <Devices />
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path="/login"
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
