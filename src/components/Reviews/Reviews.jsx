import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Reviews() {
    const { t } = useTranslation();

    return (
        <Box sx={{ width: "100%", px: { xs: 2, md: 6 }, py: { xs: 5, md: 8 }, boxSizing: "border-box", }}>
            <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontSize: { xs: "1.1rem", md: "1.3rem" }, fontWeight: 700, mb: 0.8, }}>
                    {t("Client Reviews")}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1, }}>
                    <Typography sx={{ fontSize: "0.9rem", letterSpacing: 1, }}>
                        ★★★★★
                    </Typography>

                    <Typography sx={{ fontSize: "0.65rem", color: "text.secondary", }}>
                        {t("4.8 / 5.0 based on 124 reviews")}
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2, }}>
                <Box sx={{ p: { xs: 2.5, md: 2 }, minHeight: 150, borderRadius: 2, boxShadow: "0 8px 25px rgba(0,0,0,0.04)", border: "1px solid", borderColor: "#f2f2f2", }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1, }}>
                        <Box>
                            <Typography sx={{ fontSize: "0.65rem", fontWeight: 700, }}>
                                {t("Elias V.")}
                            </Typography>
                            <Typography sx={{ fontSize: "0.5rem", color: "text.secondary", }}>
                                {t("Verified Buyer")}
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: "0.55rem" }}>
                            ★★★★★
                        </Typography>
                    </Box>
                    <Typography sx={{ fontSize: "0.85rem", fontWeight: 700, fontStyle: "italic", mb: 1, }}>
                        {t('"Exceptional Experience."')}
                    </Typography>
                    <Typography sx={{ fontSize: "0.62rem", lineHeight: 1.6, color: "text.secondary", }}>
                        {t("From browsing to checkout, everything feels smooth and thoughtfully designed. The website makes shopping simple and enjoyable.")}
                    </Typography>
                </Box>

                <Box sx={{ p: { xs: 2.5, md: 2 }, minHeight: 150, borderRadius: 2, boxShadow: "0 8px 25px rgba(0,0,0,0.04)", border: "1px solid", borderColor: "#f2f2f2",}}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1,}}>
                        <Box>
                            <Typography sx={{ fontSize: "0.65rem", fontWeight: 700,}}>
                                {t("Marcus L.")}
                            </Typography>
                            <Typography sx={{ fontSize: "0.5rem", color: "text.secondary",}}>
                                {t("Verified Buyer")}
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: "0.55rem" }}>
                            ★★★★★
                        </Typography>
                    </Box>
                    <Typography sx={{ fontSize: "0.85rem", fontWeight: 700, fontStyle: "italic", mb: 1, }}>
                        {t('"Beautifully Designed."')}
                    </Typography>
                    <Typography sx={{ fontSize: "0.62rem", lineHeight: 1.6, color: "text.secondary",}}>
                        {t("The website is clean, easy to navigate, and the product presentation is excellent. Everything feels premium and effortless.")}
                    </Typography>
                </Box>

                <Box sx={{ p: { xs: 2.5, md: 2 }, minHeight: 150, borderRadius: 2, boxShadow: "0 8px 25px rgba(0,0,0,0.04)", border: "1px solid", borderColor: "#f2f2f2",}}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1, }}>
                        <Box>
                            <Typography sx={{ fontSize: "0.65rem", fontWeight: 700,}}>
                                {t("Sarah K.")}
                            </Typography>
                            <Typography sx={{ fontSize: "0.5rem", color: "text.secondary",}}>
                                {t("Verified Buyer")}
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: "0.55rem" }}>
                            ★★★★☆
                        </Typography>
                    </Box>
                    <Typography sx={{ fontSize: "0.85rem", fontWeight: 700, fontStyle: "italic", mb: 1, }}>
                        {t('"Simple & Reliable."')}
                    </Typography>
                    <Typography sx={{ fontSize: "0.62rem", lineHeight: 1.6, color: "text.secondary",}}>
                        {t("Finding products, checking details, and placing an order was incredibly easy. A great shopping experience from start to finish.")}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}