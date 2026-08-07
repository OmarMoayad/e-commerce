import React from 'react';
import Box from '@mui/material/Box';
import logo from "../../assets/logo.png";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import useAuthStore from "../../auth/useAuthStore";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";
import { Button } from "@mui/material";
import themeStore from "../../auth/useThemeStore";

export default function Navbar() {
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const { t } = useTranslation();
    const mode = themeStore((state)=> state.mode);
        const toggleTheme = themeStore((state)=> state.toggleTheme);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <Box component="nav" sx={{ display: "flex", alignItems: "center", gap: 2, p: 2, }}>
      <img src={logo} alt="logo" width={100} height={100} />
      <Link component={RouterLink} to="/" sx={{
        textDecoration: "none", color: "black", "&:hover": {
          color: "primary.main",
        }
      }}>{t("Home")}</Link>
      {token ? <>
        <Link component={RouterLink} to="/cart" sx={{
          textDecoration: "none", color: "black", "&:hover": {
            color: "primary.main",
          }
        }}>{t("Cart")}</Link>
        <Link onClick={handleLogout} sx={{
          textDecoration: "none", color: "black", "&:hover": {
            color: "primary.main",
          }
        }}>{t("Logout")}</Link>
      </> : <>
        <Link component={RouterLink} to="/login" sx={{
          textDecoration: "none", color: "black", "&:hover": {
            color: "primary.main",
          }
        }}>{t("Login")}</Link>
        <Link component={RouterLink} to="/register" sx={{
          textDecoration: "none", color: "black", "&:hover": {
            color: "primary.main",
          }
        }}>{t("Register")}</Link>
      </>}
      <Link component={RouterLink} to="/products" sx={{
        textDecoration: "none", color: "black", "&:hover": {
          color: "primary.main",
        }
      }}>{t("Shop")}</Link>
      <Button variant="contained" onClick={toggleLanguage}>
        {i18n.language === "en" ? t("Arabic") : t("English")}
      </Button>
            <Button variant="contained" onClick={toggleTheme}>
        {i18n.language === "light" ? t("Dark") : t("Light")}
      </Button>
    </Box>
  );
}