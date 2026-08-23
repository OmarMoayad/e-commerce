import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import lifecycleImage from "../../assets/Thelifecycle.jpg";

export default function Lifecycle() {
    const { t } = useTranslation();

    return (
        <Box sx={{ minHeight: "80vh", display: "flex", alignItems: "center", py: { xs: 6, md: 10 }, }}>
            <Container maxWidth="lg">
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: { xs: 5, md: 7 }, flexDirection: { xs: "column", md: "row" }, }}>
                    <Box component="img" src={lifecycleImage} alt="Lifecycle" sx={{ width: { xs: "100%", sm: 450, md: 500 }, height: { xs: 400, sm: 500, md: 580 }, objectFit: "cover", borderRadius: 2, }}/>
                    <Box sx={{ maxWidth: 450, display: "flex", flexDirection: "column", alignItems: "flex-start", }}>
                        <Typography sx={{fontSize: "0.65rem", fontWeight: 600, letterSpacing: 3, mb: 2.5, color: "text.primary",}}>{t("THE LIFECYCLE")}</Typography>
                        <Typography variant="h4" sx={{fontWeight: 600, fontSize: { xs: "1.8rem", md: "2rem" }, mb: 2.5, color: "text.primary",}}>{t("A Circular Future")}</Typography>
                        <Typography sx={{fontSize: "0.8rem", lineHeight: 1.8, color: "text.secondary", mb: 3.5,}}>{t("Longevity is the ultimate sustainable act. We design for permanence, not seasons. When your REMIX piece requires care, our Repair initiative ensures it is meticulously restored, extending its life indefinitely. When its journey finally ends, our take-back program guarantees responsible recycling.")}</Typography>
                        <Button variant="contained" sx={{bgcolor: "black",color: "white", textTransform: "none", fontSize: "0.7rem", fontWeight: 600, px: 2.5, py: 1.2, borderRadius: 1, "&:hover": { bgcolor: "#222", },}}>{t("Initiate Repair")}</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}