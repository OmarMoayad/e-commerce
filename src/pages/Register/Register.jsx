import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axiosInstance from "../../API/axiosInstance";
import { registerSchema } from "../../validations/RegisterSchema";
import logoLight from "../../assets/logo.png";
import logoDark from "../../assets/logo-Darkmode.png";
import { useTranslation } from "react-i18next";
import CustomAlert from '../../components/Alert/Alert';
import themeStore from '../../auth/useThemeStore';

export default function Register() {
  const { t } = useTranslation();
  const mode = themeStore((state) => state.mode);
  const [serverErrors, setServerErrors] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: yupResolver(registerSchema) });

  const RegisterForm = async (data) => {
    try {
      const response = await axiosInstance.post(`/auth/Account/Register`, data);
      console.log(response);
      navigate("/login");
    } catch (err) {
      const rawErrors = err.response?.data?.errors;
      const normalized = Array.isArray(rawErrors)
        ? rawErrors
        : rawErrors && typeof rawErrors === 'object'
        ? Object.values(rawErrors).flat()
        : [err.response?.data?.message || 'An error occurred'];
      setServerErrors(normalized);
      setAlertOpen(true);
    }
  };

  return (
    <Box sx={{minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center", p: 3 }}>
      <Card elevation={0} sx={{ width: 450, borderRadius: 4, border: "1px solid", borderColor: "divider"}}>
        <CardContent sx={{ p: 5 }}>
          <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", mb: 4,}}>
            <Box component="img" src={mode === "dark" ? logoDark : logoLight} alt="Logo" sx={{width: 60, height: 60, mb: 2,}}/>

            <Typography variant="h4" fontWeight="bold">{t("REMIX")}</Typography>

            <Typography color="text.secondary" sx={{ mt: 1 }}>{t("Create your account")}</Typography>
          </Box>

          <CustomAlert
            open={alertOpen}
            setOpen={setAlertOpen}
            message={serverErrors?.length > 0 ? serverErrors.join(' | ') : ''}
            severity="error"
          />

          <Box component="form" onSubmit={handleSubmit(RegisterForm)}>
            <Typography variant="caption" sx={{fontWeight: "bold",letterSpacing: 2,}}>{t("USERNAME")}</Typography>

            <TextField fullWidth margin="normal" placeholder={t("Username")} {...register("userName")} error={!!errors.userName} helperText={errors.userName?.message}/>

            <Typography variant="caption" sx={{fontWeight: "bold",letterSpacing: 2,}}>{t("FULL NAME")}</Typography>

            <TextField fullWidth margin="normal" placeholder={t("Full Name")} {...register("fullName")} error={!!errors.fullName} helperText={errors.fullName?.message}/>

            <Typography variant="caption" sx={{fontWeight: "bold",letterSpacing: 2,}}>{t("EMAIL ADDRESS")}</Typography>

            <TextField fullWidth margin="normal" placeholder="name@example.com" {...register("email")} error={!!errors.email} helperText={errors.email?.message}/>

            <Typography variant="caption" sx={{fontWeight: "bold",letterSpacing: 2,}}>{t("PHONE NUMBER")}</Typography>

            <TextField fullWidth margin="normal" placeholder={t("Phone Number")} {...register("phoneNumber")}error={!!errors.phoneNumber}helperText={errors.phoneNumber?.message}/>
            
            <Typography variant="caption" sx={{fontWeight: "bold",letterSpacing: 2,}}>{t("PASSWORD")}</Typography>

            <TextField fullWidth margin="normal" type="password" placeholder={t("Password")} {...register("password")}error={!!errors.password}helperText={errors.password?.message}/>

            <Button fullWidth type="submit"variant="contained"disabled={isSubmitting}sx={{color: "white", mt: 4, py: 1.5, bgcolor: "black","&:hover": {bgcolor: "#222",}}}>
              {isSubmitting ? (<CircularProgress size={24} color="inherit"/>) : (t("CREATE ACCOUNT"))}
            </Button>
            <Button component={RouterLink} to="/login" fullWidth variant="outlined" sx={{mt: 2, py: 1.5, color: "text.primary", borderColor: "black", "&:hover": {borderColor: "black",bgcolor: "#f5f5f5",}}}    >{t("ALREADY HAVE AN ACCOUNT")}</Button>
          </Box>

          <Divider sx={{ mt: 5 }} />
        </CardContent>
      </Card>
    </Box>
  );
}