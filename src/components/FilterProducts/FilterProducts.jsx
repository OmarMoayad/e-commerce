import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Typography, Select, MenuItem, Button, Divider, FormControl, } from '@mui/material';
import { useTranslation } from 'react-i18next';


export default function FilterProducts() {
    const { t } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();

    const sortBy = searchParams.get('sortBy') || '';
    const ascendingVal = searchParams.get('ascending');
    const ascending = ascendingVal !== 'false';

    const currentValue = sortBy
        ? `${sortBy}_${ascending ? 'asc' : 'desc'}`
        : '';

    const handleSortChange = (event) => {
        const value = event.target.value;
        const newParams = new URLSearchParams(searchParams);

        if (value) {
            const [sortBy, direction] = value.split("_");

            newParams.set("sortBy", sortBy);
            newParams.set("ascending", direction === "asc" ? "true" : "false");
        } else {
            newParams.delete("sortBy");
            newParams.delete("ascending");
        }

        setSearchParams(newParams);
    };

    const handleClear = () => {
        const newParams = new URLSearchParams(searchParams);
        newParams.delete('sortBy');
        newParams.delete('ascending');
        setSearchParams(newParams);
    };

    const hasFilters = !!sortBy;

    return (
        <Box sx={{ width: 200, flexShrink: 0, pr: 3, }}>
            <Typography variant="overline" sx={{ fontWeight: 700, fontSize: '0.7rem', letterSpacing: 2, color: 'text.secondary', display: 'block', mb: 1.5, }}>
                {t("Sort By")}
            </Typography>

            <FormControl fullWidth size="small">
                <Select id="sort-by-select" value={currentValue} onChange={handleSortChange} displayEmpty sx={{ fontSize: "0.875rem", color: "text.primary", bgcolor: "background.paper", borderRadius: 1, "& .MuiOutlinedInput-notchedOutline": { borderColor: "divider", }, }}>
                    <MenuItem value="">{t("Default")}</MenuItem>
                    <MenuItem value="name_asc">{t("Name: A → Z")}</MenuItem>
                    <MenuItem value="name_desc">{t("Name: Z → A")}</MenuItem>
                    <MenuItem value="price_asc">{t("Price: Low → High")}</MenuItem>
                    <MenuItem value="price_desc">{t("Price: High → Low")}</MenuItem>
                    <MenuItem value="rate_desc">{t("Rating: High → Low")}</MenuItem>
                    <MenuItem value="rate_asc">{t("Rating: Low → High")}</MenuItem>
                </Select>
            </FormControl>

            <Divider sx={{ my: 3 }} />

            <Button fullWidth variant="contained" onClick={handleClear} disabled={!hasFilters} disableElevation sx={{ bgcolor: 'grey.900', color: 'common.white', fontWeight: 600, fontSize: '0.75rem', letterSpacing: 1.5, py: 1.2, textTransform: 'uppercase', borderRadius: 1, '&:hover': { bgcolor: 'grey.700', }, '&.Mui-disabled': { bgcolor: 'grey.300', color: 'grey.500', }, }}>
                {t("Clear Filters")}
            </Button>
        </Box>
    );
}