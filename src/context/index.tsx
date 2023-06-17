import React, { ReactNode } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AuthProvider } from "./AuthContext";
import { SidebarProvider } from "./SidebarContext";
import { LoadingRequestProvider } from "./BackdropLoaderContext";

interface IAppProviders {
  children: ReactNode;
}

export default function AppProviders({ children }: IAppProviders) {
  return (
    <AuthProvider>
      <LoadingRequestProvider>
        <SidebarProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            {children}
          </LocalizationProvider>
        </SidebarProvider>
      </LoadingRequestProvider>
    </AuthProvider>
  );
}
