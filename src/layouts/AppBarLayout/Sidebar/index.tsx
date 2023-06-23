/* eslint-disable @typescript-eslint/no-use-before-define */
import { memo } from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  Divider,
  Drawer,
  Box,
  Typography,
} from "@mui/material";
import {
  QueryStats as QueryStatsIcon,
  Logout as LogoutIcon,
  Group as GroupIon,
  ImportantDevices as ImportantDevicesIcon,
  PrivacyTip as PrivacyTipIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
// import { useAuth } from '../../../../context/Auth'
import { createSearchParams, useNavigate } from "react-router-dom";
import { useSidebar } from "../../../context/SidebarContext";
import Logo from "../../../assets/img/Agroinnova_two_color.svg";
import { useAuth } from "../../../context/AuthContext";
import user from "../../../mockdata/userLogin";

const TopSection = styled(Box)(
  () => `
      display: flex;
      justify-content: center;
      height: 88px;
      align-items: center;
      margin: 0 10px 10px;
      border-bottom: #f2f5f9 solid 1px;
`
);

interface IListItemsProps {
  label: string;
  path: string | undefined;
  icon: JSX.Element | undefined;
  idOperation?: string;
}

const menuItems = [
  {
    type: "menu",
    icon: <QueryStatsIcon />,
    label: "Monitoreo",
    path: "/agroinnova/monitor",
    role: ["SUPER_ADMIN", "ADMIN_CLIENT", "USER_CLIENT"],
  },
  // {
  //   type: "divider",
  //   label: "Administrar",
  //   role: ["SUPER_ADMIN", "ADMIN_CLIENT", "USER_CLIENT"],
  // },
  {
    type: "menu",
    icon: <ImportantDevicesIcon />,
    label: "Dispositivos",
    path: "/agroinnova/devices",
    role: ["SUPER_ADMIN"],
  },
  {
    type: "divider",
    label: "Alertas",
    role: ["ADMIN_CLIENT", "USER_CLIENT"],
  },
  {
    type: "menu",
    icon: <PrivacyTipIcon />,
    label: "Alertas",
    path: "/agroinnova/alerts",
    role: ["SUPER_ADMIN"],
  },
  {
    type: "menu",
    icon: <GroupIon />,
    label: "Usuarios",
    path: "/agroinnova/users",
    role: ["SUPER_ADMIN", "ADMIN_CLIENT"],
  },
];

function SidebarMenu() {
  const { sidebarToggle, toggleSidebar } = useSidebar();
  // const { user, logout } = useAuth();
  const { logout } = useAuth();
  const closeSidebar = () => toggleSidebar();
  const navigate = useNavigate();

  const listItem = ({ label, path, icon, idOperation }: IListItemsProps) => (
    <ListItem key={label} disablePadding>
      {/* <ListItemButton onClick={() => navigate(path || '/agroinnova/')}> */}
      <ListItemButton
        onClick={() => {
          if (idOperation) {
            return navigate({
              pathname: path || "/agroinnova/",
              search: createSearchParams({
                id: idOperation,
                resource: label,
              }).toString(),
            });
          }
          return navigate(path || "/agroinnova/");
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );

  const bottomMenuItems = [
    {
      role: ["SUPER_ADMIN", "ADMIN_CLIENT", "USER_CLIENT"],
      type: "menu",
      icon: <SettingsIcon />,
      label: "Mi perfil",
      action: () => navigate("/agroinnova/profile"),
    },
    {
      role: ["SUPER_ADMIN", "ADMIN_CLIENT", "USER_CLIENT"],
      type: "menu",
      icon: <LogoutIcon />,
      label: "Cerrar sesión",
      action: () => logout(),
    },
  ];

  const list = () => (
    <Box
      sx={{
        width: 250,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      role="presentation"
      onClick={closeSidebar}
      onKeyDown={closeSidebar}
    >
      <TopSection>
        <img src={Logo} alt="Agroinnova - Paraguay" width={100} />
      </TopSection>
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map(({ label, icon, path, type, role }) => {
          if (type === "divider" && role?.includes(user.rolName)) {
            return (
              <div key={`${label}${type}`}>
                <Divider sx={{ mb: 3 }} />
                <Typography
                  key={`label-${label}`}
                  variant="subtitle2"
                  sx={{ m: "10px 0 10px 20px", justifyContent: "center" }}
                >
                  {label}
                </Typography>
              </div>
            );
          }
          return (
            role?.includes(user.rolName) && listItem({ label, path, icon })
          );
        })}
      </List>
      <List>
        {bottomMenuItems.map(({ label, icon, action, type, role }) =>
          type === "divider" ? (
            <Divider key={`${label}${type}`} />
          ) : (
            role.includes(user.rolName) && (
              <ListItem key={label} disablePadding>
                <ListItemButton onClick={action}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            )
          )
        )}
      </List>
    </Box>
  );
  return (
    <Drawer
      anchor="left"
      open={sidebarToggle}
      onClose={closeSidebar}
      variant="temporary"
      elevation={5}
    >
      {list()}
    </Drawer>
  );
}

export default memo(SidebarMenu);
