import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import useProfile from "../../hooks/useProfile";
import { useTranslation } from "react-i18next";

export default function ProfileInfo() {
  const { data } = useProfile();
  const {t} = useTranslation();

  return (
    <Box sx={{ maxWidth: 700,mt: 4, mx:"auto"}}>
      <Card elevation={0} sx={{ border: "1px solid",borderColor: "divider",borderRadius: 3,}}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h5" fontWeight="bold" mb={4}>{t("profile")}</Typography>
          <Box sx={{ mb: 3 }}>
            <Typography variant="caption" color="text.secondary" sx={{textTransform: "uppercase",letterSpacing: 1,}}>
              {t("fullName")}
            </Typography>
            <Typography variant="h6">{data?.fullName}</Typography>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Box sx={{ mb: 3 }}>
            <Typography variant="caption" color="text.secondary" sx={{textTransform: "uppercase",letterSpacing: 1,}}>
              {t("email")}
            </Typography>
            <Typography variant="h6">{data?.email}
            </Typography>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Box>
            <Typography variant="caption" color="text.secondary" sx={{textTransform: "uppercase",letterSpacing: 1,}}>
              {t("phoneNumber")}
            </Typography>
            <Typography variant="h6">{data?.phoneNumber}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}