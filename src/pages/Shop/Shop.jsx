import React from 'react'
import { Box, Container } from '@mui/material'
import Products from '../../components/Products/Products'
import FilterProducts from '../../components/FilterProducts/FilterProducts'

export default function Shop() {
    return (
        <Box component="section" sx={{ minHeight: '100vh' }}>
            <Container maxWidth="lg" sx={{ pb: 10 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 4 }}>
                    <FilterProducts />
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Products />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}