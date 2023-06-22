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
        path="/agroinnova"
        element={
          <PublicRoute>
            <SidebarLayout />
          </PublicRoute>
        }
      >
        <Route
          path="/agroinnova"
          element={
            <PublicRoute>
              <Dashboard />
            </PublicRoute>
          }
        />
        <Route
          path="/agroinnova/monitor"
          element={
            <PublicRoute>
              <Monitor />
            </PublicRoute>
          }
        />
        <Route
          path="/agroinnova/alerts"
          element={
            <PublicRoute>
              <Alerts />
            </PublicRoute>
          }
        />
        <Route
          path="/agroinnova/devices"
          element={
            <PublicRoute>
              <Devices />
            </PublicRoute>
          }
        />
        <Route
          path="/agroinnova/users"
          element={
            <PublicRoute>
              <Users />
            </PublicRoute>
          }
        />
      </Route>
      <Route
        path="/agroinnova/login"
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
