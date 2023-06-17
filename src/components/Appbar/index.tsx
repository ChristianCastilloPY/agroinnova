import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Toolbar,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  Tooltip,
  Avatar,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import { Outlet } from "react-router-dom";

import logo from "../../assets/img/logo-white.png";
import image from "../../assets/img/avatar1.jpeg";
import AppbarController from "./AppbarController";
import ItemsSidebar from "./ItemsSidebar";
import items from "./items";

export default function MiniDrawer() {
  const theme = useTheme();

  const {
    AppBar,
    DrawerHeader,
    Drawer,
    open,
    handleDrawerOpen,
    handleDrawerClose,
  } = AppbarController();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Configuración" arrow>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Leonardo Medina" src={image} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <ItemsSidebar items={items} open={open} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <DrawerHeader />
        <div className="sub-container">
          <Outlet />
        </div>
      </Box>
    </Box>
  );
}
