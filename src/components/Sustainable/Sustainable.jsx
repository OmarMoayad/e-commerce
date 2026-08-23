import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import organicFibers from "../../assets/Fibers.png";
import regeneratedNylon from "../../assets/Nylon.png";
import consciousLeather from "../../assets/Leather.png";

export default function SustainableSourcing() {
    const { t } = useTranslation();

    return (
        <Box sx={{ width: "100%", px: { xs: 2, md: 6 }, py: { xs: 6, md: 8 }, }}>
            <Box sx={{ textAlign: "center", maxWidth: 650, mx: "auto", mb: { xs: 5, md: 8 }, }}>
                <Typography sx={{ fontSize: { xs: "1.4rem", md: "1.6rem" }, fontWeight: 700, mb: 1.5, }}> {t("Sustainable Sourcing")} </Typography>
                <Typography sx={{ fontSize: { xs: "0.75rem", md: "0.8rem" }, lineHeight: 1.7, color: "text.secondary", }}> {t("We curate materials not just for their tactile excellence, but for their ecological footprint. Our palette is defined by nature, engineered for durability.")} </Typography>
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)", }, alignItems: "start", gap: { xs: 4, md: 2 }, maxWidth: 1100, mx: "auto", }}>
                <Box>
                    <Box component="img" src={organicFibers} alt={t("Organic Fibers")} sx={{ width: "100%", height: { xs: 280, md: 235 }, objectFit: "cover", borderRadius: 2, display: "block", mb: 2, }}/>
                    <Typography sx={{ fontSize: "1rem", fontWeight: 700, mb: 1, mx:3 }}> {t("Organic Fibers")} </Typography>
                    <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.7, color: "text.secondary", maxWidth: 300, mx:3 }} > {t("Cultivated without synthetic pesticides, requiring significantly less water than conventional alternatives.")} </Typography>
                </Box>
                <Box sx={{ mt: { xs: 0, md: 4 } }}>
                    <Box component="img" src={regeneratedNylon} alt={t("Regenerated Nylon")} sx={{ width: "100%", height: { xs: 280, md: 235 }, objectFit: "cover", borderRadius: 2, display: "block", mb: 2, }}/>
                    <Typography sx={{ fontSize: "1rem", fontWeight: 700, mb: 1, mx:3 }}> {t("Regenerated Nylon")} </Typography>
                    <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.7, color: "text.secondary", maxWidth: 300, mx:3 }}> {t("Recovered ocean plastics and textile waste, transformed into high-performance, infinitely recyclable yarns.")} </Typography>
                </Box>
                <Box sx={{ mt: { xs: 0, md: 8 } }}>
                    <Box component="img" src={consciousLeather} alt={t("Conscious Leather")} sx={{ width: "100%", height: { xs: 280, md: 235 }, objectFit: "cover", borderRadius: 2, display: "block", mb: 2, }}/>
                    <Typography sx={{ fontSize: "1rem", fontWeight: 700, mb: 1, mx:3 }}> {t("Conscious Leather")} </Typography>
                    <Typography sx={{ fontSize: "0.7rem", lineHeight: 1.7, color: "text.secondary", maxWidth: 300, mx:3 }}> {t("Sourced exclusively as a byproduct, tanned using natural vegetable processes free from harmful heavy metals.")} </Typography>
                </Box>
            </Box>
        </Box>
    );
}