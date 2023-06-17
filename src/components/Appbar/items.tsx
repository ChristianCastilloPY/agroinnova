import React from "react";

import {
  AutoGraph as AutoGraphIcon,
  FindInPage as FindInPageIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

const items = [
  {
    type: "item",
    rol: ["admin"],
    item: {
      name: "Dashboard",
      path: "/dashboard",
      icon: <AutoGraphIcon />,
    },
  },
  {
    type: "item",
    rol: ["admin"],
    item: {
      name: "Consulta de peticiones",
      path: "/request",
      icon: <FindInPageIcon />,
    },
  },
  {
    type: "separator",
  },
  {
    type: "item",
    rol: ["admin"],
    item: {
      name: "Configuración",
      path: "/settings",
      icon: <SettingsIcon />,
    },
  },
];
export default items;
