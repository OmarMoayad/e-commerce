import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import axiosInstance from '../../API/axiosInstance';
import { yupResolver } from "@hookform/resolvers/yup"
import { resetPasswordSchema } from '../../validations/ResetPasswordSchema';
import useAuthStore from '../../auth/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Divider, Link, } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import logoLight from "../../assets/logo.png";
import logoDark from "../../assets/logo-Darkmode.png";
import { useTranslation } from "react-i18next";
import useResetPassword from '../../hooks/useResetPassword';
import CustomAlert from '../../components/Alert/Alert';
import themeStore from '../../auth/useThemeStore';

export default function NewPassword() {
    const { t } = useTranslation();
    const mode = themeStore((state) => state.mode);
    const navigate = useNavigate();
    const { mutate: resetPassword } = useResetPassword();
    const [alertState, setAlertState] = useState({ open: false, message: "", severity: "success" });

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: yupResolver(resetPasswordSchema) });

    const onNewPasswordSubmit = (data) => {
        const code = localStorage.getItem("code");
        const email = localStorage.getItem("email");
        const resetPasswordData = {
            code,
            newPassword: data.newPassword,
            email
        };

        resetPassword(resetPasswordData, {
            onSuccess: () => {
                setAlertState({
                    open: true,
                    message: t("Password reset successfully"),
                    severity: "success"
                });
                setTimeout(() => {
                    navigate("/login");
                }, 1500);
            },
            onError: (error) => {
                setAlertState({
                    open: true,
                    message: error.response?.data?.message || t("Failed to reset password"),
                    severity: "error"
                });
            }
        });
    };
    return (
        <Box sx={{ minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center", p: 3 }}>
            <Card elevation={0} sx={{ width: 450, borderRadius: 4, border: "1px solid", borderColor: "divider", }}>
                <CardContent sx={{ p: 5 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
                        <Box component="img" src={mode === "dark" ? logoDark : logoLight} alt="Logo" sx={{ width: 60, height: 60, mb: 2, }} />

                        <Typography color="text.secondary" sx={{ mt: 1 }}>{t("Reset Password")}</Typography>
                    </Box>

                    <CustomAlert
                        open={alertState.open}
                        setOpen={(val) => setAlertState((prev) => ({ ...prev, open: val }))}
                        message={alertState.message}
                        severity={alertState.severity}
                    />


                    <Box component="form" onSubmit={handleSubmit(onNewPasswordSubmit)} >
                        <Typography variant="caption" sx={{ fontWeight: "bold", letterSpacing: 2, }}>{t("New Password")}</Typography>

                        <TextField fullWidth margin="normal" type="password"{...register("newPassword")} error={!!errors.newPassword} helperText={errors.newPassword?.message} />

                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2, }}>
                            <Typography variant="caption" sx={{ fontWeight: "bold", letterSpacing: 2, }}>{t("confirm password")}</Typography>
                        </Box>

                        <TextField fullWidth margin="normal" type="password"{...register("password")} error={!!errors.password} helperText={errors.password?.message} />

                        <Button fullWidth type="submit" variant="contained" disabled={isSubmitting} sx={{ color: "white", mt: 4, py: 1.5, bgcolor: "black", "&:hover": { bgcolor: "#222", }, }}>
                            {isSubmitting ? (
                                <CircularProgress size={24} color="inherit" />
                            ) : (
                                t("confirm")
                            )}
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}