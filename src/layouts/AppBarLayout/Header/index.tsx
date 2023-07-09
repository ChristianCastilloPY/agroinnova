import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/img/agroinnova_white.svg";
import { useAuth } from "../../../context/AuthContext";
// import user from "../../../mockdata/userLogin";

function ResponsiveAppBar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const settings = [
    {
      title: "Mi Perfil",
      action: () => navigate("/profile"),
      role: ["SUPER_ADMIN", "ADMIN_CLIENT", "USER_CLIENT"],
    },
    {
      title: "Dashboard",
      action: () => navigate("/"),
      role: ["SUPER_ADMIN", "ADMIN_CLIENT", "USER_CLIENT"],
    },
    {
      title: "Cerrar Sesión",
      action: () => logout(),
      role: ["SUPER_ADMIN", "ADMIN_CLIENT", "USER_CLIENT"],
    },
  ];

  const { user } = useAuth();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const rol = user.rolName;

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ height: "75px", justifyContent: "center", zIndex: "1" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/dashboard"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            <img src={Logo} alt="Logo Agroinnova" width="110" />
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={Logo} width={120} alt="Logo Agroinnova responsive" />
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Opciones">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Stack direction="column" alignItems="end">
                  <Typography
                    variant="body2"
                    mr={2}
                    color="white"
                  >{`${user.fName} ${user.lName}`}</Typography>
                  <Typography
                    variant="caption"
                    mr={2}
                    color="white"
                    fontSize={{ xs: "0.4rem", sm: "0.75rem" }}
                  >
                    {rol} - {user.email}
                  </Typography>
                </Stack>
                <Avatar
                  alt={`${user.fName} ${user.lName}`}
                  src={user.urlImage}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(
                (setting) =>
                  setting.role.includes(user.rolName) && (
                    <MenuItem
                      key={setting.title}
                      onClick={() => {
                        setting.action();
                        handleCloseUserMenu();
                      }}
                    >
                      <Typography textAlign="center">
                        {setting.title}
                      </Typography>
                    </MenuItem>
                  )
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
