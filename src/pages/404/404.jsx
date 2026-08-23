import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

export default function NotFound() {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                minHeight: { xs: "70vh", md: "80vh" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                py: { xs: 8, md: 12 },
                px: 2,
            }}
        >
            <Container maxWidth="sm" sx={{ textAlign: "center" }}>
                <Typography
                    component="h1"
                    sx={{
                        fontSize: { xs: "6rem", sm: "9rem", md: "11rem" },
                        fontWeight: 900,
                        lineHeight: 0.9,
                        letterSpacing: "-0.04em",
                        color: "text.primary",
                        userSelect: "none",
                        mb: { xs: 2.5, md: 3 },
                    }}
                >
                    404
                </Typography>

                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        fontWeight: 900,
                        fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
                        letterSpacing: "0.04em",
                        color: "text.primary",
                        textTransform: "uppercase",
                        mb: 2,
                    }}
                >
                    {t("LOST IN THE ARCHIVE")}
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: "0.85rem", md: "0.92rem" },
                        lineHeight: 1.7,
                        color: "text.secondary",
                        maxWidth: 480,
                        mx: "auto",
                        mb: 4.5,
                    }}
                >
                    {t(
                        "The page you are looking for does not exist or has been moved to our archive. Explore our latest collections or return to the beginning."
                    )}
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: 2,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Button
                        component={RouterLink}
                        to="/"
                        variant="contained"
                        sx={{
                            bgcolor: "text.primary",
                            color: "background.paper",
                            px: 3.5,
                            py: 1.25,
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            borderRadius: "2px",
                            textTransform: "uppercase",
                            boxShadow: "none",
                            width: { xs: "100%", sm: "auto" },
                            minWidth: 170,
                            "&:hover": {
                                bgcolor: "text.secondary",
                                color: "background.paper",
                                boxShadow: "none",
                            },
                        }}
                    >
                        {t("RETURN HOME")}
                    </Button>

                    <Button
                        component={RouterLink}
                        to="/products"
                        variant="outlined"
                        sx={{
                            color: "text.primary",
                            borderColor: "text.primary",
                            borderWidth: 1,
                            px: 3.5,
                            py: 1.25,
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            borderRadius: "2px",
                            textTransform: "uppercase",
                            width: { xs: "100%", sm: "auto" },
                            minWidth: 170,
                            "&:hover": {
                                borderColor: "text.primary",
                                bgcolor: "action.hover",
                            },
                        }}
                    >
                        {t("SHOP NEW ARRIVALS")}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
