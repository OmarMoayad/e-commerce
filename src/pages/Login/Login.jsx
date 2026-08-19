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
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t } = useTranslation();
  const [serverErrors, setServerErrors] = useState({});
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: yupResolver(loginSchema) });
  const setToken = useAuthStore((state) => state.setToken);

  const LoginForm = async (data) => {
    try {
      const response = await axiosInstance.post(`/auth/Account/Login`, data);
      setToken(response.data.accessToken);
      navigate("/");
    } catch (err) {
      setServerErrors(err.response.data.errors);
    }
  };
  return (
    <Box sx={{ minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center", p: 3 }}>
      <Card elevation={0} sx={{ width: 450, borderRadius: 4, border: "1px solid", borderColor: "divider", }}>
        <CardContent sx={{ p: 5 }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
            <Box component="img" src={logo} alt="Logo" sx={{ width: 60, height: 60, mb: 2, }} />

            <Typography variant="h4" fontWeight="bold">{t("REMIX")}</Typography>

            <Typography color="text.secondary" sx={{ mt: 1 }}>{t("Welcome back")}</Typography>
          </Box>

          {serverErrors?.length > 0 && serverErrors.map((error, index) => (<Typography key={index} color="error" sx={{ mb: 1 }}>{error}</Typography>))}

          <Box component="form" onSubmit={handleSubmit(LoginForm)}>
            <Typography variant="caption" sx={{ fontWeight: "bold", letterSpacing: 2, }}>{t("EMAIL ADDRESS")}</Typography>

            <TextField fullWidth margin="normal" placeholder="name@example.com"{...register("email")} error={!!errors.email} helperText={errors.email?.message} />

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2, }}>
              <Typography variant="caption" sx={{ fontWeight: "bold", letterSpacing: 2, }}>{t("PASSWORD")}</Typography>

              <Link component={RouterLink} to="/ForgotPassword" underline="hover" color="text.primary" fontSize={12}>{t("Forgot Password?")}</Link>
            </Box>

            <TextField fullWidth margin="normal" type="password"{...register("password")} error={!!errors.password} helperText={errors.password?.message} />

            <Button fullWidth type="submit" variant="contained" disabled={isSubmitting} sx={{ color: "white", mt: 4, py: 1.5, bgcolor: "black", "&:hover": { bgcolor: "#222", }, }}>
              {isSubmitting ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                t("LOGIN")
              )}
            </Button>

            <Button component={RouterLink} to="/register" fullWidth variant="outlined" sx={{ mt: 2, py: 1.5, color: "text.primary", borderColor: "black", "&:hover": { borderColor: "black", bgcolor: "#f5f5f5", } }}>
              {t("CREATE ACCOUNT")}
            </Button>
          </Box>

          <Divider sx={{ mt: 5 }} />
        </CardContent>
      </Card>
    </Box>
  );
}