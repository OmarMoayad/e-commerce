import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@mui/material";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";
import useSendCode from '../../hooks/useSendCode';



export default function ForgotPassword() {
    const { mutate: sendCode } = useSendCode();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const handleSendCode = (data) => {
        sendCode(data.email);
        localStorage.setItem("email", data.email);
        navigate("/CodeVerification");
    };
    const { register, handleSubmit } = useForm();

    return (
        <Box sx={{ minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center", p: 3 }}>
            <Card sx={{ width: 450, borderRadius: 4, border: "1px solid", borderColor: "divider", }}>
                <CardContent sx={{ p: 5 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
                        <Box component="img" src={logo} alt="Logo" sx={{ width: 60, height: 60, mb: 2, }} />
                        <Typography color="text.secondary" sx={{ mt: 1 }}>{t("Don't worry, we've all been there")}</Typography>
                    </Box>
                    <Box component="form" onSubmit={handleSubmit(handleSendCode)}>
                        <Typography variant="caption">{t("EMAIL ADDRESS")}</Typography>
                        <TextField
                            {...register("email")}
                            type="email"
                            fullWidth
                            margin="normal"
                            placeholder="name@example.com"
                        />                        <Button type="submit" fullWidth variant="outlined" sx={{ mt: 2, py: 1.5, color: "text.primary", borderColor: "black", "&:hover": { borderColor: "black", bgcolor: "#f5f5f5", } }}>
                            {t("Send Code")}
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

