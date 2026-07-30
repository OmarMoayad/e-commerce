import React from 'react'
import useProducts from '../../hooks/useProducts'
import { Box, Typography, CircularProgress, Card, CardMedia, CardContent, Grid } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Products() {
    const { data, isLoading, isError, error } = useProducts();

    if (isLoading) {
        return <CircularProgress />
    }
    if (isError) {
        return <Typography color="error">Error: {error.message}</Typography>
    }
    return (
        <Grid container spacing={2} sx={{justifyContent:"center",alignItems:"center",gap:2}}>
            {data.response.data.map((product) => (
                <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
                    <Card sx={{ width: 400 ,textAlign:"center" }}  >
                        <CardMedia component="img" sx={{ width: 200 ,  margin: 'auto'}} image={product.image} alt={product.name} />
                        <CardContent>
                            <Typography variant="h5">{product.name}</Typography>
                            <Typography variant="h6">{product.price}$</Typography>
                            <Link to={`/products/${product.id}`}>
                                Details
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}
