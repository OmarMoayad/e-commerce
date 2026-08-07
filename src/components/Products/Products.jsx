import React from 'react'
import useProducts from '../../hooks/useProducts'
import {
    Box,
    Typography,
    CircularProgress,
    Grid,
} from '@mui/material'

import { Link, useSearchParams } from 'react-router-dom'

export default function Products() {
    const [searchParams] = useSearchParams();

    const sortBy = searchParams.get('sortBy');
    const ascending = searchParams.get('ascending');

    const params = {};
    if (sortBy) {
        params.sortBy = sortBy;
        if (ascending !== null) {
            params.ascending = ascending;
        }
    }

    const { data, isLoading, isError, error } = useProducts(params);

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
                <CircularProgress />
            </Box>
        );
    }
    if (isError) {
        return (
            <Typography color="error" sx={{ py: 4 }}>
                Error: {error.message}
            </Typography>
        );
    }

    const products = data?.response?.data || [];

    return (
        <Box>
            <Box sx={{  display: 'flex',  alignItems: 'baseline',justifyContent: 'space-between',mb: 3}}>
                <Typography variant="h4" component="h1" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    All Products
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                    Showing {products.length} items
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
                        <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Box sx={{ cursor: 'pointer', '&:hover .product-img': { transform: 'scale(1.04)', }, '&:hover .product-name': { color: '#b0b0b0', } }}>
                                <Box sx={{ width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', bgcolor: '#f5f5f5', borderRadius: 2, mb: 1.5, }}>
                                    <Box component="img" className="product-img" src={product.image} alt={product.name} sx={{ width: '100%', height: '100%', objectFit: 'object-fit', transition: 'transform 0.35s ease', }} />
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 1, }}>
                                    <Typography className="product-name" variant="body1" sx={{ fontWeight: 600, color: 'text.primary', transition: 'color 0.2s', lineHeight: 1.3, }}>
                                        {product.name}
                                        </Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', whiteSpace: 'nowrap' }}>
                                        ${product.price}
                                    </Typography>
                                </Box>

                                <Typography variant="caption" sx={{ color: 'gray', textTransform: 'uppercase', letterSpacing: 1, fontSize: '0.7rem', mt: 0.25, display: 'block', }}>
                                    {'★'.repeat(Math.round(product.rate || 0))}{'☆'.repeat(5 - Math.round(product.rate || 0))} &nbsp; Rating {product.rate}/5
                                </Typography>
                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
