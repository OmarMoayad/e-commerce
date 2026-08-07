import React from 'react';
import { useSearchParams } from 'react-router-dom';
import {
    Box,
    Typography,
    Select,
    MenuItem,
    Button,
    Divider,
    FormControl,
} from '@mui/material';

const SORT_OPTIONS = [
    { value: '', label: 'Default' },
    { value: 'name_asc', label: 'Name: A → Z', sortBy: 'name', ascending: 'true' },
    { value: 'name_desc', label: 'Name: Z → A', sortBy: 'name', ascending: 'false' },
    { value: 'price_asc', label: 'Price: Low → High', sortBy: 'price', ascending: 'true' },
    { value: 'price_desc', label: 'Price: High → Low', sortBy: 'price', ascending: 'false' },
    { value: 'rate_desc', label: 'Rating: High → Low', sortBy: 'rate', ascending: 'false' },
    { value: 'rate_asc', label: 'Rating: Low → High', sortBy: 'rate', ascending: 'true' },
];

export default function FilterProducts() {
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
            const option = SORT_OPTIONS.find(o => o.value === value);
            if (option) {
                newParams.set('sortBy', option.sortBy);
                newParams.set('ascending', option.ascending);
            }
        } else {
            newParams.delete('sortBy');
            newParams.delete('ascending');
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
        <Box
            sx={{
                width: 200,
                flexShrink: 0,
                pr: 3,
            }}
        >
            <Typography
                variant="overline"
                sx={{
                    fontWeight: 700,
                    fontSize: '0.7rem',
                    letterSpacing: 2,
                    color: 'text.secondary',
                    display: 'block',
                    mb: 1.5,
                }}
            >
                Sort By
            </Typography>

            <FormControl fullWidth size="small">
                <Select
                    id="sort-by-select"
                    value={currentValue}
                    onChange={handleSortChange}
                    displayEmpty
                    sx={{
                        fontSize: '0.875rem',
                        color: 'text.primary',
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'divider',
                        },
                    }}
                >
                    {SORT_OPTIONS.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Divider sx={{ my: 3 }} />

            <Button
                fullWidth
                variant="contained"
                onClick={handleClear}
                disabled={!hasFilters}
                disableElevation
                sx={{
                    bgcolor: 'grey.900',
                    color: 'common.white',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    letterSpacing: 1.5,
                    py: 1.2,
                    textTransform: 'uppercase',
                    borderRadius: 1,
                    '&:hover': {
                        bgcolor: 'grey.700',
                    },
                    '&.Mui-disabled': {
                        bgcolor: 'grey.300',
                        color: 'grey.500',
                    },
                }}
            >
                Clear Filters
            </Button>
        </Box>
    );
}
