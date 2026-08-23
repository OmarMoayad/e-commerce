import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import menswear from "../../assets/man.png";
import womenswear from "../../assets/woman.png";
import accessories from "../../assets/belt.png";

export default function CategoryShowcase() {
    const { t } = useTranslation();

    return (
        <Box sx={{ width: "100%", display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", }, gap: 2, px: { xs: 2, md: 4 }, py: { xs: 4, md: 6 }, }} >
            <Box component={Link} to="/products" sx={{ position: "relative", height: { xs: 400, md: 514 }, overflow: "hidden", borderRadius: 1.5, textDecoration: "none", color: "white", "&:hover img": { transform: "scale(1.04)", }, }}>
                <Box component="img" src={menswear} alt={t("Menswear")} sx={{ width: "100%", height: "100%", objectFit: "fit", transition: "transform 0.5s ease", }} />
                <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent 60%)", }} />
                <Box sx={{ position: "absolute", bottom: 20, left: 20 }}>
                    <Typography sx={{ fontWeight: 700 }}>{t("Menswear")}</Typography>
                    <Typography sx={{ fontSize: "0.7rem", textDecoration: "underline", }} >{t("Shop Now")}</Typography>
                </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box component={Link} to="/products" sx={{ position: "relative", height: { xs: 250, md: 249 }, overflow: "hidden", borderRadius: 1.5, textDecoration: "none", color: "white", "&:hover img": { transform: "scale(1.04)", }, }}>
                    <Box component="img" src={womenswear} alt={t("Womenswear")} sx={{ width: "100%", height: "100%", objectFit: "fit", transition: "transform 0.5s ease", }} />
                    <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent 60%)", }} />

                    <Box sx={{ position: "absolute", bottom: 20, left: 20 }}>
                        <Typography sx={{ fontWeight: 700 }}>{t("Womenswear")}</Typography>

                        <Typography sx={{ fontSize: "0.7rem", textDecoration: "underline", }}>
                            {t("Shop Now")}
                        </Typography>
                    </Box>
                </Box>


                <Box component={Link} to="/products" sx={{ position: "relative", height: { xs: 250, md: 249 }, overflow: "hidden", borderRadius: 1.5, textDecoration: "none", color: "white", "&:hover img": { transform: "scale(1.04)", }, }}>
                    <Box component="img" src={accessories} alt={t("Accessories")} sx={{ width: "100%", height: "100%", objectFit: "fit", transition: "transform 0.5s ease", }} />

                    <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent 60%)", }} />

                    <Box sx={{ position: "absolute", bottom: 20, left: 20 }}>
                        <Typography sx={{ fontWeight: 700 }}>{t("Accessories")}</Typography>

                        <Typography sx={{ fontSize: "0.7rem", textDecoration: "underline", }}>
                            {t("Explore More")}
                        </Typography>
                    </Box>
                </Box>

            </Box>
        </Box>
    );
}