import React from "react";
import { Box, Typography, TextField, Button, } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Alert from "../Alert/Alert";
import { useNavigate } from "react-router-dom";


export default function Stayuptodate() {
    const { t } = useTranslation();

    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("success");

    const navigate = useNavigate();
    const handleSendMessage = (e) => {
        if (e) e.preventDefault();
        setAlertMessage(t("Subscribe successfully!"));
        setAlertType("success");
        setAlertOpen(true);
    };


    return (
        <Box sx={{ minHeight: "40vh", display: "flex", justifyContent: "center", alignItems: "center", px: 2 }}>
            <Box sx={{ width: "100%", maxWidth: 650, textAlign: "center", }}>
                <Alert open={alertOpen} setOpen={setAlertOpen} message={alertMessage} severity={alertType} />
                <>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, }}>
                        {t("STAY INFORMED")}
                    </Typography>

                    <Typography sx={{ fontSize: "0.75rem", letterSpacing: 3, color: "text.secondary", mb: 4, lineHeight: 1.8, }}>
                        {t("JOIN THE REMIX INNER CIRCLE FOR EXCLUSIVE ACCESS TO")}
                        <br />
                        {t("DROPS AND EVENTS.")}
                    </Typography>

                    <Box component="form" sx={{ display: "flex", justifyContent: "center", gap: 1, maxWidth: 430, mx: "auto", }}>
                        <TextField fullWidth placeholder={t("ENTER YOUR EMAIL")} variant="standard" sx={{
                            "& .MuiInputBase-root": { px: 2, py: 1, fontSize: "0.75rem", }, "& .MuiInput-underline:before": { borderBottomColor: "#aaa", }, "& .MuiInput-underline:after": { borderBottomColor: "black", },
                        }} />

                        <Button type="submit" onClick={handleSendMessage} variant="contained" sx={{
                            minWidth: 117, borderRadius: 0, bgcolor: "black", color: "white", fontSize: "0.7rem", fontWeight: 600,
                            letterSpacing: 1, "&:hover": { bgcolor: "#222", },
                        }}>
                            {t("SUBSCRIBE")}
                        </Button>
                    </Box>

                    <Typography sx={{ fontSize: "0.65rem", color: "text.secondary", mt: 2, }}>{t("By subscribing, you agree to our")}<Link to="/PrivacyPolicy" style={{ color: "#555555ff" }}>{t(" Privacy Policy.")}</Link></Typography>
                </>
            </Box>
        </Box>
    );
}