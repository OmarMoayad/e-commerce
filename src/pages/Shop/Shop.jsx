import React from 'react'
import { Box, Container } from '@mui/material'
import Products from '../../components/Products/Products'
import FilterProducts from '../../components/FilterProducts/FilterProducts'

export default function Shop() {
    return (
        <Box component="section" sx={{ minHeight: '100vh' }}>
            <Container maxWidth="lg" sx={{ pb: 10 }}>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'flex-start',
                        gap: { xs: 3, md: 4 },
                    }}
                >

                    {/* Filters */}
                    <Box
                        sx={{
                            width: { xs: '100%', md: 200 },
                            flexShrink: 0,
                        }}
                    >
                        <FilterProducts />
                    </Box>

                    {/* Products */}
                    <Box
                        sx={{
                            width: '100%',
                            flex: 1,
                            minWidth: 0,
                        }}
                    >
                        <Products />
                    </Box>

                </Box>

            </Container>
        </Box>
    )
}