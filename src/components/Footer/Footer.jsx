import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box component="footer" sx={{ mt: 8, py: 4, borderTop: "1px solid", borderColor: "divider", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, }}>
      <Box component="img" src={logo} alt="Logo" sx={{ height: 45, width: "auto", }} />

      <Typography variant="body2" sx={{ color: "text.primary", textAlign: "center" }}>
        © {new Date().getFullYear()} {t("Remix Store")} | {t("All rights reserved.")}
      </Typography>
    </Box>
  );
}