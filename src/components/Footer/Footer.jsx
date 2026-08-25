import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import logoLight from "../../assets/logo.png";
import logoDark from "../../assets/logo-Darkmode.png";
import themeStore from "../../auth/useThemeStore";

export default function Footer() {
    const { t } = useTranslation();
    const mode = themeStore((state) => state.mode);

    const navLinks = [
        { label: "Privacy Policy", to: "/privacypolicy" },
        { label: "Terms of Service", to: "/terms" },
        { label: "Faq", to: "/faq" },
        { label: "Contact", to: "/contact" },
    ];

    return (
        <Box
            component="footer"
            sx={{
                mt: 8,
                py: { xs: 4, md: 3.5 },
                borderTop: "1px solid",
                borderColor: "divider",
                bgcolor: "background.paper",
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: { xs: 2.5, md: 3 },
                    }}
                >
                    {/* Left: Brand Logo / Name */}
                    <Box
                        component={RouterLink}
                        to="/"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                        }}
                    >
                        <Box
                            component="img"
                            src={mode === "dark" ? logoDark : logoLight}
                            alt="REMIX"
                            sx={{ height: 26, width: "auto" }}
                        />
                    </Box>

                    {/* Center: Navigation Links */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            gap: { xs: 3, sm: 4, md: 4.5 },
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                component={RouterLink}
                                to={link.to}
                                sx={{
                                    fontSize: "0.82rem",
                                    color: "text.secondary",
                                    textDecoration: "none",
                                    transition: "color 0.2s ease",
                                    "&:hover": {
                                        color: "text.primary",
                                    },
                                }}
                            >
                                {t(link.label)}
                            </Link>
                        ))}
                    </Box>

                    {/* Right: Copyright */}
                    <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
                        <Typography
                            sx={{
                                fontSize: "0.72rem",
                                letterSpacing: 0.5,
                                color: "text.secondary",
                                textTransform: "uppercase",
                            }}
                        >
                            © {new Date().getFullYear()} {t("REMIX LUXURY. ALL RIGHTS RESERVED.")}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}