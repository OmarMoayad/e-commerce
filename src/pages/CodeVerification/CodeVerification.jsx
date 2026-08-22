import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import axiosInstance from '../../API/axiosInstance';
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from '../../validations/LoginSchema';
import { useState } from 'react';
import useAuthStore from '../../auth/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Divider, Link, } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import logoLight from "../../assets/logo.png";
import logoDark from "../../assets/logo-Darkmode.png";
import { useTranslation } from "react-i18next";
import themeStore from '../../auth/useThemeStore';

export default function CodeVerification() {
  const { t } = useTranslation();
  const mode = themeStore((state) => state.mode);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("code", data.code);
    navigate("/NewPassword");
  }
  return (
    <Box sx={{ minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center", p: 3 }}>
      <Card elevation={0} sx={{ width: 450, borderRadius: 4, border: "1px solid", borderColor: "divider", }}>
        <CardContent sx={{ p: 5 }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
            <Box component="img" src={mode === "dark" ? logoDark : logoLight} alt="Logo" sx={{ width: 60, height: 60, mb: 2, }} />
            <Typography color="text.secondary" sx={{ mt: 1, fontWeight: "bold", fontSize: 15 }}>{t("code verification")}</Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="caption" sx={{ fontWeight: "bold", letterSpacing: 2, }}>{t("CODE")}</Typography>
            <TextField fullWidth margin="normal" placeholder="1234"{...register("code")} error={!!errors.code} helperText={errors.code?.message} />

            <Button fullWidth type="submit" variant="contained" disabled={isSubmitting} sx={{ color: "white", mt: 4, py: 1.5, bgcolor: "black", "&:hover": { bgcolor: "#222", }, }}>
              {isSubmitting ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                t("SUBMIT")
              )}
            </Button>
          </Box>

        </CardContent>
      </Card>
    </Box>
  );
}