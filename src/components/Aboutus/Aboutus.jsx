import React from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    Divider,
    Button,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";

export default function AboutUs() {
    const { t } = useTranslation();

    return (
        <Box sx={{minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center", p: 3,}}>
            <Card elevation={0}sx={{width: "100%",maxWidth: 800,borderRadius: 4,border: "1px solid",borderColor: "divider",}}>
                <CardContent sx={{ p: { xs: 3, md: 6 } }}>
                    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center",textAlign: "center",mb: 5,}}>
                        <Box component="img"src={logo}alt="Remix Logo"sx={{width: 70,height: 70,mb: 2,}}/>

                        <Typography variant="h3" fontWeight="bold">{t("ABOUT REMIX")}</Typography>

                        <Typography color="text.secondary"sx={{mt: 1,maxWidth: 550,}}>{t("Your style, your choice, your Remix.")}</Typography>
                    </Box>

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>{t("Who We Are")}</Typography>

                        <Typography color="text.secondary"sx={{ lineHeight: 1.8 }}>{t("REMIX is an e-commerce platform created to make shopping simple, convenient, and enjoyable. We bring together quality products, modern design, and a smooth shopping experience in one place.")}
                        </Typography>
                    </Box>

                    <Divider sx={{ my: 4 }} />

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>{t("Our Mission")}</Typography>

                        <Typography color="text.secondary"sx={{ lineHeight: 1.8 }}>{t("Our mission is to provide customers with a reliable and enjoyable online shopping experience while offering products that combine quality, style, and value.")}
                        </Typography>
                    </Box>

                    <Divider sx={{ my: 4 }} />

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>{t("Why Choose REMIX?")}</Typography>

                        <Box sx={{display: "grid",gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)"},gap: 2,}}>
                            <Box>
                                <Typography fontWeight="bold">{t("Quality")}</Typography>

                                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{t("Products selected with quality in mind.")}
                                </Typography>
                            </Box>

                            <Box>
                                <Typography fontWeight="bold">{t("Easy Shopping")}</Typography>

                                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{t("A simple and convenient shopping experience.")}</Typography>
                            </Box>

                            <Box>
                                <Typography fontWeight="bold" sx={{color: "black" }}>{t("Customer First")}</Typography>

                                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{t("Your satisfaction is always our priority.")}</Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Divider sx={{ my: 4 }} />

                    <Box sx={{textAlign: "center"}}>
                        <Typography variant="h6" sx={{ mb: 2 ,fontWeight:"bold"}}>{t("Ready to start shopping?")}</Typography>

                        <Button component={RouterLink} to="/products"variant="contained"sx={{bgcolor: "black",color: "white",px: 5,py: 1.5,"&:hover": {bgcolor: "#222",}}}>
                            {t("SHOP NOW")}
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}