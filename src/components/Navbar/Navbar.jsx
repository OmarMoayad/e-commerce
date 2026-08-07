import React, { useState } from "react";
import { AppBar,Toolbar, Container, Box, Link, IconButton, Button, Drawer, List, ListItemButton, ListItemText, useMediaQuery,} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import useAuthStore from "../../auth/useAuthStore";
import themeStore from "../../auth/useThemeStore";
import { useTranslation } from "react-i18next";
import Links from "../Links/Links";
import i18n from "../../i18next";

export default function Navbar() {

  const mode = themeStore((state) => state.mode);
  const toggleTheme = themeStore((state) => state.toggleTheme);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const token = useAuthStore((state) => state.token);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };


  return (
    <>
      <AppBar position="sticky" elevation={0} color="inherit" sx={{ borderBottom: "1px solid", borderColor: "rgba(72, 72, 72, 0.10)", }} >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              height: 80,
              justifyContent: "space-between",
            }}
          >

            <Box component={RouterLink} to="/">
              <img src={logo} alt="Logo" style={{ height: 30 }} />
            </Box>
            {!mobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
                <Links />
              </Box>
            )}

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, width: 180, justifyContent: "flex-end", }}>
              <IconButton component={RouterLink} to="/profile">
                <PersonOutlineOutlinedIcon />
              </IconButton>
              <Button onClick={toggleLanguage} sx={{ minWidth: 40, color: "text.primary", }}> {i18n.language === "en" ? "AR" : "EN"} </Button>

              <IconButton onClick={toggleTheme}>{mode === "light" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}</IconButton>

              {mobile && (
                <IconButton onClick={() => setOpen(true)}>
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 260 }}>
          <ListItemButton component={RouterLink} to="/" onClick={() => setOpen(false)}>
            <ListItemText primary={t("Home")} />
          </ListItemButton>

          <ListItemButton component={RouterLink} to="/products" onClick={() => setOpen(false)}>
            <ListItemText primary={t("Shop")} />
          </ListItemButton>

          {token && (
            <ListItemButton component={RouterLink} to="/cart" onClick={() => setOpen(false)}>
              <ListItemText primary={t("Cart")} />
            </ListItemButton>
          )}

          {!token ? (
            <>
              <ListItemButton component={RouterLink} to="/login" onClick={() => setOpen(false)}>
                <ListItemText primary={t("Login")} />
              </ListItemButton>

              <ListItemButton component={RouterLink} to="/register" onClick={() => setOpen(false)}>
                <ListItemText primary={t("Register")} />
              </ListItemButton>
            </>
          ) : (
            <ListItemButton onClick={() => { handleLogout(); setOpen(false); }}>
              <ListItemText primary={t("Logout")} />
            </ListItemButton>
          )}
        </List>
      </Drawer>
    </>
  );
}