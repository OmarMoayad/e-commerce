import React from "react";
import { CircularProgress, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import useCategories from "../../hooks/useCategories";

export default function Categories() {
    const { t } = useTranslation();

    const { data, isLoading, isError, error } = useCategories();

    if (isLoading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", py: 5, }}>
                <CircularProgress />
            </Box>
        );
    }

    if (isError) {
        return (
            <Typography color="error">
                Error: {error.message}
            </Typography>
        );
    }

    const categories = data.response.data;

    return (
        <Box sx={{ width: "100%", px: { xs: 2, md: 6 }, py: 6, boxSizing: "border-box", }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, textTransform: "uppercase", letterSpacing: 1, }}>
                {t("Categories")}
            </Typography>

            <Box sx={{ width: "100%", display: "grid", gridTemplateColumns: { xs: "100%", md: "50% 50%", }, gap: 2, boxSizing: "border-box", }}>
                {categories.map((category) => (
                    <Box key={category.id} sx={{ height: 100, display: "flex", alignItems: "center", justifyContent: "flex-start", px: 3, boxSizing: "border-box", border: "1px solid", borderColor: "divider", cursor: "pointer", transition: "all 0.3s ease", "&:hover": { backgroundColor: "#000", color: "white" }, }}>
                        <Typography variant="h6" sx={{ color: "inherit", fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, }}>
                            {category.name}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}