import React from 'react'
import { useParams } from 'react-router-dom'
import useProduct from '../../hooks/useProduct'
import { CircularProgress, Typography } from '@mui/material'
import { Card, CardMedia, CardContent, Grid } from '@mui/material'

export default function ProductDetails() {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useProduct(id);

    console.log(data);
    if (isLoading) {
        return <CircularProgress />
    }
    if (isError) {
        return <Typography color="error">Error: {error.message}</Typography>
    }

    return (
        <Grid container spacing={2} sx={{justifyContent:"center",alignItems:"center",gap:2}}>
            <Grid item key={data.response.id} xs={12} sm={6} md={4}>
                <Card sx={{ width: 400 ,textAlign:"center" }}  >
                    <CardMedia component="img" sx={{ width: 200 ,  margin: 'auto'}} image={data.response.image} alt={data.response.name} />
                    <CardContent>
                        <Typography variant="h5">{data.response.name}</Typography>
                        <Typography variant="h6">{data.response.price}$</Typography>
                        <Typography variant="h6">{data.response.category}</Typography>
                        <Typography variant="h6">{data.response.description}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
