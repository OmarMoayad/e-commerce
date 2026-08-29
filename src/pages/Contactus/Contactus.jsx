import React from "react";
import { Box, Typography, TextField, Button, Container, Divider, MenuItem, } from "@mui/material";
import { useTranslation } from "react-i18next";
import map from "../../assets/Map.png";
import Alert from "../../components/Alert/Alert";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ContactUs() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("success");

    const handleSendMessage = (e) => {
        if (e) e.preventDefault();
        setAlertMessage(t("Message sent successfully!"));
        setAlertType("success");
        setAlertOpen(true);
        setTimeout(() => {
            navigate("/");
        }, 2000);
    };

    return (
        <Box sx={{ minHeight: "100vh", py: { xs: 6, md: 9 }, }}>
            <Container maxWidth="lg">
                <Alert open={alertOpen} setOpen={setAlertOpen} message={alertMessage} severity={alertType} />
                <Box sx={{ mb: { xs: 5, md: 8 } }}>
                    <Typography variant="h3" sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "2.6rem" }, mb: 2, }}>
                        {t("Contact Us")}
                    </Typography>
                    <Typography sx={{ maxWidth: 500, fontSize: "0.72rem", lineHeight: 1.7, color: "text.secondary", }}>
                        {t("For inquiries regarding bespoke pieces, collections, or private consultations, please reach out. Our concierge team is dedicated to providing an unparalleled luxury experience.")}
                    </Typography>
                </Box>
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(0, 2fr) minmax(260px, 1fr)", }, gap: { xs: 6, md: 10 }, }}>
                    <Box component="form" onSubmit={handleSendMessage} sx={{ maxWidth: 650, }}>
                        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", }, gap: 2, mb: 3, }}>
                            <Box>
                                <Typography sx={{ fontSize: "0.65rem", fontWeight: 600, mb: 1, }}>
                                    {t("Name")}
                                </Typography>
                                <TextField fullWidth size="small" variant="outlined" sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0, fontSize: "0.75rem", }, }} />
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: "0.65rem", fontWeight: 600, mb: 1, }}>
                                    {t("Email Address")}
                                </Typography>
                                <TextField fullWidth size="small" variant="outlined" type="email" sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0, fontSize: "0.75rem", }, }} />
                            </Box>
                        </Box>
                        <Box sx={{ mb: 3 }}>
                            <Typography sx={{ fontSize: "0.65rem", fontWeight: 600, mb: 1, }}>
                                {t("Inquiry Type")}
                            </Typography>
                            <TextField select fullWidth size="small" defaultValue="Bespoke Design" sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0, fontSize: "0.75rem", }, }}>
                                <MenuItem value="Bespoke Design">
                                    {t("Bespoke Design")}
                                </MenuItem>
                                <MenuItem value="Collections">
                                    {t("Collections")}
                                </MenuItem>
                                <MenuItem value="Private Consultation">
                                    {t("Private Consultation")}
                                </MenuItem>
                                <MenuItem value="Other">
                                    {t("Other")}
                                </MenuItem>
                            </TextField>
                        </Box>
                        <Box sx={{ mb: 4 }}>
                            <Typography sx={{ fontSize: "0.65rem", fontWeight: 600, mb: 1, }}>
                                {t("Message")}
                            </Typography>
                            <TextField fullWidth multiline rows={5} sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0, fontSize: "0.75rem", }, }} />
                        </Box>
                        <Button type="submit" onClick={handleSendMessage} variant="contained" sx={{ bgcolor: "black", color: "white", px: 4, py: 1.2, minWidth: 140, fontSize: "0.65rem", fontWeight: 700, letterSpacing: 1, borderRadius: 1, "&:hover": { bgcolor: "#222", }, }}>
                            {t("SEND MESSAGE")}
                        </Button>
                    </Box>
                    <Box>
                        <Divider sx={{ mb: 3 }} />
                        <Typography sx={{ fontSize: "0.9rem", fontWeight: 700, mb: 1.5, }}>
                            {t("Concierge Services")}
                        </Typography>
                        <Typography sx={{ fontSize: "0.68rem", lineHeight: 1.7, color: "text.secondary", mb: 2, }}>
                            {t("Available Monday to Friday, 9:00 AM to 6:00 PM CET for priority assistance and styling advice.")}
                        </Typography>
                        <Typography sx={{ fontSize: "0.68rem", fontWeight: 600, mb: 5, }}>
                            ✉ contact@remix.luxury
                        </Typography>
                        <Divider sx={{ mb: 3 }} />
                        <Typography sx={{ fontSize: "0.9rem", fontWeight: 700, mb: 1.5, }}>
                            {t("Location")}
                        </Typography>
                        <Typography sx={{ fontSize: "0.68rem", lineHeight: 1.7, color: "text.secondary", mb: 2, }}>
                            {t("Nablus mall, 3rd floor")}
                            <br />
                            {t("Nablus, Palestine")}
                        </Typography>
                        <Box component="a" href="https://www.google.com/maps/place/Nablus+Mall+%D9%86%D8%A7%D8%A8%D9%84%D8%B3+%D9%85%D9%88%D9%84%E2%80%AD/@32.2241111,35.2538941,17z" target="_blank" rel="noopener noreferrer" sx={{width: "100%",height: 200, display: "block",bgcolor: "#f3f3f0",borderRadius: 1,overflow: "hidden",cursor: "pointer",}}>
                            <Box component="img" src={map} alt="Nablus Mall location" sx={{width: "100%",height: "100%",objectFit: "cover",display: "block",transition: "transform 0.3s ease, opacity 0.3s ease", "&:hover": {transform: "scale(1.03)",opacity: 0.9,}}}/></Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}