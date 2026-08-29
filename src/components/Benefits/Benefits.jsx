import React from "react";
import { Box, Typography } from "@mui/material";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { useTranslation } from "react-i18next";

export default function Benefits() {
    const { t } = useTranslation();

    return (
        <Box sx={{ width: "100%", py: { xs: 7, md: 9 }, px: { xs: 3, md: 6 }, bgcolor: "background.default", color: "text.primary", backgroundSize: "40px 40px", }}>
            <Box sx={{ maxWidth: 1000, mx: "auto", textAlign: "center", }}>
                <Typography variant="h4" sx={{ fontWeight: 700, fontSize: { xs: "1.7rem", md: "2rem" }, mb: 1.5, }}>
                    {t("Why Shop With Us")}
                </Typography>
                <Typography sx={{ "color": "text.secondary", "fontSize": "0.85rem", maxWidth: 550, mx: "auto", lineHeight: 1.7, mb: 6, }}>
                    {t("Everything you need for a simple, secure, and enjoyable shopping experience.")}
                </Typography>
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }, gap: { xs: 5, md: 2 }, }}>
                    <Box sx={{ textAlign: "center", px: 2 }}>
                        <Box sx={{ width: 54, height: 54, mx: "auto", mb: 2, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "background.paper", border: "1px solid", borderColor: "divider", borderRadius: 1, transition: "0.3s", "&:hover": { bgcolor: "text.primary", color: "background.default", } }}>
                            <CreditCardOutlinedIcon />
                        </Box>
                        <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 1, }}>
                            {t("Secure Payment")}
                        </Typography>
                        <Typography sx={{ "fontSize": "0.72rem", "color": "text.secondary", "lineHeight": 1.7, }}>
                            {t("Safe and secure payment options for every order.")}
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: "center", px: 2 }}>
                        <Box sx={{ width: 54, height: 54, mx: "auto", mb: 2, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "background.paper", border: "1px solid", borderColor: "divider", borderRadius: 1, transition: "0.3s", "&:hover": { bgcolor: "text.primary", color: "background.default", } }}>
                            <ReplayOutlinedIcon />
                        </Box>
                        <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 1, }}>
                            {t("Easy Returns")}
                        </Typography>
                        <Typography sx={{ "fontSize": "0.72rem", "color": "text.secondary", "lineHeight": 1.7, }}>
                            {t("Return eligible products within 30 days.")}
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: "center", px: 2 }}>
                        <Box sx={{ width: 54, height: 54, mx: "auto", mb: 2, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "background.paper", border: "1px solid", borderColor: "divider", borderRadius: 1, transition: "0.3s", "&:hover": { bgcolor: "text.primary", color: "background.default", } }}>
                            <SupportAgentOutlinedIcon />
                        </Box>
                        <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 1, }}>
                            {t("Customer Support")}
                        </Typography>
                        <Typography sx={{ "fontSize": "0.72rem", "color": "text.secondary", "lineHeight": 1.7, }}>
                            {t("Our support team is here whenever you need us.")}
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: "center", px: 2 }}>
                        <Box sx={{ width: 54, height: 54, mx: "auto", mb: 2, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "background.paper", border: "1px solid", borderColor: "divider", borderRadius: 1, transition: "0.3s", "&:hover": { bgcolor: "text.primary", color: "background.default", } }}>
                            <LocalShippingOutlinedIcon />
                        </Box>
                        <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", mb: 1, }}>
                            {t("Fast Delivery")}
                        </Typography>
                        <Typography sx={{ "fontSize": "0.72rem", "color": "text.secondary", "lineHeight": 1.7, }}>
                            {t("Reliable delivery directly to your doorstep.")}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}