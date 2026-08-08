import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import heroImage from "../../assets/hero.png";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <Box sx={{position: "relative", width: "100%", height: {xs: "70vh", md: "85vh"}, minHeight: 500, overflow: "hidden", backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center",}}>
            <Box sx={{position: "absolute"}}/>
            <Box sx={{ position: "relative", zIndex: 1, height: "100%", display: "flex", alignItems: "flex-end", px: { xs: 3, md: 6, lg: 8, }, pb: {xs: 6,md: 10,},}}>
                <Box sx={{maxWidth: 600, color: "white",}}>
                    <Typography variant="h1" sx={{fontSize: {xs: "2.8rem",sm: "4rem",md: "5rem",},fontWeight: 500,mb: 2,}}>
                        {t("Welcome to Remix")}
                    </Typography>

                    <Typography sx={{fontSize: {xs: "0.85rem",md: "0.95rem",},maxWidth: 480,lineHeight: 1.6,mb: 3,color: "rgba(255,255,255,0.85)",}}>
                        {t("A curated collection of timeless pieces. Modern design meets quality and style.")}
                    </Typography>

                    <Button component={RouterLink} to="/products" variant="contained" sx={{bgcolor: "black",color: "white",px: 4,py: 1.5,fontSize: "0.75rem",fontWeight: 700,borderRadius: 1,"&:hover": {bgcolor: "#222",},}}>
                        {t("DISCOVER COLLECTION")}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}