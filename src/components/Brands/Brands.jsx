import React from "react";
import { Box, Typography } from "@mui/material";

export default function Brands() {
    return (
        <Box sx={{ width: "100%", py: { xs: 3, md: 4 }, px: { xs: 2, md: 6 }, overflow: "hidden", }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: { xs: 4, md: 6 }, maxWidth: 1400, mx: "auto", overflowX: "auto", "&::-webkit-scrollbar": { display: "none", }, }}>
                <Typography sx={{ fontSize: { xs: "1.8rem", md: "2.8rem" }, fontWeight: 600, fontFamily: "Georgia, serif", whiteSpace: "nowrap", }}>
                    VERSACE
                </Typography>

                <Typography sx={{ fontSize: { xs: "1.8rem", md: "2.8rem" }, fontWeight: 700, fontFamily: "Georgia, serif", whiteSpace: "nowrap", }}>
                    ZARA
                </Typography>

                <Typography sx={{ fontSize: { xs: "1.8rem", md: "2.8rem" }, fontWeight: 400, letterSpacing: { xs: 3, md: 7 }, fontFamily: "Georgia, serif", whiteSpace: "nowrap", }}>
                    GUCCI
                </Typography>

                <Typography sx={{ fontSize: { xs: "1.8rem", md: "2.8rem" }, fontWeight: 600, letterSpacing: 2, fontFamily: "Georgia, serif", whiteSpace: "nowrap", }}>
                    PRADA
                </Typography>

                <Typography sx={{ fontSize: { xs: "1.5rem", md: "2.5rem" }, fontWeight: 400, fontFamily: "Arial, sans-serif", whiteSpace: "nowrap", }}>
                    Calvin Klein
                </Typography>
            </Box>
        </Box>
    );
}