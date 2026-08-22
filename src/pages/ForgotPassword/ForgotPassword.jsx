import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@mui/material";
import logoLight from "../../assets/logo.png";
import logoDark from "../../assets/logo-Darkmode.png";
import { useTranslation } from "react-i18next";
import useSendCode from '../../hooks/useSendCode';
import CustomAlert from '../../components/Alert/Alert';
import themeStore from '../../auth/useThemeStore';

export default function ForgotPassword() {
    const { mutate: sendCode } = useSendCode();
    const { t } = useTranslation();
    const mode = themeStore((state) => state.mode);
    const navigate = useNavigate();
    const [alertState, setAlertState] = useState({ open: false, message: "", severity: "success" });
    const { register, handleSubmit, formState: { isSubmitting } } = useForm();

    const handleSendCode = (data) => {
        sendCode(data.email, {
            onSuccess: () => {
                localStorage.setItem("email", data.email);
                setAlertState({
                    open: true,
                    message: t("Verification code sent successfully"),
                    severity: "success"
                });
                setTimeout(() => {
                    navigate("/CodeVerification");
                }, 1500);
            },
            onError: (error) => {
                setAlertState({
                    open: true,
                    message: error.response?.data?.message || t("Failed to send code"),
                    severity: "error"
                });
            }
        });
    };

    return (
        <Box sx={{ minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center", p: 3 }}>
            <Card sx={{ width: 450, borderRadius: 4, border: "1px solid", borderColor: "divider", }}>
                <CardContent sx={{ p: 5 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
                        <Box component="img" src={mode === "dark" ? logoDark : logoLight} alt="Logo" sx={{ width: 60, height: 60, mb: 2, }} />
                        <Typography color="text.secondary" sx={{ mt: 1 }}>{t("Don't worry, we've all been there")}</Typography>
                    </Box>

                    <CustomAlert
                        open={alertState.open}
                        setOpen={(val) => setAlertState((prev) => ({ ...prev, open: val }))}
                        message={alertState.message}
                        severity={alertState.severity}
                    />

                    <Box component="form" onSubmit={handleSubmit(handleSendCode)}>
                        <Typography variant="caption">{t("EMAIL ADDRESS")}</Typography>
                        <TextField {...register("email")} type="email" required fullWidth margin="normal" placeholder="name@example.com" />
                        <Button type="submit" disabled={isSubmitting} fullWidth variant="outlined" sx={{ mt: 2, py: 1.5, color: "text.primary", borderColor: "black", "&:hover": { borderColor: "black", bgcolor: "#f5f5f5", } }}>
                            {isSubmitting ? <CircularProgress size={24} color="inherit" /> : t("Send Code")}
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}


